<template>
    <div class="main-container">
        <v-card width="650" class="pa-8 ma-auto">
            <v-card-title class="justify-center">
                <h5>Create New Account</h5>
            </v-card-title>
            <v-card-text>
                <v-row dense>
                    <v-col cols="12">
                        <v-alert
                            id="success-message"
                            text
                            outlined
                            type="error"
                            color="deep-orange"
                            v-if="error.status"
                        >
                            <span> {{ error.message }} </span>
                        </v-alert>
                    </v-col>
                    <v-col cols="12">
                        <v-alert
                            id="error-message"
                            text
                            outlined
                            type="success"
                            color="success"
                            v-if="show_success_message"
                            @click:dismissible="
                                this.show_success_message = false
                            "
                        >
                            <v-row dense>
                                <v-col cols="12">
                                    <span>
                                        Account successfully registered
                                    </span>
                                </v-col>
                                <v-col cols="12">
                                    <span>
                                        Click
                                        <router-link to="/signin">
                                            here
                                        </router-link>
                                        to sign in
                                    </span>
                                </v-col>
                            </v-row>
                        </v-alert>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            id="input-firstname"
                            v-model="user.first_name"
                            :error-messages="first_nameErrors"
                            :counter="25"
                            label="First name"
                            outlined
                            required
                            @input="$v.user.first_name.$touch()"
                            @blur="$v.user.first_name.$touch()"
                        />
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            id="input-middlename"
                            v-model="user.middle_name"
                            :error-messages="middle_nameErrors"
                            :counter="25"
                            label="Middle name (Optional)"
                            outlined
                            @input="$v.user.middle_name.$touch()"
                            @blur="$v.user.middle_name.$touch()"
                        />
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            id="input-lastname"
                            v-model="user.last_name"
                            :error-messages="last_nameErrors"
                            :counter="25"
                            label="Last name"
                            outlined
                            required
                            @input="$v.user.last_name.$touch()"
                            @blur="$v.user.last_name.$touch()"
                        />
                    </v-col>
                    <v-col cols="6">
                        <v-select
                            id="input-role"
                            v-model="user.role"
                            :items="items"
                            :error-messages="roleErrors"
                            label="I registered as..."
                            flat
                            outlined
                            solo
                            required
                            @change="$v.user.role.$touch()"
                            @blur="$v.user.role.$touch()"
                        />
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            id="input-school"
                            v-model="user.school"
                            :error-messages="schoolErrors"
                            :counter="25"
                            label="School"
                            outlined
                            required
                            @input="$v.user.school.$touch()"
                            @blur="$v.user.school.$touch()"
                        />
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            id="input-email"
                            v-model="user.email"
                            :error-messages="emailErrors"
                            :counter="25"
                            label="E-mail"
                            placeholder="sample@email.com"
                            outlined
                            required
                            @input="$v.user.email.$touch()"
                            @blur="$v.user.email.$touch()"
                        />
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            id="input-password"
                            v-model="user.password"
                            :error-messages="passwordErrors"
                            :append-icon="show_eye ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show_eye ? 'text' : 'password'"
                            name="input-10-2"
                            label="Password"
                            :counter="25"
                            outlined
                            required
                            @click:append="show_eye = !show_eye"
                            @input="$v.user.password.$touch()"
                            @blur="$v.user.password.$touch()"
                        />
                    </v-col>
                    <template v-if="this.user.role === 'Student'">
                        <v-col cols="12">
                            <h4>Contact Person</h4>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                id="contact-firstname"
                                v-model="contact.first_name"
                                :error-messages="contact_first_nameErrors"
                                :counter="25"
                                label="First name"
                                outlined
                                required
                                @input="$v.contact.first_name.$touch()"
                                @blur="$v.contact.first_name.$touch()"
                            />
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                id="contact-middlename"
                                v-model="contact.middle_name"
                                :error-messages="contact_middle_nameErrors"
                                :counter="25"
                                label="Middle name (Optional)"
                                outlined
                                @input="$v.contact.middle_name.$touch()"
                                @blur="$v.contact.middle_name.$touch()"
                            />
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                id="contact-lastname"
                                v-model="contact.last_name"
                                :error-messages="contact_last_nameErrors"
                                :counter="25"
                                label="Last name"
                                outlined
                                required
                                @input="$v.contact.last_name.$touch()"
                                @blur="$v.contact.last_name.$touch()"
                            />
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                id="contact-relationship"
                                v-model="contact.relationship"
                                :error-messages="relationshipErrors"
                                :counter="25"
                                label="Relationship"
                                outlined
                                required
                                @input="$v.contact.relationship.$touch()"
                                @blur="$v.contact.relationship.$touch()"
                            />
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                id="contact-country"
                                v-model="contact.country"
                                :error-messages="countryErrors"
                                :counter="25"
                                label="Country"
                                outlined
                                required
                                @input="$v.contact.country.$touch()"
                                @blur="$v.contact.country.$touch()"
                            />
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                id="contact-phone"
                                v-model="contact.phone"
                                :error-messages="phoneErrors"
                                :counter="10"
                                prefix="+1"
                                type="number"
                                label="Phone Number"
                                hide-spin-buttons
                                min="0"
                                max="9"
                                outlined
                                required
                                @input="$v.contact.phone.$touch()"
                                @blur="$v.contact.phone.$touch()"
                            />
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                id="contact-street"
                                v-model="contact.street"
                                :error-messages="streetErrors"
                                :counter="25"
                                label="Street"
                                outlined
                                required
                                @input="$v.contact.street.$touch()"
                                @blur="$v.contact.street.$touch()"
                            />
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                id="contact-city"
                                v-model="contact.city"
                                :error-messages="cityErrors"
                                :counter="25"
                                label="City"
                                outlined
                                required
                                @input="$v.contact.city.$touch()"
                                @blur="$v.contact.city.$touch()"
                            />
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                id="contact-state"
                                v-model="contact.state_province_region"
                                :error-messages="state_province_regionErrors"
                                :counter="25"
                                label="State/Province/Region"
                                outlined
                                required
                                @input="
                                    $v.contact.state_province_region.$touch()
                                "
                                @blur="
                                    $v.contact.state_province_region.$touch()
                                "
                            />
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                id="contact-zipcode"
                                v-model="contact.zip_code"
                                :error-messages="zip_codeErrors"
                                :counter="5"
                                label="ZIP Code"
                                outlined
                                required
                                @input="$v.contact.zip_code.$touch()"
                                @blur="$v.contact.zip_code.$touch()"
                            />
                        </v-col>
                    </template>
                    <v-col cols="12">
                        <br />
                        <v-btn
                            id="button-create"
                            x-large
                            width="100%"
                            color="primary"
                            dark
                            @click="submit()"
                        >
                            <span>CREATE ACCOUNT</span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { TeacherSignUp } from "@/api/Teacher/users/SignUp";
import { StudentSignUp } from "@/api/Student/users/SignUp";
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],

    validations: {
        user: {
            first_name: { required, maxLength: maxLength(25) },
            middle_name: { maxLength: maxLength(25) },
            last_name: { required, maxLength: maxLength(25) },
            role: { required },
            school: { required, maxLength: maxLength(25) },
            email: { required, email, maxLength: maxLength(25) },
            password: { required, maxLength: maxLength(25) },
        },

        contact: {
            first_name: { required, maxLength: maxLength(25) },
            middle_name: { maxLength: maxLength(25) },
            last_name: { required, maxLength: maxLength(25) },
            relationship: { required, maxLength: maxLength(25) },
            country: { required, maxLength: maxLength(25) },
            phone: { required, maxLength: maxLength(10) },
            street: { required, maxLength: maxLength(25) },
            city: { required, maxLength: maxLength(25) },
            state_province_region: { required, maxLength: maxLength(25) },
            zip_code: { required, maxLength: maxLength(5) },
        },
    },

    data: () => ({
        user: {
            first_name: "",
            middle_name: "",
            last_name: "",
            role: "",
            school: "",
            email: "",
            password: "",
        },

        contact: {
            first_name: "",
            middle_name: "",
            last_name: "",
            relationship: "",
            country: "",
            phone: "",
            street: "",
            city: "",
            state_province_region: "",
            zip_code: "",
        },

        items: ["Student", "Teacher"],
        show_eye: false,
        error: {
            status: false,
            message: "",
        },
        show_success_message: false,
    }),

    computed: {
        first_nameErrors() {
            const errors = [];
            if (!this.$v.user.first_name.$dirty) return errors;
            !this.$v.user.first_name.maxLength &&
                errors.push("First name must be 25 characters long");
            !this.$v.user.first_name.required &&
                errors.push("First name is required");
            return errors;
        },

        middle_nameErrors() {
            const errors = [];
            if (!this.$v.user.middle_name.$dirty) return errors;
            !this.$v.user.middle_name.maxLength &&
                errors.push("Middle name must be 25 characters long");

            return errors;
        },

        last_nameErrors() {
            const errors = [];
            if (!this.$v.user.last_name.$dirty) return errors;
            !this.$v.user.last_name.maxLength &&
                errors.push("Last name must be 25 characters long");
            !this.$v.user.last_name.required &&
                errors.push("Last name is required");
            return errors;
        },

        roleErrors() {
            const errors = [];
            if (!this.$v.user.role.$dirty) return errors;
            !this.$v.user.role.required && errors.push("Role is required");
            return errors;
        },

        schoolErrors() {
            const errors = [];
            if (!this.$v.user.school.$dirty) return errors;
            !this.$v.user.school.maxLength &&
                errors.push("School must be 25 characters long");
            !this.$v.user.school.required && errors.push("School is required");
            return errors;
        },

        emailErrors() {
            const errors = [];
            if (!this.$v.user.email.$dirty) return errors;
            !this.$v.user.email.maxLength &&
                errors.push("E-mail must be 25 characters long");
            !this.$v.user.email.email && errors.push("Must be valid e-mail");
            !this.$v.user.email.required && errors.push("E-mail is required");
            return errors;
        },

        passwordErrors() {
            const errors = [];
            if (!this.$v.user.password.$dirty) return errors;
            !this.$v.user.password.maxLength &&
                errors.push("Password must be 25 characters long");
            !this.$v.user.password.required &&
                errors.push("Password is required");
            return errors;
        },

        contact_first_nameErrors() {
            const errors = [];
            if (!this.$v.contact.first_name.$dirty) return errors;
            !this.$v.contact.first_name.maxLength &&
                errors.push("First name must be 25 characters long");
            !this.$v.contact.first_name.required &&
                errors.push("First name is required");
            return errors;
        },

        contact_middle_nameErrors() {
            const errors = [];
            if (!this.$v.contact.middle_name.$dirty) return errors;
            !this.$v.contact.middle_name.maxLength &&
                errors.push("Middle name must be 25 characters long");

            return errors;
        },

        contact_last_nameErrors() {
            const errors = [];
            if (!this.$v.contact.last_name.$dirty) return errors;
            !this.$v.contact.last_name.maxLength &&
                errors.push("Last name must be 25 characters long");
            !this.$v.contact.last_name.required &&
                errors.push("Last name is required");
            return errors;
        },

        relationshipErrors() {
            const errors = [];
            if (!this.$v.contact.relationship.$dirty) return errors;
            !this.$v.contact.relationship.maxLength &&
                errors.push("Relationship must be 25 characters long");
            !this.$v.contact.relationship.required &&
                errors.push("Relationship is required");
            return errors;
        },

        countryErrors() {
            const errors = [];
            if (!this.$v.contact.country.$dirty) return errors;
            !this.$v.contact.country.maxLength &&
                errors.push("Country must be 25 characters long");
            !this.$v.contact.country.required &&
                errors.push("Country is required");
            return errors;
        },

        phoneErrors() {
            const errors = [];
            if (!this.$v.contact.phone.$dirty) return errors;
            !this.$v.contact.phone.maxLength &&
                errors.push("Phone must be 10 numbers long");
            !this.$v.contact.phone.required && errors.push("Phone is required");
            return errors;
        },

        streetErrors() {
            const errors = [];
            if (!this.$v.contact.street.$dirty) return errors;
            !this.$v.contact.street.maxLength &&
                errors.push("Street must be 25 characters long");
            !this.$v.contact.street.required &&
                errors.push("Street is required");
            return errors;
        },

        cityErrors() {
            const errors = [];
            if (!this.$v.contact.city.$dirty) return errors;
            !this.$v.contact.city.maxLength &&
                errors.push("City must be 25 characters long");
            !this.$v.contact.city.required && errors.push("City is required");
            return errors;
        },

        state_province_regionErrors() {
            const errors = [];
            if (!this.$v.contact.state_province_region.$dirty) return errors;
            !this.$v.contact.state_province_region.maxLength &&
                errors.push("State/Province/Region must be 25 characters long");
            !this.$v.contact.state_province_region.required &&
                errors.push("State/Province/Region is required");
            return errors;
        },

        zip_codeErrors() {
            const errors = [];
            if (!this.$v.contact.zip_code.$dirty) return errors;
            !this.$v.contact.zip_code.maxLength &&
                errors.push("ZIP code must be 5 numbers long");
            !this.$v.contact.zip_code.required &&
                errors.push("ZIP code is required");
            return errors;
        },
    },

    methods: {
        hasErrors() {
            if (this.user.role === "Student") {
                if (
                    this.first_nameErrors.length != 0 ||
                    this.middle_nameErrors.length != 0 ||
                    this.last_nameErrors.length != 0 ||
                    this.roleErrors.length != 0 ||
                    this.schoolErrors.length != 0 ||
                    this.emailErrors.length != 0 ||
                    this.passwordErrors.length != 0 ||
                    this.first_nameErrors.length != 0 ||
                    this.middle_nameErrors.length != 0 ||
                    this.last_nameErrors.length != 0 ||
                    this.relationshipErrors.length != 0 ||
                    this.countryErrors.length != 0 ||
                    this.phoneErrors.length != 0 ||
                    this.streetErrors.length != 0 ||
                    this.cityErrors.length != 0 ||
                    this.state_province_regionErrors.length != 0 ||
                    this.zip_codeErrors.length != 0
                ) {
                    this.show_success_message = false;
                    return true;
                } else {
                    return false;
                }
            } else {
                if (
                    this.first_nameErrors.length != 0 ||
                    this.last_nameErrors.length != 0 ||
                    this.roleErrors.length != 0 ||
                    this.schoolErrors.length != 0 ||
                    this.emailErrors.length != 0 ||
                    this.passwordErrors.length != 0
                ) {
                    this.show_success_message = false;
                    return true;
                } else {
                    return false;
                }
            }
        },

        submit() {
            this.$v.$touch();
            this.error.status = false;
            this.show_success_message = false;

            if (!this.hasErrors()) {
                if (this.user.role === "Teacher") {
                    const result = TeacherSignUp.prototype.sign_up_user(
                        this.user
                    );
                    if (result.status === false) {
                        this.show_success_message = true;
                        this.resetFields();
                    } else {
                        this.error.status = true;
                        this.error.message = result.message;
                    }
                } else if (this.user.role === "Student") {
                    const result = StudentSignUp.prototype.sign_up_user(
                        this.user
                    );
                    if (result.status === false) {
                        this.show_success_message = true;
                        this.resetFields();
                    } else {
                        this.error.status = true;
                        this.error.message = result.message;
                    }
                }
            }
        },

        resetFields() {
            this.$v.$reset();
            Object.keys(this.user).forEach((key) => (this.user[key] = ""));
            Object.keys(this.contact).forEach(
                (key) => (this.contact[key] = "")
            );
        },
    },
};
</script>

<style scoped>
* {
    text-transform: none;
    text-decoration: none;
}

.main-container {
    max-width: 100%;
    max-height: 100%;
    padding: 50px;
    background-color: var(--blue-1);
}
</style>
