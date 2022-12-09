<template>
    <div class="main-content" v-if="searchAssignmentItem">
        <YesNoWarning
            v-if="dialog.status"
            @clickNo="dialog.status = false"
            @clickYes="deleteAssignment()"
            :dialog_prop="this.dialog"
        />
        <div class="content-title">
            <span class="class-name">Assignment</span>
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="#ffffff"
                        rounded
                        large
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon left> mdi-cog</v-icon>
                        <span>Settings</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item link>
                        <v-list-item-content
                            @click="
                                $router.push({
                                    name: 'UpdateAssignment',
                                    params: {
                                        assignment_type:
                                            $route.params.assignment_type,
                                        assignment_code:
                                            $route.params.assignment_code,
                                    },
                                })
                            "
                        >
                            Edit Assignment
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-content @click="dialog.status = true">
                            Delete Assignment
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
        <div class="content-body">
            <div class="content-details">
                <div class="details-to-PDF" ref="toPDF">
                    <div class="details-title">
                        <h3 v-if="assignment_type == 'MW'">
                            MathWorld Assignment
                        </h3>
                        <div
                            :class="{
                                'status-open': assignment.status == 'Open',
                                'status-closed': assignment.status == 'Closed',
                                'status-undeployed':
                                    assignment.status == 'Undeployed',
                            }"
                        >
                            <span v-if="assignment.status == 'Open'">
                                {{ assignment.status }}
                            </span>
                            <span v-if="assignment.status == 'Closed'">
                                {{ assignment.status }}
                            </span>
                            <span v-if="assignment.status == 'Undeployed'">
                                {{ assignment.status }}
                            </span>
                        </div>
                    </div>
                    <div class="content-setup">
                        <div class="item-1">
                            <div class="item-header">Title</div>
                            <div class="item-body">{{ assignment.title }}</div>
                        </div>

                        <div class="item-1">
                            <div class="item-header">Description</div>
                            <div class="item-body">asdadad</div>
                        </div>

                        <div class="item-2">
                            <div class="item">
                                <div class="item-header">Open on</div>
                                <div class="item-body">
                                    {{ assignment.set_test.date.start }}
                                </div>
                            </div>

                            <div class="item">
                                <div class="item-header">Close on</div>
                                <div class="item-body">
                                    {{ assignment.set_test.date.end }}
                                </div>
                            </div>
                        </div>

                        <div class="item-1">
                            <div class="item-header">Assigned to</div>
                            <div class="item-body">
                                <ul
                                    v-for="item in assignment.set_test
                                        .assigned_classes"
                                    :key="item"
                                >
                                    <li>
                                        {{ item }}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="item-2">
                            <div
                                class="item"
                                v-for="(item, index) in assignment.choices"
                                :key="index"
                            >
                                <div class="item-header">
                                    {{ item.title }}
                                </div>
                                <div class="item-body">
                                    {{ item.total }}
                                </div>
                            </div>
                        </div>
                    </div>

                    {{
                        "Total added questions: " +
                        assignment.selected_questions.length
                    }}

                    <div
                        class="content-questions"
                        v-if="assignment.selected_questions.length != 0"
                    >
                        <div
                            v-for="(
                                item, index
                            ) in assignment.selected_questions"
                            :key="index"
                        >
                            <div class="question-item">
                                <div class="item-header">
                                    {{ item.title }}
                                </div>
                                <div class="item-body">
                                    <span>
                                        {{ item.question }}
                                    </span>
                                    <v-radio-group>
                                        <v-radio
                                            v-for="item2 in item.options"
                                            :key="item2"
                                            :label="`${item2}`"
                                            :value="item2"
                                            disabled
                                        >
                                        </v-radio>
                                    </v-radio-group>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p><i> No questions added.</i></p>
                    </div>
                </div>
            </div>
            <div class="content-actions">
                <v-btn color="primary" large @click="saveToPDF()">
                    <v-icon> mdi-printer </v-icon> <span>SAVE TO PDF </span>
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import { AssignmentService } from "@/api/Teacher/gradebook/assignments/main/AssignmentsData.js";
import { MathWorldService } from "@/api/Teacher/gradebook/assignments/MathWorld/MathWorld";
import YesNoWarning from "@/components/Teacher/main/dialogs/YesNoWarning.vue";

export default {
    components: {
        YesNoWarning,
    },

    data() {
        return {
            assignment_type: "",
            assignment: "",

            dialog: {
                status: false,
                title: "Delete assignment",
                message: "",
            },
        };
    },

    methods: {
        saveToPDF() {
            const html = this.$refs.toPDF;
            AssignmentService.prototype.printToPDF(html);
        },

        deleteAssignment() {
            MathWorldService.prototype.deleteAssignmentByCode(
                this.$route.params.assignment_code
            );
            this.$router.push({
                name: "ClassSelected",
                params: {
                    class_code: this.$route.params.class_code,
                    assignment_tab: 2,
                },
            });
            this.$emit("SnackBarSuccess", "Assignment successfully deleted");
        },
    },

    computed: {
        searchAssignmentItem() {
            if (this.$route.params.assignment_type == "MW") {
                this.assignment_type = "MW";
                this.assignment =
                    MathWorldService.prototype.getAssignmentByCode(
                        this.$route.params.assignment_code
                    );
                this.dialog.message =
                    "This action will delete " +
                    this.assignment.title +
                    " from all of your profiles. Are you sure to want to delete this portfolio project?";
                return true;
            } else {
                this.$router
                    .push({ name: "TeacherNotFound" })
                    .catch((err) => err);
                return false;
            }
        },
    },
};
</script>

<style scoped>
.main-content {
    width: 100%;
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

.content-title .class-name {
    font-size: 1.5em;
    color: var(--white-1);
}

.content-body {
    width: 100%;
    padding: 5%;
    display: flex;
    gap: 20px;
}

.content-details {
    width: 100%;
    height: 100%;
    flex: 3.5;

    padding: 50px 50px 0px 50px;
    border-radius: 10px;
    border: 1px solid var(--gray-1);
    background-color: var(--white-1);
}

.details-to-PDF {
    width: 100%;
    padding: 0px 0px 50px 0px;
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.details-title {
    display: flex;
    justify-content: space-between;
}

.status-open {
    padding: 5px 10px 5px 10px;
    border: 1px solid var(--green-3);
    color: var(--green-3);
    border-radius: 5px;
}

.status-closed {
    padding: 5px 10px 5px 10px;
    border: 1px solid var(--red-3);
    color: var(--red-3);
    border-radius: 5px;
}

.status-undeployed {
    padding: 5px 10px 5px 10px;
    border: 1px solid #5f5f5f;
    color: #5f5f5f;
    border-radius: 5px;
}

.content-actions {
    width: 100%;
    flex: 1;
}

.content-actions .v-btn {
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.content-setup {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}

.content-actions {
    flex: 1;
}

.item-1 {
    width: 100%;
    border-radius: 0px !important;
}

.item-header {
    padding: 5px 10px 5px 10px;
    background-color: #fafafa;
}

.item-body {
    width: 100%;
    padding: 5px 10px 5px 10px;
    text-align: justify;
    text-justify: inter-word;
    display: flex;
    flex-direction: column;
}

.item-2 {
    width: 100%;
    display: flex;
    column-gap: 10px;
}

.item-2 .item {
    width: 100%;
}

.content-questions {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}

.question-item {
    padding: 20px;
    border: 1px solid #d3d3d3;
}

.question-item .item-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
