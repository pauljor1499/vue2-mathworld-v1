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
    methods: {
        showSuccessMessage(message) {
            this.$emit("SnackBarSuccess", message);
        },

        showErrorMessage(message) {
            this.$emit("SnackbarError", message);
        },
    },
};
</script>
