<template>
    <div class="main-content">
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" v-bind="attrs" v-on="on">
                    <v-icon>mdi-magnify </v-icon> Search Student
                </v-btn>
            </template>
            <v-card>
                <v-toolbar color="primary" dark>
                    <span class="text-h6">Search Student</span>
                </v-toolbar>
                <v-card-text>
                    <br />
                    <v-row dense>
                        <v-col cols="12">
                            <v-text-field
                                v-model="input_item.code"
                                label="Code"
                                outlined
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                v-model="input_item.first_name"
                                label="First name"
                                outlined
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                v-model="input_item.middle_name"
                                label="Middle name"
                                outlined
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                v-model="input_item.last_name"
                                label="Last name"
                                outlined
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-card-actions class="justify-end">
                                <v-btn
                                    color="primary"
                                    text
                                    @click="resetAllFields()"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    color="primary"
                                    :disabled="fieldsEmpty"
                                    @click="searchStudent()"
                                >
                                    Search
                                </v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { ClassPeriodsService } from "@/api/Teacher/gradebook/class_periods/ClassPeriodsData";

export default {
    validations: {
        input_item: {
            code: {},
            course: {},
            field: {},
            start_year: {},
        },
    },

    data: () => ({
        input_item: {
            code: "",
            first_name: "",
            middle_name: "",
            last_name: "",
        },

        student: {
            photo: "",
            status: "",
            code: "",
            first_name: "",
            middle_name: "",
            last_name: "",
        },

        dialog: false,
    }),

    methods: {
        searchStudent() {
            this.student = ClassPeriodsService.prototype.searchStudent(
                this.input_item.code,
                this.input_item.first_name,
                this.input_item.middle_name,
                this.input_item.last_name
            );

            this.$emit("search_results", this.student);
            this.resetAllFields();
        },

        resetAllFields() {
            this.input_item.code = "";
            this.input_item.first_name = "";
            this.input_item.middle_name = "";
            this.input_item.last_name = "";
            this.dialog = false;
        },
    },

    computed: {
        fieldsEmpty() {
            if (
                this.input_item.code == "" &&
                this.input_item.first_name == "" &&
                this.input_item.middle_name == "" &&
                this.input_item.last_name == ""
            ) {
                return true;
            } else {
                return false;
            }
        },
    },
};
</script>

<style scoped>
.v-btn {
    text-transform: none;
}
</style>
