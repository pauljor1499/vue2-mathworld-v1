<template>
    <div class="class-selected-content">
        <div class="content-header">
            <div class="header-item">
                <span class="item-title"> Algebra </span>
                <span class="item-subtitle">
                    Regular Class - TTH (9:00am-10:00am)
                </span>
            </div>
        </div>
        <br />
        <br />
        <div class="content-body">
            <v-tabs v-model="tab" grow>
                <v-tab v-for="item in items" :key="item">
                    {{ item }}
                </v-tab>
            </v-tabs>
            <v-divider />
            <br />
            <br />
            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <Assignments />
                </v-tab-item>
                <v-tab-item>
                    <ClassRoster />
                </v-tab-item>
                <v-tab-item>
                    <Grades />
                </v-tab-item>
                <v-tab-item>
                    <ClassDetails />
                </v-tab-item>
            </v-tabs-items>
        </div>
    </div>
</template>

<script>
import Assignments from "./assignments/Assignments.vue";
import ClassRoster from "./class_roster/ClassRoster.vue";
import Grades from "./grades/Grades.vue";
import ClassDetails from "./class_details/ClassDetails.vue";

export default {
    components: {
        Assignments,
        ClassRoster,
        Grades,
        ClassDetails,
    },

    data() {
        return {
            tab: 0,
            items: ["Assignments", "Class Roster", "Grades", "Class Details"],
        };
    },
};
</script>

<style scoped>
* {
    text-transform: none;
}

.class-selected-content {
    width: 100%;
}

.content-header {
    width: 100%;
    display: flex;
    padding: 40px 5%;
    background-color: var(--blue-1);
}

.header-item {
    display: flex;
    flex-direction: column;
}

.item-title {
    font-size: 1.5em;
    color: var(--white-1);
}

.item-subtitle {
    color: var(--gray-1);
}

.content-body {
    width: 75%;
    margin: auto;
    margin-bottom: 100px;
}
</style>
