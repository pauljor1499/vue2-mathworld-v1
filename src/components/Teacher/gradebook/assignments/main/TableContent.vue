<template>
    <div class="content">
        <div class="tab-actions">
            <!-- Searchbar -->
            <div class="search-bar">
                <v-text-field
                    style="max-width: 50%"
                    placeholder="Search by Title"
                    outlined
                    dense
                    clearable
                    @click:clear="clearSearch()"
                    v-model="search_assignment"
                />
                <v-btn color="primary" @click="searchItem()">
                    <v-icon>mdi-magnify </v-icon>
                </v-btn>
            </div>

            <!-- New Assignment Button -->
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                        <v-icon> mdi-plus</v-icon>
                        <span>New Assignment </span>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                        link
                        v-for="(item, index) in assignment_types"
                        :key="index"
                    >
                        <v-list-item-content
                            @click="
                                $router.push({
                                    name: 'NewAssignment',
                                    params: {
                                        assignment_type: item.type,
                                    },
                                })
                            "
                        >
                            {{ item.title }}
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>

        <!-- Data table -->
        <div class="tab-table">
            <table>
                <thead>
                    <tr>
                        <td v-for="(item, index) in headers" :key="index">
                            {{ item }}
                        </td>
                    </tr>
                </thead>
                <tbody v-if="results != null">
                    <tr
                        v-for="(item, index) in assignments"
                        :key="index"
                        :class="{
                            active:
                                index === item_index ||
                                filteredList(item.title),
                        }"
                        @click="
                            $router.push({
                                name: 'SelectedAssignment',
                                params: {
                                    assignment_code: item.code,
                                    assignment_type: item.type,
                                },
                            })
                        "
                        @mouseover="selectItem(index)"
                        @mouseleave="unselectItem()"
                    >
                        <td>
                            {{ index + 1 }}
                        </td>

                        <td v-if="item.title.length >= 15">
                            {{ item.title.slice(0, 15) + "..." }}
                        </td>
                        <td v-else>
                            {{ item.title }}
                        </td>

                        <td>
                            {{ getTotalItems(item.choices) }}
                        </td>

                        <td>
                            {{ item.set_test.date.start }}
                        </td>

                        <td>
                            {{ item.set_test.date.end }}
                        </td>

                        <td>
                            {{ item.submitted }}
                        </td>

                        <td v-if="item.status == 'Open'">
                            <div class="status-open">
                                {{ item.status }}
                            </div>
                        </td>

                        <td v-else-if="item.status == 'Undeployed'">
                            <div class="status-undeployed">
                                {{ item.status }}
                            </div>
                        </td>

                        <td v-else-if="item.status == 'Closed'">
                            <div class="status-closed">
                                {{ item.status }}
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="7" class="search-not-found">
                            No matching records found
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { AssignmentService } from "@/api/Teacher/gradebook/assignments/main/AssignmentsData.js";
import { MathWorldService } from "@/api/Teacher/gradebook/assignments/MathWorld/MathWorld.js";

export default {
    data() {
        return {
            //for hovering
            item_index: "",

            //for searching a title
            search_assignment: null,
            results: [],

            //for button items
            assignment_types: AssignmentService.prototype.getAssignmentTypes(),

            headers: AssignmentService.prototype.getTableHeaders(),

            assignments: MathWorldService.prototype.getAllAssignments(),
        };
    },

    methods: {
        searchItem() {
            try {
                if (
                    this.search_assignment != null ||
                    this.search_assignment != ""
                ) {
                    let output = this.assignments.filter((item) => {
                        return item.title
                            .toLowerCase()
                            .includes(this.search_assignment.toLowerCase());
                    });
                    if (output.length != 0) {
                        this.results = output;
                    } else {
                        this.results = null;
                    }
                } else {
                    this.results = [];
                }
            } catch (err) {
                this.results = [];
            }
        },

        clearSearch() {
            this.results = [];
        },

        filteredList(item_title) {
            let index = this.results.findIndex(
                (item) => item.title === item_title
            );
            if (index >= 0) {
                return true;
            } else {
                return false;
            }
        },

        selectItem(index) {
            if (
                this.search_assignment === "" ||
                this.search_assignment === null
            ) {
                this.item_index = index;
            }
        },

        unselectItem() {
            if (
                this.search_assignment === "" ||
                this.search_assignment === null
            ) {
                this.item_index = "";
            }
        },

        getTotalItems(arr) {
            let sum = 0;
            arr.forEach((element) => {
                sum += element.total;
            });
            return sum;
        },
    },

    created() {
        //refreshes the table every second
        setInterval(() => {
            this.assignments = MathWorldService.prototype.getAllAssignments();
        }, 1000);
    },
};
</script>

<style scoped>
.content {
    width: 100%;
    height: 100%;
    padding-bottom: 25px;
}

.search-bar {
    width: 100%;
    display: flex;
}

.v-btn {
    text-transform: none;
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
    padding: 10px 15px 10px 15px;
    white-space: nowrap;
}

thead td {
    font-size: 0.8em;
    opacity: 50%;
}

tbody td {
    font-size: 0.9em;
}

.active {
    background: #e8f7ff;
    cursor: pointer;
}

.status-open {
    text-transform: uppercase;
    background-color: var(--green-1);
    color: var(--green-2);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    font-size: 0.8em;
    border-radius: 15px;
}

.status-closed {
    text-transform: uppercase;
    background-color: var(--red-1);
    color: var(--red-2);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    font-size: 0.8em;
    border-radius: 15px;
}

.status-undeployed {
    text-transform: uppercase;
    background-color: var(--gray-1);
    color: var(--gray-2);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    font-size: 0.8em;
    border-radius: 15px;
}

.search-not-found {
    text-align: center;
    color: #a4a4a4;
}
</style>
