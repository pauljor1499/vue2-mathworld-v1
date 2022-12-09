<template>
    <div class="main-content">
        <router-view
            @SnackBarSuccess="showSuccessMessage($event)"
            @SnackbarError="showErrorMessage($event)"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },

    methods: {
        showSuccessMessage(message) {
            this.$emit("SnackbarSuccess", message);
        },

        showErrorMessage(message) {
            this.$emit("SnackbarError", message);
        },
    },
};
</script>
