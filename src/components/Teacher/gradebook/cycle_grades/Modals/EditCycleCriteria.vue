<template>
    <div class="main-content">
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    depressed
                    small
                    v-bind="attrs"
                    v-on="on"
                    class="accept-action"
                    @click="getCurrentData()"
                >
                    Edit
                </v-btn>
            </template>
            <v-card>
                <v-toolbar color="primary" dark>
                    <span class="text-h6">Edit Criteria</span>
                </v-toolbar>
                <v-card-text>
                    <br />
                    <v-row dense>
                        <v-col cols="12">
                            <v-alert
                                text
                                outlined
                                type="error"
                                color="deep-orange"
                                v-if="checkTotalCycleCriteria > 100"
                            >
                                <span> Criteria must not exceed to 100%. </span>
                            </v-alert>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="new_item.cycle1"
                                type="number"
                                label="Cycle 1 (%)"
                                required
                                outlined
                                :error-messages="cycle1Errors"
                                @input="$v.new_item.cycle1.$touch()"
                                @blur="$v.new_item.cycle1.$touch()"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="new_item.cycle2"
                                type="number"
                                label="Cycle 2 (%)"
                                required
                                outlined
                                :error-messages="cycle2Errors"
                                @input="$v.new_item.cycle2.$touch()"
                                @blur="$v.new_item.cycle2.$touch()"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="new_item.cycle3"
                                type="number"
                                min="0"
                                label="Cycle 3 (%)"
                                required
                                outlined
                                :error-messages="cycle3Errors"
                                @input="$v.new_item.cycle3.$touch()"
                                @blur="$v.new_item.cycle3.$touch()"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="new_item.cycle4"
                                type="number"
                                label="Cycle 4 (%)"
                                required
                                outlined
                                :error-messages="cycle4Errors"
                                @input="$v.new_item.cycle4.$touch()"
                                @blur="$v.new_item.cycle4.$touch()"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <span
                                :class="{
                                    'error-total':
                                        checkTotalCycleCriteria > 100,
                                }"
                            >
                                Total: {{ checkTotalCycleCriteria + "%" }}
                            </span>
                        </v-col>
                        <v-col cols="12">
                            <br />
                            <v-card-actions class="justify-end">
                                <v-btn
                                    color="primary"
                                    text
                                    @click="resetAllFields()"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    color="success"
                                    :disabled="validData"
                                    @click="updateEducation()"
                                >
                                    Update
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
import { CycleGradesService } from "@/api/Teacher/gradebook/cycle_grades/CycleGradesData";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],

    validations: {
        new_item: {
            cycle1: { required },
            cycle2: { required },
            cycle3: { required },
            cycle4: { required },
        },
    },

    data: () => ({
        cycle_criteria: CycleGradesService.prototype.getCycleCriteria(),

        current_item: {
            cycle1: "",
            cycle2: "",
            cycle3: "",
            cycle4: "",
        },

        new_item: {
            cycle1: "",
            cycle2: "",
            cycle3: "",
            cycle4: "",
        },

        dialog: false,
    }),

    methods: {
        getGradeWeightsData() {
            const all_data = {
                cycle1: this.cycle_criteria[0].weights.toString(),
                cycle2: this.cycle_criteria[1].weights.toString(),
                cycle3: this.cycle_criteria[2].weights.toString(),
                cycle4: this.cycle_criteria[3].weights.toString(),
            };
            return all_data;
        },

        getCurrentData() {
            this.current_item = this.getGradeWeightsData();
            this.new_item = this.getGradeWeightsData();
        },

        updateEducation() {
            CycleGradesService.prototype.updateGradeWeights(
                parseInt(this.new_item.cycle1),
                parseInt(this.new_item.cycle2),
                parseInt(this.new_item.cycle3),
                parseInt(this.new_item.cycle4)
            );
            this.$emit("showSnackbar");
            this.resetAllFields();
        },

        resetAllFields() {
            const reset_item = {
                cycle1: "",
                cycle2: "",
                cycle3: "",
                cycle4: "",
            };
            this.new_item = reset_item;
            this.dialog = false;
        },

        noChanges() {
            if (
                JSON.stringify(this.new_item) ===
                JSON.stringify(this.current_item)
            ) {
                return true;
            } else {
                return false;
            }
        },

        checkAllErrors() {
            if (
                this.cycle1Errors.length != 0 ||
                this.cycle2Errors.length != 0 ||
                this.cycle3Errors.length != 0 ||
                this.cycle4Errors.length != 0 ||
                this.checkTotalCycleCriteria > 100
            ) {
                return true;
            } else {
                return false;
            }
        },

        checkInput(input) {
            if (input != "") {
                const num = parseInt(input);
                return num;
            }
            return 0;
        },
    },

    computed: {
        checkTotalCycleCriteria() {
            let total =
                this.checkInput(this.new_item.cycle1) +
                this.checkInput(this.new_item.cycle2) +
                this.checkInput(this.new_item.cycle3) +
                this.checkInput(this.new_item.cycle4);
            return total;
        },

        validData() {
            if (this.noChanges() || this.checkAllErrors()) {
                return true;
            } else {
                return false;
            }
        },

        cycle1Errors() {
            const errors = [];
            if (
                parseInt(this.new_item.cycle1) < 0 ||
                this.new_item.cycle1 === "-0"
            ) {
                this.new_item.cycle1 = 0;
            }

            if (!this.$v.new_item.cycle1.$dirty) return errors;

            !this.$v.new_item.cycle1.required &&
                errors.push("Cycle 1 is required.");
            return errors;
        },

        cycle2Errors() {
            const errors = [];
            if (
                parseInt(this.new_item.cycle2) < 0 ||
                this.new_item.cycle2 === "-0"
            ) {
                this.new_item.cycle2 = 0;
            }

            if (!this.$v.new_item.cycle2.$dirty) return errors;

            !this.$v.new_item.cycle2.required &&
                errors.push("Cycle 2 is required.");
            return errors;
        },

        cycle3Errors() {
            const errors = [];
            if (
                parseInt(this.new_item.cycle3) < 0 ||
                this.new_item.cycle3 === "-0"
            ) {
                this.new_item.cycle3 = 0;
            }

            if (!this.$v.new_item.cycle3.$dirty) return errors;

            !this.$v.new_item.cycle3.required &&
                errors.push("Cycle 3 is required.");
            return errors;
        },

        cycle4Errors() {
            const errors = [];
            if (
                parseInt(this.new_item.cycle4) < 0 ||
                this.new_item.cycle4 === "-0"
            ) {
                this.new_item.cycle4 = 0;
            }

            if (!this.$v.new_item.cycle4.$dirty) return errors;

            !this.$v.new_item.cycle4.required &&
                errors.push("Cycle 4 is required.");
            return errors;
        },
    },
};
</script>

<style scoped>
.v-btn {
    text-transform: none;
}

.error-total {
    color: red;
}
</style>
