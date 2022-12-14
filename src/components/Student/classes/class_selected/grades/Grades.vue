<template>
    <div class="grades-content">
        <v-expansion-panels focusable popout>
            <v-expansion-panel v-for="(item, i) in 5" :key="i">
                <v-expansion-panel-header expand-icon="mdi-menu-down">
                    <template v-slot:default="{ open }">
                        <span class="item-title" v-if="!open">
                            Test 1 for MathWorld Class
                        </span>
                        <div class="item-header" v-if="!open">
                            <span> Date submitted: Sept 12, 2022 </span>
                            <span> Grade: 90 </span>
                        </div>
                    </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <div class="item-content">
                        <span> Class Summary </span>
                        <br />
                        <br />
                        <div class="content-header">
                            <div class="header-top">
                                <div class="student">
                                    <span>Juan Dela Cruz</span>
                                    <span>University of the World</span>
                                </div>
                                <div class="date">
                                    <span> Fall, 2022 </span>
                                    <span> September 12, 2022 </span>
                                </div>
                            </div>
                            <div class="header-bottom">
                                <span class="bottom-title">
                                    Test 1 for MathWorld Class
                                </span>
                                <span class="bottom-subtitle">Math101</span>
                            </div>
                        </div>
                        <br />
                        <v-data-table
                            hide-default-footer
                            :headers="headers"
                            :items="grades"
                            item-key="name"
                            class="elevation-1"
                        >
                        </v-data-table>
                    </div>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
export default {
    data: () => ({
        headers: [
            {
                text: "My Grade",
                align: "start",
                sortable: false,
                value: "my_grade",
            },
            {
                text: "Min Grade",
                align: "start",
                sortable: false,
                value: "min_grade",
            },
            {
                text: "First Quartile",
                align: "start",
                sortable: false,
                value: "first_quartile",
            },
            {
                text: "Median Grade",
                align: "start",
                sortable: false,
                value: "median_grade",
            },
            {
                text: "Third Quartile",
                align: "start",
                sortable: false,
                value: "third_quartile",
            },
            {
                text: "Max Grade",
                align: "start",
                sortable: false,
                value: "max_grade",
            },
            {
                text: "Class Average",
                align: "start",
                sortable: false,
                value: "class_average",
            },
            {
                text: "Total Students",
                align: "start",
                sortable: false,
                value: "total_students",
            },
        ],

        grades: [
            {
                my_grade: 90,
                min_grade: 75,
                first_quartile: 84,
                median_grade: 87,
                third_quartile: 91,
                max_grade: 95,
                class_average: 84.56,
                total_students: 128,
            },
        ],
    }),
};
</script>

<style scoped>
.grades-content {
    padding: 20px;
}

.item-title {
    width: 100%;
    font-weight: bold;
    flex-wrap: wrap;
}

.item-header {
    width: 100%;
    font-size: 0.8rem;
    display: flex;
    justify-content: space-around;
    color: var(--gray-2);
}

.item-content {
    padding: 15px 10px;
}

.content-header {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}

.header-top {
    display: flex;
    justify-content: space-between;
}

.student,
.date {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
}

.header-bottom {
    display: flex;
    flex-direction: column;
}

.bottom-title {
    font-weight: bold;
}

.bottom-subtitle {
    font-size: 0.9rem;
}
</style>
