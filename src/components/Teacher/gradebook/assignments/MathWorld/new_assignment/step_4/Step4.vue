<template>
    <div class="main-content">
        <v-card-title>
            <h3>Preview</h3>
        </v-card-title>
        <br />
        <v-card outlined class="content-body">
            <div class="content-setup">
                <h3>MathWorld Test</h3>
                <br />
                <div class="item-1">
                    <div class="item-header">Title</div>
                    <div class="item-body">
                        {{ new_assignment.title }}
                    </div>
                </div>

                <div class="item-1">
                    <div class="item-header">Description</div>
                    <div class="item-body">
                        {{ new_assignment.description }}
                    </div>
                </div>

                <div class="item-2">
                    <div class="item">
                        <div class="item-header">Open on</div>
                        <div class="item-body">
                            {{ new_assignment.set_test.date.start }}
                        </div>
                    </div>

                    <div class="item">
                        <div class="item-header">Close on</div>
                        <div class="item-body">
                            {{ new_assignment.set_test.date.end }}
                        </div>
                    </div>
                </div>

                <div class="item-1">
                    <div class="item-header">Assigned to</div>
                    <div class="item-body">
                        <ul
                            v-for="item in new_assignment.set_test
                                .assigned_classes"
                            :key="item"
                        >
                            <li>{{ item }}</li>
                        </ul>
                    </div>
                </div>

                <div class="item-2">
                    <div
                        class="item"
                        v-for="(item, index) in new_assignment.choices"
                        :key="index"
                    >
                        <div class="item-header">{{ item.title }}</div>
                        <div class="item-body">{{ item.total }}</div>
                    </div>
                </div>
            </div>

            {{
                "Total added questions: " +
                new_assignment.selected_questions.length
            }}

            <div
                class="content-questions"
                v-if="new_assignment.selected_questions.length != 0"
            >
                <div
                    v-for="(item, index) in new_assignment.selected_questions"
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
        </v-card>
        <br />
        <v-card-actions>
            <div class="content-actions">
                <v-btn large width="15%" outlined @click="$emit('clickBack')">
                    Back
                </v-btn>
                <v-btn large width="15%" color="primary" @click="clickCreate()">
                    Create
                </v-btn>
            </div>
        </v-card-actions>
    </div>
</template>

<script>
import { MW_NewAssignment } from "@/api/Teacher/gradebook/assignments/MathWorld/NewAssignment";

export default {
    data() {
        return {
            new_assignment: MW_NewAssignment.prototype.getNewAssignment(),
        };
    },

    methods: {
        clickCreate() {
            if (this.submit()) this.$emit("clickCreate");
        },

        submit() {
            return MW_NewAssignment.prototype.submit_Step4(this.new_assignment);
        },
    },
};
</script>

<style scoped>
.content-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 50px;
}

.content-setup {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
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

.content-actions {
    width: 100%;
    display: flex;
    justify-content: space-around;
}
</style>
