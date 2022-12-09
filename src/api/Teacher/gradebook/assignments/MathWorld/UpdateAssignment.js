import { MathWorld } from "./MathWorld";

export class MW_UpdateAssignment {
    getAssignmentByCode(assignment_code) {
        var index = MathWorld[0].items.findIndex(
            (item) => item.code === assignment_code
        );

        if (index >= 0) {
            return MathWorld[0].items[index];
        } else {
            window.location.replace("http://localhost:8080/teacher/404");
        }
    }

    getAllQuestions() {
        return MathWorld[0].all_questions;
    }

    getNewAssignment() {
        return MathWorld[0].new_assignment;
    }

    addQuestionType(item) {
        var choices = MathWorld[0].new_assignment.choices;
        for (var i = 0; i < choices.length; i++) {
            if (choices[i].title == item.question_type) {
                choices[i].total += 1;
            }
        }
    }

    removeQuestionType(item) {
        var choices = MathWorld[0].new_assignment.choices;
        for (var i = 0; i < choices.length; i++) {
            if (choices[i].title == item.question_type) {
                choices[i].total -= 1;
            }
        }
    }

    getSelectedQuestions(assignment_code) {
        var all_assignments = MathWorld[0].items;
        var index = all_assignments.findIndex(
            (item) => item.code === assignment_code
        );
        return all_assignments[index].selected_questions;
    }

    submit_Step1(assignment_code, assignment_title, assignment_description) {
        try {
            var new_assignment = MathWorld[0].new_assignment;

            new_assignment.code = assignment_code;
            new_assignment.type = "MW";
            new_assignment.title = assignment_title;
            new_assignment.description = assignment_description;

            return true;
        } catch (err) {
            return false;
        }
    }

    submit_Step2(selected_questions) {
        try {
            var new_assignment = MathWorld[0].new_assignment.selected_questions;
            new_assignment.length = 0;

            for (var i = 0; i < selected_questions.length; i++) {
                new_assignment.push(selected_questions[i]);
            }

            return true;
        } catch (err) {
            return false;
        }
    }

    submit_Step3(start_date, end_date, class_assigned) {
        try {
            var new_assignment = MathWorld[0].new_assignment.set_test;
            var assigned_classes = new_assignment.assigned_classes;
            assigned_classes.length = 0;

            new_assignment.date.start = start_date;
            new_assignment.date.end = end_date;

            for (var i = 0; i < class_assigned.length; i++) {
                assigned_classes.push(class_assigned[i]);
            }

            return true;
        } catch (err) {
            return false;
        }
    }

    submit_Step4(new_assignment) {
        try {
            function formatDate(date) {
                return new Date(date).toLocaleString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                });
            }

            var all_assignments = MathWorld[0].items;
            var date_start = formatDate(new_assignment.set_test.date.start);
            var date_end = formatDate(new_assignment.set_test.date.end);
            var today = formatDate(new Date());

            if (today < date_start && today < date_end) {
                new_assignment.status = "Undeployed";
            } else if (today >= date_start && today <= date_end) {
                new_assignment.status = "Open";
            } else if (today > date_start && today > date_end) {
                new_assignment.status = "Closed";
            }

            var index = all_assignments.findIndex(
                (item) => item.code == new_assignment.code
            );

            all_assignments.splice(index, 1, new_assignment);
            this.resetNewAssignment();

            return true;
        } catch (err) {
            return false;
        }
    }

    resetNewAssignment() {
        MathWorld[0].new_assignment = {
            code: "",
            type: "MW",
            title: "",
            submitted: "0/28",
            status: "",
            description: "",
            items: [],
            set_test: {
                date: {
                    start: "",
                    end: "",
                },
                assigned_classes: [],
            },
            choices: [
                {
                    title: "Multiple-choice",
                    total: 0,
                },

                {
                    title: "Open Response",
                    total: 0,
                },

                {
                    title: "Range",
                    total: 0,
                },

                {
                    title: "Random Items",
                    total: 0,
                },

                {
                    title: "Random Answers",
                    total: 0,
                },
            ],
            selected_questions: [],
        };
    }
}
