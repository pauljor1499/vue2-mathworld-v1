<template>
    <v-card>
        <SuccessSnackbar
            v-if="snackbar"
            :text="success_message"
            @closeSnackbar="snackbar = false"
        />
        <v-card-title class="content-header">
            <span>Criteria</span>
            <EditCycleCriteria @showSnackbar="snackbarGradeWeights()" />
        </v-card-title>
        <v-card-text class="content-body">
            <div
                class="content-item"
                v-for="(item, index) in cycle_criteria"
                :key="index"
            >
                <div>{{ item.type }}</div>
                <div>{{ item.weights + "%" }}</div>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import { CycleGradesService } from "@/api/Teacher/gradebook/cycle_grades/CycleGradesData";
import EditCycleCriteria from "./Modals/EditCycleCriteria.vue";
import SuccessSnackbar from "@/components/Teacher/main/snackbars/Success.vue";

export default {
    components: {
        EditCycleCriteria,
        SuccessSnackbar,
    },

    data() {
        return {
            cycle_criteria: CycleGradesService.prototype.getCycleCriteria(),

            success_message: "",
            snackbar: false,
        };
    },

    methods: {
        snackbarGradeWeights() {
            this.success_message = "Criteria successfully updated";
            this.snackbar = true;
        },
    },
};
</script>

<style scoped>
span {
    font-size: 0.9em;
}

.content-header {
    display: flex;
    justify-content: space-between;
}

.content-body {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}

.content-body .content-item {
    display: flex;
    justify-content: space-between;
}
</style>
