<template>
    <div class="main-container">
        <v-card width="450" class="pa-8 ma-auto">
            <v-card-title class="justify-center">
                <h5 id="form-title">Sign In Account</h5>
            </v-card-title>
            <v-card-text>
                <v-row dense>
                    <v-col cols="12">
                        <v-alert
                            text
                            outlined
                            type="error"
                            color="deep-orange"
                            v-if="show_error_message"
                        >
                            <span id="error-message">
                                Invalid username or password
                            </span>
                        </v-alert>
                    </v-col>
                    <v-col cols="12">
                        <v-select
                            id="select-role"
                            v-model="select"
                            :items="items"
                            :error-messages="selectErrors"
                            label="Login as..."
                            flat
                            outlined
                            solo
                            required
                            @change="$v.select.$touch()"
                            @blur="$v.select.$touch()"
                        />
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            id="input-email"
                            v-model="email"
                            :error-messages="emailErrors"
                            label="E-mail"
                            placeholder="sample@email.com"
                            type="email"
                            outlined
                            required
                            @input="$v.email.$touch()"
                            @blur="$v.email.$touch()"
                        />
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            id="input-password"
                            v-model="password"
                            :error-messages="passwordErrors"
                            :append-icon="show_eye ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show_eye ? 'text' : 'password'"
                            name="input-10-2"
                            label="Password"
                            outlined
                            required
                            class="input-group--focused"
                            @click:append="show_eye = !show_eye"
                            @input="$v.password.$touch()"
                            @blur="$v.password.$touch()"
                        />
                    </v-col>
                    <v-col cols="12">
                        <v-btn
                            id="button-signin"
                            x-large
                            width="100%"
                            color="primary"
                            dark
                            @click="submit()"
                        >
                            <span>SIGN IN</span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import { TeacherSignIn } from "@/api/Teacher/users/SignIn";
import { StudentSignIn } from "@/api/Student/users/SignIn";
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],

    validations: {
        select: { required },
        email: { required, email },
        password: { required },
    },

    data: () => ({
        select: "",
        email: "",
        password: "",
        items: ["Student", "Teacher"],
        show_eye: false,
        show_error_message: false,
    }),

    computed: {
        selectErrors() {
            const errors = [];
            if (!this.$v.select.$dirty) return errors;
            !this.$v.select.required && errors.push("Item is required");
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.email && errors.push("Must be valid e-mail");
            !this.$v.email.required && errors.push("E-mail is required");
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.password.$dirty) return errors;
            !this.$v.password.required && errors.push("Password is required");
            return errors;
        },
    },

    methods: {
        hasErrors() {
            if (
                this.selectErrors.length != 0 ||
                this.emailErrors.length != 0 ||
                this.passwordErrors.length != 0
            ) {
                return true;
            } else {
                return false;
            }
        },

        isValid() {
            if (this.select == "Teacher") {
                const result = TeacherSignIn.prototype.sign_in_user(
                    this.email,
                    this.password
                );
                if (result == true) {
                    this.$router.push("/teacher");
                }
                this.show_error_message = true;
            } else if (this.select == "Student") {
                const result = StudentSignIn.prototype.sign_in_user(
                    this.email,
                    this.password
                );
                if (result == true) {
                    this.$router.push("/student");
                }
                this.show_error_message = true;
            }
        },

        submit() {
            this.$v.$touch();
            this.show_error_message = false;
            if (!this.hasErrors()) {
                this.isValid();
            }
        },
    },
};
</script>
<style scoped>
.main-container {
    max-width: 100%;
    max-height: 100%;
    padding: 50px;
    background-color: var(--blue-1);
}
</style>
