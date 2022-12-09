<template>
    <div class="main-content">
        <div class="content-title">
            <span class="class-name">{{ class_name }}</span>
            <span class="class-code">{{ class_code }}</span>
        </div>
        <div class="content-body">
            <div class="content-table">
                <v-card>
                    <v-tabs v-model="tab" grow>
                        <v-tab
                            v-for="(item, index) in items"
                            :key="index"
                            @click="setActiveTab(index)"
                        >
                            {{ item }}
                        </v-tab>
                    </v-tabs>
                    <v-tabs-items v-model="tab">
                        <v-tab-item>
                            <ClassPeriodsTable />
                        </v-tab-item>
                        <v-tab-item>
                            <CycleGradesTable />
                        </v-tab-item>
                        <v-tab-item>
                            <AssignmentsTable />
                        </v-tab-item>
                    </v-tabs-items>
                </v-card>
            </div>
            <div class="content-cards">
                <SubjectDetails />

                <div v-if="tab == 0">
                    <GradeWeights />
                </div>

                <div v-else-if="tab == 1">
                    <CycleCriteria />
                </div>

                <div v-else-if="tab == 2"></div>

                <div v-else-if="tab == 3"></div>

                <div v-else-if="tab == 4"></div>
            </div>
        </div>
    </div>
</template>

<script>
import router from "@/router";

import { GradebookService } from "@/api/Teacher/gradebook/main/GradebookData";
import { AllClassesService } from "@/api/Teacher/all_classes/AllClassesData";

import SubjectDetails from "@/components/Teacher/gradebook/main/SubjectDetails.vue";

import ClassPeriodsTable from "@/components/Teacher/gradebook/class_periods/TableContent.vue";
import GradeWeights from "@/components/Teacher/gradebook/class_periods/GradeWeights.vue";

import CycleGradesTable from "@/components/Teacher/gradebook/cycle_grades/TableContent.vue";
import CycleCriteria from "@/components/Teacher/gradebook/cycle_grades/CycleCriteria.vue";

import AssignmentsTable from "@/components/Teacher/gradebook/assignments/main/TableContent.vue";

export default {
    components: {
        SubjectDetails,

        ClassPeriodsTable,
        GradeWeights,

        CycleGradesTable,
        CycleCriteria,

        AssignmentsTable,
    },

    props: {
        class_code: String,
    },

    data() {
        return {
            tab: 0,
            items: GradebookService.prototype.getTabItems(),
            all_classes: AllClassesService.prototype.getAllClass(),
            class_name: "",
        };
    },

    methods: {
        setActiveTab(index) {
            this.tab = index;
        },

        getClassCode() {
            let index = this.all_classes.findIndex(
                (item) => item.code === this.class_code
            );

            if (index != -1) {
                this.class_name = this.all_classes[index].name;
            } else {
                router.push({
                    name: "TeacherNotFound",
                });
            }
        },

        selectAssignmentTab() {
            if (this.$route.params.assignment_tab != null)
                this.tab = this.$route.params.assignment_tab;
        },
    },

    created() {
        this.getClassCode();
        this.selectAssignmentTab();
    },
};
</script>

<style scoped>
.main-content {
    width: 100%;
}

.content-title {
    display: flex;
    flex-direction: column;
    padding: 25px 5% 25px 5%;
    background-color: var(--blue-1);
}

.content-title .class-name {
    font-size: 1.5em;
    color: var(--white-1);
}

.content-title .class-code {
    font-size: 1em;
    color: var(--white-1);
}

.content-body {
    display: flex;
    gap: 20px;
    padding: 5%;
}

.content-table {
    flex: 3.5;
}

.content-table .v-tabs {
    border-bottom: 1px solid var(--gray-1);
}

.content-table .v-card {
    padding: 20px;
}

.content-cards {
    flex: 1;

    display: flex;
    flex-direction: column;
    row-gap: 20px;
}
</style>
