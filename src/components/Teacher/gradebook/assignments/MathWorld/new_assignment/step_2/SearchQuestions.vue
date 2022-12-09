<template>
    <div class="main-content">
        <v-alert text dense outlined type="error" v-show="has_error">
            Please add one or more questions to proceed to next step
        </v-alert>
        <div class="tab-content">
            <div class="item-filter">
                <v-card-title> Filter </v-card-title>
                <div class="item-fields">
                    <v-autocomplete
                        v-model="filter.question_type"
                        :items="question_types"
                        outlined
                        filled
                        label="Question Types"
                        solo
                        flat
                        clearable
                        hide-details
                    />
                    <v-autocomplete
                        v-model="filter.algebra_term"
                        :items="algebra_terms"
                        outlined
                        filled
                        label="Algrebra Terms"
                        solo
                        flat
                        clearable
                        hide-details
                    />
                    <v-autocomplete
                        v-model="filter.unit"
                        :items="units"
                        outlined
                        filled
                        label="Units"
                        solo
                        flat
                        clearable
                        hide-details
                    />
                    <v-autocomplete
                        v-model="filter.category"
                        :items="categories"
                        outlined
                        filled
                        label="Category"
                        solo
                        flat
                        clearable
                        hide-details
                    />
                    <v-autocomplete
                        v-model="filter.difficulty"
                        :items="difficulties"
                        outlined
                        filled
                        label="Level of Difficulty"
                        solo
                        flat
                        clearable
                        hide-details
                    />
                    <v-autocomplete
                        v-model="filter.teks"
                        :items="items"
                        chips
                        outlined
                        label="TEKS"
                        multiple
                        solo
                        flat
                        clearable
                        hide-details
                    >
                        <template
                            v-slot:selection="{ attrs, item, select, selected }"
                        >
                            <v-chip
                                v-bind="attrs"
                                :input-value="selected"
                                close
                                @click="select"
                                @click:close="remove(item)"
                            >
                                {{ item }}
                            </v-chip>
                        </template>
                    </v-autocomplete>
                    <v-btn
                        width="100%"
                        large
                        color="primary"
                        @click="clearFilter()"
                    >
                        Clear All
                    </v-btn>
                </div>
            </div>
            <div class="item-list">
                <v-card-title>
                    Showing results ({{ showAllQuestions.length }})
                </v-card-title>
                <div class="question-list">
                    <v-card
                        elevation="1"
                        outlined
                        class="question-item"
                        v-for="(item, index) in showAllQuestions"
                        :key="index"
                    >
                        <v-card-title>
                            <div class="question-title">
                                <div class="title-subject">
                                    <span>{{ item.title }}</span>
                                </div>
                                <div class="title-points">
                                    <span style="font-size: 0.7em">
                                        {{ item.points + " Points" }}
                                    </span>
                                </div>
                            </div>
                        </v-card-title>
                        <v-divider />
                        <v-col cols="12">
                            <p class="text-justify" style="margin-top: 5px">
                                {{ item.question }}
                            </p>
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
                        </v-col>
                        <v-card-actions class="question-actions">
                            <div class="question-chips">
                                <v-chip small v-show="item.question_type != ''">
                                    {{ item.question_type }}
                                </v-chip>
                                <v-chip small v-show="item.algebra_term != ''">
                                    {{ item.algebra_term }}
                                </v-chip>
                                <v-chip small v-show="item.unit != ''">
                                    {{ item.unit }}
                                </v-chip>
                                <v-chip small v-show="item.category != ''">
                                    {{ item.category }}
                                </v-chip>
                                <v-chip small v-show="item.difficulty != ''">
                                    {{ item.difficulty }}
                                </v-chip>
                                <v-chip
                                    small
                                    v-show="item.teks != null"
                                    v-for="item2 in item.teks"
                                    :key="item2"
                                >
                                    {{ item2 }}
                                </v-chip>
                            </div>

                            <v-btn
                                color="primary"
                                outlined
                                width="120"
                                @click="addQuestion(index, item)"
                            >
                                <v-icon>mdi-plus</v-icon> Add
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { MW_NewAssignment } from "@/api/Teacher/gradebook/assignments/MathWorld/NewAssignment";

export default {
    props: {
        has_error: Boolean,
        all_questions: Array,
    },

    data() {
        return {
            filter: {
                question_type: null,
                algebra_term: null,
                unit: null,
                category: null,
                difficulty: null,
                teks: [],
            },

            items: [
                "TEKS-S1",
                "TEKS-S2",
                "TEKS-S3",
                "TEKS-S4",
                "TEKS-S5",
                "TEKS-S6",
                "TEKS-S7",
                "TEKS-S8",
                "TEKS-S9",
                "TEKS-S10",
                "TEKS-S11",
                "TEKS-S12",
                "TEKS-S13",
                "TEKS-S14",
                "TEKS-S15",
                "TEKS-S16",
                "TEKS-S17",
                "TEKS-S18",
                "TEKS-S19",
                "TEKS-S20",
            ],

            units: ["Unit 1", "Unit 2", "Unit 3"],

            categories: ["Category 1", "Category 2", "Category 3"],

            difficulties: ["Easy", "Average", "Difficult"],

            teks: ["TEKS 1", "TEKS 2", "TEKS 3"],

            question_types: [
                "Multiple-choice",
                "Open Response",
                "Range",
                "Random Items",
                "Random Answers",
            ],

            algebra_terms: [
                "Monomial",
                "Polynomial",
                "Binomial",
                "Trinomial",
                "Multinomial",
            ],
        };
    },

    methods: {
        clearFilter() {
            Object.keys(this.filter).forEach((key) => {
                this.filter[key] = null;
                if (key == "teks") [(this.filter[key] = [])];
            });
        },

        addQuestion(index, item) {
            this.all_questions.splice(index, 1);
            this.$emit("add_question", item);
            MW_NewAssignment.prototype.addQuestionType(item);
        },

        remove(item) {
            this.filter.teks.splice(this.filter.teks.indexOf(item), 1);
        },

        searchFilter() {
            var results = [];
            var all_questions = this.all_questions;

            //filter questions
            for (var i = 0; i < all_questions.length; i++) {
                if (
                    all_questions[i].question_type ==
                        this.filter.question_type ||
                    all_questions[i].algebra_term == this.filter.algebra_term ||
                    all_questions[i].unit == this.filter.unit ||
                    all_questions[i].category == this.filter.category ||
                    all_questions[i].difficulty == this.filter.difficulty ||
                    this.compareValues(
                        all_questions[i].teks,
                        this.filter.teks
                    ) != 0
                ) {
                    results.push(all_questions[i]);
                }
            }

            return results;
        },

        compareValues(arr1, arr2) {
            if (this.filter.teks != null) {
                let arr3 = arr1.filter((item) => arr2.indexOf(item) >= 0);
                return arr3.length;
            } else {
                return 0;
            }
        },
    },

    computed: {
        showAllQuestions() {
            if (
                this.filter.question_type != null ||
                this.filter.algebra_term != null ||
                this.filter.unit != null ||
                this.filter.category != null ||
                this.filter.difficulty != null ||
                this.filter.teks.length != 0
            ) {
                return this.searchFilter();
            } else {
                return this.all_questions;
            }
        },
    },
};
</script>

<style scoped>
span {
    font-size: 1rem;
}

.tab-content {
    display: flex;
    gap: 50px;
}

.tab-content .item-filter {
    flex: 1;
}

.item-fields {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
}

.tab-content .item-list {
    flex: 2;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}

.question-list {
    width: 100%;
    height: 650px;
    overflow-y: scroll;

    padding: 10px;
    border: 1px solid #d4d4d4;
    background-color: #fafafa;

    display: flex;
    flex-direction: column;
    row-gap: 15px;
}

.question-item {
    padding: 10px;
}

.question-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.question-actions {
    display: flex;
    column-gap: 20px;
    justify-content: space-between;
}

.question-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.v-combobox {
    padding: 10px;
}
</style>
