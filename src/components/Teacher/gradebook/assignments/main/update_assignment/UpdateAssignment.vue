<template>
    <div class="main-content">
        <MathWorld
            v-if="assignment_type == 'MW'"
            @SnackBarSuccess="showSuccessMessage($event)"
            @SnackbarError="showErrorMessage($event)"
        />
    </div>
</template>

<script>
import MathWorld from "../../MathWorld/update_assignment/MainPage.vue";

export default {
    components: {
        MathWorld,
    },

    data() {
        return {
            assignment_type: "",
        };
    },

    methods: {
        checkAssignmentType() {
            if (this.$route.params.assignment_type == "MW") {
                this.assignment_type = "MW";
            } else if (this.$route.params.assignment_type == "CET") {
                this.assignment_type = "CET";
            } else if (this.$route.params.assignment_type == "STAAR") {
                this.assignment_type = "STAAR";
            } else {
                this.$router
                    .push({ name: "TeacherNotFound" })
                    .catch((err) => err);
            }
        },

        showSuccessMessage(message) {
            this.$emit("SnackBarSuccess", message);
        },

        showErrorMessage(message) {
            this.$emit("SnackbarError", message);
        },
    },

    created() {
        this.checkAssignmentType();
    },
};
</script>
