<template>
    <div class="main-content">
        <SuccessSnackbar
            v-if="snackbar_success.status"
            :text="snackbar_success.message"
            @closeSnackbar="snackbar_success.status = false"
        />
        <ErrorSnackbar
            v-if="snackbar_error.status"
            :text="snackbar_error.message"
            @closeSnackbar="snackbar_error.status = false"
        />
        <NavBar />
        <router-view
            @SnackbarSuccess="showSuccessMessage($event)"
            @SnackbarError="showErrorMessage($event)"
        />
    </div>
</template>

<script>
import NavBar from "@/components/Teacher/main/NavBar.vue";
import SuccessSnackbar from "@/components/Teacher/main/snackbars/Success.vue";
import ErrorSnackbar from "@/components/Teacher/main/snackbars/Error.vue";

export default {
    components: { NavBar, SuccessSnackbar, ErrorSnackbar },

    data() {
        return {
            snackbar_success: {
                status: false,
                message: "",
            },

            snackbar_error: {
                status: false,
                message: "",
            },
        };
    },

    methods: {
        showSuccessMessage(message) {
            this.snackbar_success.status = true;
            this.snackbar_success.message = message;
        },

        showErrorMessage(message) {
            this.snackbar_error.status = true;
            this.snackbar_error.message = message;
        },
    },
};
</script>
