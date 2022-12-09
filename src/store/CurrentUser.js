import { defineStore } from "pinia";

export const storeCurrentUser = defineStore("storeCurrentUser", {
    state: () => ({
        current_user: {
            id: 1,
            role: "NoRole",
            credentials: {
                photo: "",
                name: {
                    first_name: "Default",
                    middle_name: "",
                    last_name: "User",
                },
                account: {
                    email: "",
                    password: "",
                },
                school: "",
                office: {
                    location: "",
                    free_time: "",
                    phone_number: "",
                },
                background: {
                    biography: null,
                    education: [],
                },
            },
        },
    }),

    getters: {},

    actions: {},
});
