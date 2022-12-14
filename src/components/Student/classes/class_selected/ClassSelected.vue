<template>
    <div class="class-selected-content">
        <div class="content-header">
            <div class="header-item">
                <div class="class-title">
                    <span class="item-title"> {{ get_class.title }}</span>
                    <span class="item-subtitle"> {{ get_class.code }} </span>
                </div>
                <div class="class-sched">
                    <span class="class-sched-item">
                        Regular Class - TTH (9:00am-10:00am)
                    </span>
                </div>
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
                    <Assignments :class_name="this.class_name" />
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
import { AllClassesService } from "@/api/Student/classes/Service";
import Assignments from "./assignments/Assignments.vue";
import ClassRoster from "./class_roster/ClassRoster.vue";
import Grades from "./grades/Grades.vue";
import ClassDetails from "./class_details/ClassDetails.vue";

export default {
    props: {
        class_name: String,
    },

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

    computed: {
        get_class() {
            return AllClassesService.prototype.get_class(this.class_name);
        },
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
    width: 100%;
    display: flex;
}

.class-title,
.class-sched {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.class-title {
    text-align: left;
    line-height: 1;
    row-gap: 10px;
}

.class-sched {
    text-align: right;
}

.class-sched-item {
    font-size: 1.2rem;
    color: var(--white-1);
}

.item-title {
    font-size: 1.6rem;
    color: var(--white-1);
    flex-wrap: wrap;
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
