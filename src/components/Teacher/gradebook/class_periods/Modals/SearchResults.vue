<template>
    <div class="main-content">
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-toolbar color="primary" dark>
                    <span class="text-h6">Search Results </span>
                </v-toolbar>
                <v-card-text>
                    <br />
                    <br v-if="student.has_results" />
                    <v-row dense>
                        <v-col cols="12" v-if="student.has_results">
                            <div class="body-content">
                                <div class="body-image">
                                    <img :src="student.photo" alt="" />
                                </div>
                                <div class="body-credentials">
                                    <span style="font-weight: bold">
                                        {{
                                            student.first_name +
                                            " " +
                                            student.middle_name +
                                            " " +
                                            student.last_name
                                        }}
                                    </span>
                                    <span> student </span>
                                    <span> {{ student.code }} </span>
                                    <span> {{ student.email }} </span>

                                    <div
                                        class="student-status"
                                        v-show="student.status == 'pending'"
                                    >
                                        <span style="color: red">Pending</span>
                                        <div class="status-actions">
                                            <v-btn depressed color="success">
                                                Accept
                                            </v-btn>
                                            <v-btn depressed color="error">
                                                Decline
                                            </v-btn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" v-else>
                            <div class="body-message">
                                <div class="body-image">
                                    <img
                                        src="https://static.vecteezy.com/system/resources/thumbnails/006/208/684/small/search-no-result-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
                                        alt=""
                                    />
                                </div>
                                <span style="font-weight: bold">
                                    No results found
                                </span>
                                <span>
                                    Sorry! There weren’t any saved views, recent
                                    queries, or sources matching your search.
                                </span>
                            </div>
                        </v-col>
                        <v-col cols="12">
                            <br />
                            <v-card-actions class="justify-end">
                                <v-btn
                                    color="primary"
                                    @click="closeResultsModal()"
                                >
                                    OK
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
        student: Object,
    },

    data: () => ({
        dialog: true,
    }),

    methods: {
        closeResultsModal() {
            this.$emit("closeResults");
        },
    },
};
</script>

<style scoped>
.v-btn {
    text-transform: none;
}

.body-content {
    display: flex;
    gap: 25px;
}

.body-credentials {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.body-image img {
    width: 100px;
    border-radius: 50%;
}

.student-status {
    display: flex;
    flex-direction: column;
}

.status-actions {
    display: flex;
    gap: 10px;
}

.body-message {
    width: 75%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    margin: auto;
}
</style>
