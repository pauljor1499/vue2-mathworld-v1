<template>
    <div class="main-content">
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    fab
                    outlined
                    x-small
                    dark
                    v-bind="attrs"
                    v-on="on"
                    @click="getCurrentData()"
                >
                    <v-icon dense>mdi-trash-can</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-toolbar color="error" dark>
                    <span class="text-h6">Remove Details</span>
                </v-toolbar>
                <v-card-text>
                    <br />
                    <v-row dense>
                        <v-col cols="12">
                            <v-textarea
                                required
                                auto-grow
                                outlined
                                disabled
                                v-model="current_data"
                            >
                            </v-textarea>
                        </v-col>
                        <v-col cols="12">
                            <v-card-actions class="justify-end">
                                <v-btn text @click="dialog = false">
                                    Cancel
                                </v-btn>
                                <v-btn
                                    color="error"
                                    dark
                                    @click="removeBiographyDetails()"
                                >
                                    Remove
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
export default {
    props: {
        biography_details: String,
    },

    data: () => ({
        current_data: "",
        dialog: false,
    }),

    methods: {
        getCurrentData() {
            this.current_data = this.biography_details;
        },

        removeBiographyDetails() {
            this.$emit("removeBiography");
            this.dialog = false;
        },
    },
};
</script>

<style scoped>
.v-btn {
    text-transform: none;
}
</style>
