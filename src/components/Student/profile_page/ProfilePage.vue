<template>
    <div class="main-content">
        <div class="text-center">
            <v-dialog
                v-if="store.loading ? (dialog = true) : ''"
                persistent
                v-model="dialog"
                width="250"
            >
                <v-card>
                    <v-card-title></v-card-title>
                    <v-card-text class="justify-center">
                        <v-progress-circular indeterminate color="primary" />
                        <span class="text-h7"> Please wait... </span>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
        <body v-if="store.current_user != null">
            <div class="content-title">
                <h2>My Profile</h2>
                <v-btn
                    rounded
                    color="#ffff"
                    @click="edit_mode = !edit_mode"
                    v-show="!edit_mode"
                    id="edit-profile"
                >
                    Edit Profile
                </v-btn>
                <v-btn
                    rounded
                    color="#ffff"
                    @click="edit_mode = !edit_mode"
                    v-show="edit_mode"
                    >Exit Edit Mode</v-btn
                >
            </div>
            <div class="content-body">
                <div class="left-section">
                    <div class="teacher-section">
                        <div class="teacher-actions">
                            <v-fab-transition>
                                <AddNewPhoto
                                    @clickUploadPhoto="uploadPhoto($event)"
                                    v-show="edit_mode"
                                />
                            </v-fab-transition>
                        </div>
                        <div class="teacher-image">
                            <img
                                src="@/assets/default_image.png"
                                alt="Teacher Photo"
                                v-if="
                                    store.current_user.credentials.photo == null
                                "
                            />
                            <img
                                src="@/assets/default_image.png"
                                alt="No Photo"
                                v-else-if="
                                    store.current_user.credentials.photo == ''
                                "
                            />
                            <img
                                :src="store.current_user.credentials.photo"
                                alt="No Photo"
                                v-else
                            />
                        </div>
                    </div>
                </div>
                <div class="right-section">
                    <div class="teacher-credentials">
                        <div class="credentials-header">
                            <div class="teacher-name">
                                {{
                                    store.current_user.credentials.name
                                        .first_name +
                                    " " +
                                    store.current_user.credentials.name
                                        .middle_name +
                                    " " +
                                    store.current_user.credentials.name
                                        .last_name
                                }}
                            </div>
                        </div>
                        <div class="teacher-email">
                            {{ store.current_user.credentials.account.email }}
                        </div>
                        <div class="teacher-position">
                            {{ store.current_user.role }}
                        </div>
                    </div>

                    <div class="teacher-office">
                        <div class="office-title">Office Details</div>
                        <div class="office-body">
                            <div class="office-location">
                                <div class="label">Location</div>
                                <div class="text">
                                    {{
                                        store.current_user.credentials.office
                                            .location
                                    }}
                                </div>
                            </div>
                            <div class="office-time">
                                <div class="label">Free time</div>
                                <div class="text">
                                    {{
                                        store.current_user.credentials.office
                                            .free_time
                                    }}
                                </div>
                            </div>
                            <div class="office-phone-number">
                                <div class="label">Phone number</div>
                                <div class="text">
                                    {{
                                        store.current_user.credentials.office
                                            .phone_number
                                    }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="teacher-biography">
                        <div class="biography-header">
                            <div class="biography-title">Biography</div>
                            <div>
                                <v-fab-transition>
                                    <div v-show="edit_mode">
                                        <AddBiographyDetails
                                            v-if="
                                                store.current_user.credentials
                                                    .background.biography ==
                                                null
                                            "
                                            @addBiography="addBiography($event)"
                                        />

                                        <div class="biography-actions" v-else>
                                            <RemoveBiographyDetails
                                                :biography_details="
                                                    store.current_user
                                                        .credentials.background
                                                        .biography
                                                "
                                                @removeBiography="
                                                    removeBiography()
                                                "
                                            />
                                            <UpdateBiography
                                                :biography_details="
                                                    store.current_user
                                                        .credentials.background
                                                        .biography
                                                "
                                                @updateBiography="
                                                    updateBiography($event)
                                                "
                                            />
                                        </div>
                                    </div>
                                </v-fab-transition>
                            </div>
                        </div>
                        <div class="biography-body">
                            <div>
                                <p
                                    v-if="
                                        store.current_user.credentials
                                            .background.biography != null
                                    "
                                >
                                    {{
                                        store.current_user.credentials
                                            .background.biography
                                    }}
                                </p>
                                <p v-else>
                                    <i>No Biography Details</i>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="teacher-education">
                        <div class="education-header">
                            <div class="education-title">Education</div>
                            <v-fab-transition>
                                <AddNewItem
                                    v-show="edit_mode"
                                    @addEducation="addEducation($event)"
                                />
                            </v-fab-transition>
                        </div>
                        <div class="education-body">
                            <div
                                class="education-item"
                                v-for="(item, index) in store.current_user
                                    .credentials.background.education"
                                :key="index"
                            >
                                <div>
                                    <div class="item-school">
                                        {{ item.school }}
                                    </div>
                                    <div class="item-course">
                                        {{ item.course }}
                                    </div>
                                    <div class="item-level">
                                        {{ item.field }}
                                    </div>
                                    <div class="item-year">
                                        {{ item.start_year }}-{{
                                            item.end_year
                                        }}
                                    </div>
                                </div>

                                <v-fab-transition>
                                    <div
                                        class="education-options"
                                        v-show="edit_mode"
                                    >
                                        <RemoveItem
                                            :item_index="index"
                                            :education="item"
                                            @removeEducation="
                                                removeEducation($event)
                                            "
                                        />
                                        <UpdateItem
                                            :item_index="index"
                                            :education="item"
                                            @updateEducation="
                                                updateEducation($event)
                                            "
                                        />
                                    </div>
                                </v-fab-transition>
                            </div>
                            <p
                                v-show="
                                    store.current_user.credentials.background
                                        .education.length == 0
                                "
                            >
                                <i>No Education Details</i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </div>
</template>

<script>
import { storeCurrentUser } from "@/store/CurrentUser";
import { ProfilePageService } from "@/api/Teacher/profile_page/ProfiilePageData.js";
import AddNewPhoto from "./Modal/Add/AddNewPhoto.vue";
import AddNewItem from "./Modal/Add/AddNewItem.vue";
import UpdateItem from "./Modal/Update/UpdateItem.vue";
import RemoveItem from "./Modal/Remove/RemoveItem.vue";
import UpdateBiography from "./Modal/Update/UpdateBiography.vue";
import AddBiographyDetails from "./Modal/Add/AddBiographyDetails.vue";
import RemoveBiographyDetails from "./Modal/Remove/RemoveBiographyDetails.vue";
import DefaultImage from "@/assets/default_image.png";

export default {
    components: {
        AddNewPhoto,
        AddNewItem,
        UpdateItem,
        RemoveItem,
        UpdateBiography,
        AddBiographyDetails,
        RemoveBiographyDetails,
    },

    data: () => ({
        store: storeCurrentUser(),
        edit_mode: false,
    }),

    methods: {
        addBiography(new_data) {
            ProfilePageService.prototype.add_biography(new_data);
            this.showSuccessMessage("Biography successfully added");
        },

        addEducation(new_education) {
            ProfilePageService.prototype.add_education(new_education);
            this.showSuccessMessage("Education successfully added");
        },

        uploadPhoto(photo) {
            ProfilePageService.prototype.uploadNewPhoto(photo);
            this.showSuccessMessage("Photo successfully uploaded");
        },

        removeBiography() {
            ProfilePageService.prototype.remove_biography();
            this.showSuccessMessage("Biography successfully removed");
        },

        removeEducation(item_index) {
            ProfilePageService.prototype.remove_education(item_index);
            this.showSuccessMessage("Education successfully removed");
        },

        updateBiography(new_biography) {
            ProfilePageService.prototype.update_biography(new_biography);
            this.showSuccessMessage("Biography successfully updated");
        },

        updateEducation(new_education) {
            ProfilePageService.prototype.update_education(new_education);
            this.showSuccessMessage("Education successfully updated");
        },

        showSuccessMessage(message) {
            this.$emit("SnackbarSuccess", message);
        },
    },
};
</script>

<style scoped>
.main-content {
    max-width: 100%;
    max-height: 100%;
}

.v-btn {
    text-transform: none;
}

.content-title {
    display: flex;
    justify-content: space-between;
    padding: 25px 5% 25px 5%;
    background-color: #0091de;
}

.content-title h2 {
    color: #ffff;
}

.content-body {
    display: flex;
    gap: 20px;
    padding: 5% 15% 5% 15%;
}

.left-section {
    flex: 0.6;
}

.teacher-section {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}

.teacher-actions {
    position: absolute;
    margin-left: 10%;
    margin-top: 12%;
}

.teacher-image {
    width: 220px;
    height: 220px;
}

.teacher-image img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
}

.right-section {
    flex: 2;
    display: flex;
    flex-direction: column;
    row-gap: 50px;
}

.teacher-name {
    font-size: 1.5em;
    font-weight: bold;
}

.office-title {
    font-size: 1.2em;
    font-weight: bold;
}

.office-body {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    padding: 20px 0px 20px 0px;
    border-top: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
}

.office-body .text {
    font-weight: bold;
}

.office-location {
    width: 100%;
    border-right: 1px solid #e2e2e2;
}

.office-time {
    width: 100%;
    padding-left: 5%;
}

.office-phone-number {
    width: 100%;
    padding-left: 5%;
    border-left: 1px solid #c4c4c4;
}

.biography-header {
    display: flex;
    justify-content: space-between;
}

.biography-title {
    font-size: 1.2em;
    font-weight: bold;
}

.biography-actions {
    display: flex;
    gap: 20px;
}

.biography-body {
    width: 100%;
    height: auto;
    margin-top: 10px;
    text-align: justify;
    text-justify: inter-word;
}

.education-header {
    display: flex;
    justify-content: space-between;
}

.education-title {
    font-size: 1.2em;
    font-weight: bold;
}

.education-options {
    display: flex;
    align-items: center;
    gap: 20px;
}

.education-body {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
}

.education-item {
    display: flex;
    justify-content: space-between;
}
</style>
