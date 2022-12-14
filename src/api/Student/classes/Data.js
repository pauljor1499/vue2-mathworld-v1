export let Classes = [
    {
        id: 0,
        title: "Algebra",
        code: "MWC-XYZ-1",
        class_schedule: "TTH (9:00am-10:00am)",
        description: "Multi-step Equations and Inequalities",
        assignments: [
            {
                id: 0,
                title: "Implicit Differentiation (Level 1)",
                description: "Assignment 1",
                status: "New",
                due: "November 04, 2022 8:00 pm",
            },
            {
                id: 1,
                title: "Implicit Differentiation (Level 2)",
                description: "Assignment 2",
                status: "Done",
                due: "November 05, 2022 8:00 pm",
            },
            {
                id: 2,
                title: "Implicit Differentiation (Level 3)",
                description: "Assignment 3",
                status: "Closed",
                due: "November 06, 2022 8:00 pm",
            },
            {
                id: 3,
                title: "Implicit Differentiation (Level 4)",
                description: "Assignment 4",
                status: "Unsubmitted",
                due: "November 07, 2022 8:00 pm",
            },
        ],

        class_roster: [
            {
                id: 0,
                photo: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                first_name: "Daniel",
                middle_name: "",
                last_name: "Hopkins",
            },
            {
                id: 1,
                photo: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                first_name: "Matthew ",
                middle_name: "",
                last_name: "Harris",
            },
            {
                id: 2,
                photo: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                first_name: "Aiden",
                middle_name: "",
                last_name: "Sharp",
            },
            {
                id: 3,
                photo: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                first_name: "Cedric",
                middle_name: "",
                last_name: "Moran",
            },
            {
                id: 4,
                photo: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                first_name: "Thomas",
                middle_name: "",
                last_name: "Brooks",
            },
        ],

        tests: [
            {
                test_title: "Test 1 for MathWorld Class",
                date_submitted: "January 18, 2022",
                season: "Fall, 2022",
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
            },

            {
                test_title: "Test 2 for MathWorld Class",
                date_submitted: "March 18, 2022",
                season: "Fall, 2022",
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
            },

            {
                test_title: "Test 3 for MathWorld Class",
                date_submitted: "September 18, 2022",
                season: "Fall, 2022",
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
            },
        ],

        class_details: {
            teacher: {
                name: "Jordan Williams",
            },
            time: {
                description: "9:00 am - 10:00 am",
            },
            day: {
                description: "Monday, Wednesday, Friday",
            },
        },
    },

    {
        id: 1,
        title: "Fractions",
        code: "MWC-XYZ-2",
        class_schedule: "MWF (9:00am-10:00am)",
        description: "Multi-step Equations and Inequalities",
    },

    {
        id: 2,
        title: "Polybomial",
        code: "MWC-XYZ-3",
        class_schedule: "TTH (9:00am-10:00am)",
        description: "Multi-step Equations and Inequalities",
    },

    {
        id: 3,
        title: "Precalculus",
        code: "MWC-XYZ-4",
        class_schedule: "MWF (9:00am-10:00am)",
        description: "Multi-step Equations and Inequalities",
    },
];
