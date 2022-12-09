export let ClassPeriodsData = [
    {
        headers: [
            "Code",
            "Name",
            {
                tests: [
                    "Test 1",
                    "Test 2",
                    "Test 3",
                    "Test 4",
                    "Test 5",
                    "Test 6",
                    "Test 7",
                    "Test 8",
                ],
            },
            "Cycle Average",
        ],
    },

    {
        students: [
            {
                photo: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg",
                status: "pending",
                code: "003821",
                first_name: "Jordan",
                middle_name: "",
                last_name: "Jackson",
                scores: [75, 76, 78, 77, 79, 78, 76, 77],
                class_ave: 89,
            },

            {
                photo: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg",
                status: "active",
                code: "003822",
                first_name: "Aaron",
                middle_name: "",
                last_name: "Wilson",
                scores: [83, 83, 83, 83, 83, 83, 83, 83],
                class_ave: 82,
            },

            {
                photo: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg",
                status: "active",
                code: "003823",
                first_name: "Corey",
                middle_name: "",
                last_name: "Patel",
                scores: [93, 90, 91, 94, 95, 97, 98, 92],
                class_ave: 83,
            },

            {
                photo: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg",
                status: "active",
                code: "003824",
                first_name: "Reece",
                middle_name: "",
                last_name: "Watson",
                scores: [83, 83, 83, 83, 83, 83, 83, 83],
                class_ave: 82,
            },

            {
                photo: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg",
                status: "active",
                code: "003825",
                first_name: "Andrew",
                middle_name: "",
                last_name: "Houghton",
                scores: [83, 83, 83, 83, 83, 83, 83, 83],
                class_ave: 85,
            },

            {
                photo: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg",
                status: "active",
                code: "003826",
                first_name: "Izayah",
                middle_name: "",
                last_name: "Slater",
                scores: [83, 83, 83, 83, 83, 83, 83, 83],
                class_ave: 84,
            },

            {
                photo: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg",
                status: "active",
                code: "003827",
                first_name: "Jaiden",
                middle_name: "",
                last_name: "Hurley",
                scores: [83, 83, 83, 83, 83, 83, 83, 83],
                class_ave: 87,
            },

            {
                photo: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg",
                status: "active",
                code: "003828",
                first_name: "Jesse",
                middle_name: "",
                last_name: "Mcknight",
                scores: [83, 83, 83, 83, 83, 83, 83, 83],
                class_ave: 88,
            },

            {
                photo: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg",
                status: "active",
                code: "003828",
                first_name: "Martin",
                middle_name: "",
                last_name: "Mcneil",
                scores: [83, 83, 83, 83, 83, 83, 83, 83],
                class_ave: 88,
            },

            {
                photo: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg",
                status: "active",
                code: "003828",
                first_name: "Rey",
                middle_name: "",
                last_name: "Kaufman",
                scores: [83, 83, 83, 83, 83, 83, 83, 83],
                class_ave: 88,
            },
        ],
    },

    {
        grade_weights: [
            {
                type: "Tests",
                weights: 20,
            },

            {
                type: "Quizzes",
                weights: 20,
            },

            {
                type: "Homeworks",
                weights: 20,
            },

            {
                type: "Projects",
                weights: 20,
            },

            {
                type: "Finals",
                weights: 20,
            },
        ],
    },
];

export class ClassPeriodsService {
    getGradebookData() {
        return ClassPeriodsData;
    }

    getTableHeaders() {
        return ClassPeriodsData[0].headers;
    }

    getAllTests() {
        return ClassPeriodsData[0].headers[2].tests;
    }

    getAllStudents() {
        return ClassPeriodsData[1].students;
    }

    getGradeWeights() {
        return ClassPeriodsData[2].grade_weights;
    }

    searchStudentByCode(item_code) {
        let index = ClassPeriodsData[1].students.findIndex(
            (student) => student.code === item_code
        );
        return index;
    }

    updateGradeWeights(tests, quizzes, homeworks, projects, finals) {
        ClassPeriodsData[2].grade_weights[0].weights = tests;
        ClassPeriodsData[2].grade_weights[1].weights = quizzes;
        ClassPeriodsData[2].grade_weights[2].weights = homeworks;
        ClassPeriodsData[2].grade_weights[3].weights = projects;
        ClassPeriodsData[2].grade_weights[4].weights = finals;
    }

    searchStudent(code, firstName, middleName, lastName) {
        var notEmpty = [];

        var student = {
            photo: "",
            status: "",
            code: "",
            first_name: "",
            middle_name: "",
            last_name: "",
        };

        function verifyCode(code) {
            if (code != "") {
                let index = ClassPeriodsData[1].students.findIndex(
                    (student) => student.code === code
                );
                notEmpty.push(index);
            }
        }

        function verifyFirstName(firstName) {
            if (firstName != "") {
                let index = ClassPeriodsData[1].students.findIndex(
                    (student) => student.first_name === firstName
                );
                notEmpty.push(index);
            }
        }

        function verifyMiddleName(middleName) {
            if (middleName != "") {
                let index = ClassPeriodsData[1].students.findIndex(
                    (student) => student.middle_name === middleName
                );
                notEmpty.push(index);
            }
        }

        function verifyLastName(lastName) {
            if (lastName != "") {
                let index = ClassPeriodsData[1].students.findIndex(
                    (student) => student.last_name === lastName
                );
                notEmpty.push(index);
            }
        }

        verifyCode(code);
        verifyFirstName(firstName);
        verifyMiddleName(middleName);
        verifyLastName(lastName);

        function checkValuesEqual(obj) {
            if (obj != null) {
                for (var i = 0; i < obj.length; i++) {
                    if (obj[i] === -1 || obj[0] != obj[i]) {
                        return false;
                    }
                }

                student.photo = ClassPeriodsData[1].students[obj[0]].photo;
                student.status = ClassPeriodsData[1].students[obj[0]].status;
                student.code = ClassPeriodsData[1].students[obj[0]].code;
                student.first_name =
                    ClassPeriodsData[1].students[obj[0]].first_name;
                student.middle_name =
                    ClassPeriodsData[1].students[obj[0]].middle_name;
                student.last_name =
                    ClassPeriodsData[1].students[obj[0]].last_name;

                return true;
            } else {
                return false;
            }
        }

        if (checkValuesEqual(notEmpty)) {
            return student;
        } else {
            return null;
        }
    }
}
