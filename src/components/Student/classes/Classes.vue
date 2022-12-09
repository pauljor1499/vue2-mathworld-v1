<template>
    <div class="classes-content">
        <div class="search-bar">
            <v-text-field
                class="rounded-r-0"
                style="max-width: 50%"
                placeholder="Enter class name"
                outlined
                dense
                clearable
                hide-details
            />
            <v-btn
                color="primary"
                elevation="0"
                height="40"
                class="rounded-l-0"
            >
                <v-icon>mdi-magnify </v-icon>
            </v-btn>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="content-cards">
            <v-card class="card" v-for="(item, index) in classes" :key="index">
                <div class="card-image">
                    <img :src="item.image" alt="card image" />
                </div>
                <v-card-title> {{ item.title }} </v-card-title>
                <v-card-subtitle>
                    <div class="card-teacher">
                        <img :src="item.teacher.photo" alt="teacher photo" />
                        <span>{{ item.teacher.name }}</span>
                    </div>
                </v-card-subtitle>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        right
                        color="primary"
                        width="80"
                        @click="
                            $router.push({
                                name: 'StudentClassSelected',
                                params: { class_name: item.title },
                            })
                        "
                    >
                        View
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            classes: [
                {
                    image: require("@/assets/sample1.jpg"),
                    title: "Algebra",
                    teacher: {
                        photo: require("@/assets/male.jpg"),
                        name: "Benjamin William",
                    },
                },

                {
                    image: require("@/assets/sample1.jpg"),
                    title: "Fractions",
                    teacher: {
                        photo: require("@/assets/male.jpg"),
                        name: "Liam Noah",
                    },
                },

                {
                    image: require("@/assets/sample1.jpg"),
                    title: "Polynomial",
                    teacher: {
                        photo: require("@/assets/male.jpg"),
                        name: "Robert Johnson",
                    },
                },

                {
                    image: require("@/assets/sample1.jpg"),
                    title: "Precalculus",
                    teacher: {
                        photo: require("@/assets/male.jpg"),
                        name: "Jason Williams",
                    },
                },
            ],
        };
    },
};
</script>

<style scoped>
.classes-content {
    width: 100%;
    padding: 5%;
}

.search-bar {
    width: 100%;
    display: flex;
}

.content-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
}

.card {
    width: 100%;
}

.card-image img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: 5px 5px 0px 0px;
}

.card-body {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.card-teacher {
    display: flex;
    gap: 8px;
}

.card-class-name {
    font-size: 1.2em;
    font-weight: bold;
    color: black;
}

.card-teacher img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
}
</style>
