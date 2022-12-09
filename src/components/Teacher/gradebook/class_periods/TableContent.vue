<template>
    <div class="content">
        <SearchResults
            v-if="show_dialog"
            :student="student"
            @closeResults="show_dialog = false"
        />
        <div class="tab-actions">
            <v-text-field
                style="max-width: 50%"
                placeholder="Search by Code"
                outlined
                dense
                clearable
                v-model="search_student"
            >
            </v-text-field>
            <SearchStudent @search_results="searchResults($event)" />
        </div>

        <div class="tab-table">
            <div class="table-left">
                <table>
                    <thead>
                        <tr>
                            <td
                                v-for="(item, index) in headers.slice(0, 2)"
                                :key="index"
                            >
                                {{ item }}
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(item, index) in students"
                            :key="index"
                            :class="{ active: index === item_index }"
                            @mouseover="selectItem(index)"
                            @mouseleave="unselectItem()"
                        >
                            <td>
                                {{ item.code }}
                            </td>

                            <td
                                v-if="
                                    (
                                        item.first_name +
                                        item.middle_name +
                                        item.last_name
                                    ).length >= 15
                                "
                            >
                                {{
                                    (
                                        item.first_name +
                                        " " +
                                        item.middle_name +
                                        " " +
                                        item.last_name
                                    ).slice(0, 15) + "..."
                                }}
                            </td>

                            <td v-else>
                                {{
                                    item.first_name +
                                    " " +
                                    item.middle_name +
                                    " " +
                                    item.last_name
                                }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div
                :class="{
                    table_center: total_tests <= 4,
                    table_center_hover: total_tests > 4,
                }"
            >
                <table>
                    <thead>
                        <tr>
                            <td v-for="(item, index) in tests" :key="index">
                                {{ item }}
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(student, index) in students"
                            :key="index"
                            :class="{ active: index === item_index }"
                            @mouseover="selectItem(index)"
                            @mouseleave="unselectItem()"
                        >
                            <td
                                v-for="(test, index2) in students[index].scores"
                                :key="index2"
                            >
                                {{ test }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="table-right">
                <table>
                    <thead>
                        <tr>
                            <td
                                v-for="(item, index) in headers.slice(3, 4)"
                                :key="index"
                            >
                                {{ item }}
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(item, index) in students"
                            :key="index"
                            :class="{ active: index === item_index }"
                            @mouseover="selectItem(index)"
                            @mouseleave="unselectItem()"
                        >
                            <td>
                                {{ item.class_ave }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { ClassPeriodsService } from "@/api/Teacher/gradebook/class_periods/ClassPeriodsData";
import SearchStudent from "./Modals/SearchStudent.vue";
import SearchResults from "./Modals/SearchResults.vue";

export default {
    components: {
        SearchStudent,
        SearchResults,
    },

    data() {
        return {
            tab: null,

            item_index: "",

            search_student: "",

            show_dialog: false,

            student: {
                has_results: false,
                status: "",
                code: "",
                photo: "",
                email: "",
                first_name: "",
                middle_name: "",
                last_name: "",
            },

            headers: ClassPeriodsService.prototype.getTableHeaders(),

            tests: ClassPeriodsService.prototype.getAllTests(),

            students: ClassPeriodsService.prototype.getAllStudents(),

            total_tests: "",
        };
    },

    watch: {
        search_student() {
            if (this.search_student != "") {
                this.item_index =
                    ClassPeriodsService.prototype.searchStudentByCode(
                        this.search_student
                    );
            }
        },
    },

    methods: {
        selectItem(index) {
            if (this.search_student === "" || this.search_student === null) {
                this.item_index = index;
            }
        },

        unselectItem() {
            if (this.search_student === "" || this.search_student === null) {
                this.item_index = "";
            }
        },

        searchResults(results) {
            this.search_student = "";
            if (results != null) {
                this.search_student = results.code;

                this.student.has_results = true;
                this.student.status = results.status;
                this.student.code = results.code;
                this.student.photo = results.photo;
                this.student.email = results.email;
                this.student.first_name = results.first_name;
                this.student.middle_name = results.middle_name;
                this.student.last_name = results.last_name;
            } else {
                this.student.has_results = false;
            }
            this.show_dialog = true;
        },
    },

    created() {
        this.total_tests = this.tests.length;
    },
};
</script>

<style scoped>
.content {
    width: 100%;
    height: 100%;
    padding-bottom: 25px;
}

.tab-actions {
    display: flex;
    justify-content: space-between;
    padding: 40px 20px 20px 20px;
}

.tab-table {
    width: 850px;
    border: 1px solid #dddddd;
    display: flex;
    gap: 0px;
    margin: auto;
}

table {
    width: 100%;
    margin: auto;
    border-collapse: collapse;
}

td {
    border-bottom: 1px solid #dddddd;
    padding: 10px 20px 10px 20px;
    white-space: nowrap;
}

thead td {
    font-size: 0.8em;
    opacity: 50%;
}

tbody td {
    font-size: 0.9em;
}

.table_center {
    width: 100%;
    border-right: 1px solid #dddddd;
    border-left: 1px solid #dddddd;
}

.table_center_hover {
    width: 100%;
    border-right: 1px solid #dddddd;
    border-left: 1px solid #dddddd;
    overflow-x: scroll;
    overflow-y: visible;
}

.table_center_hover:hover {
    box-shadow: inset 0px 2px 25px rgba(0, 0, 0, 0.2);
}

.active {
    background: #e8f7ff;
}
</style>
