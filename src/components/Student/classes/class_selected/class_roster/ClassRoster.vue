<template>
    <div class="class-roster-content">
        <div class="content-title" style="color: var(--blue-1)">
            <h2>All Students</h2>
            <div>
                {{ people.length + " students" }}
            </div>
        </div>
        <br />
        <br />
        <v-list v-for="(item, index) in people" :key="index" three-line>
            <v-list-item :key="index">
                <v-list-item-avatar>
                    <v-img :src="item.photo" />
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>
                        <span>
                            {{ item.name }}
                        </span>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider v-if="index < people.length - 1" />
        </v-list>
    </div>
</template>

<script>
export default {
    data: () => ({
        people: [
            {
                photo: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                name: "Daniel Hopkins",
            },

            {
                photo: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                name: "Matthew Harris",
            },

            {
                photo: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                name: "Aiden Sharp",
            },

            {
                photo: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                name: "Isaac Burns",
            },

            {
                photo: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                name: "Thomas Brooks",
            },

            {
                photo: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                name: "Cedric Moran",
            },

            {
                photo: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                name: "Isai Page",
            },

            {
                photo: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                name: "Francisco Daniel",
            },
        ],
    }),
};
</script>

<style scoped>
span {
    text-transform: uppercase;
}

.class-roster-content {
    width: 100%;
}

.content-title {
    display: flex;
    justify-content: space-between;
}
</style>
