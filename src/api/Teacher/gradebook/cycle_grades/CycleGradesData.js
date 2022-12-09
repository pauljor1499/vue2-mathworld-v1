export let CycleGradesData = [
    {
        headers: [
            "Code",
            "Name",
            {
                cycles: ["Cycle 1", "Cycle 2", "Cycle 3", "Cycle 4"],
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
                scores: [75, 76, 78, 77],
                class_ave: 89,
            },

            {
                photo: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg",
                status: "active",
                code: "003822",
                first_name: "Aaron",
                middle_name: "",
                last_name: "Wilson",
                scores: [83, 83, 83, 83],
                class_ave: 82,
            },

            {
                photo: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg",
                status: "active",
                code: "003823",
                first_name: "Corey",
                middle_name: "",
                last_name: "Patel",
                scores: [93, 90, 91, 94],
                class_ave: 83,
            },

            {
                photo: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg",
                status: "active",
                code: "003824",
                first_name: "Reece",
                middle_name: "",
                last_name: "Watson",
                scores: [83, 83, 83, 83],
                class_ave: 82,
            },

            {
                photo: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg",
                status: "active",
                code: "003825",
                first_name: "Andrew",
                middle_name: "",
                last_name: "Houghton",
                scores: [83, 83, 83, 83],
                class_ave: 85,
            },

            {
                photo: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg",
                status: "active",
                code: "003826",
                first_name: "Izayah",
                middle_name: "",
                last_name: "Slater",
                scores: [83, 83, 83, 83],
                class_ave: 84,
            },

            {
                photo: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg",
                status: "active",
                code: "003827",
                first_name: "Jaiden",
                middle_name: "",
                last_name: "Hurley",
                scores: [83, 83, 83, 83],
                class_ave: 87,
            },

            {
                photo: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg",
                status: "active",
                code: "003828",
                first_name: "Jesse",
                middle_name: "",
                last_name: "Mcknight",
                scores: [83, 83, 83, 83],
                class_ave: 88,
            },

            {
                photo: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg",
                status: "active",
                code: "003828",
                first_name: "Martin",
                middle_name: "",
                last_name: "Mcneil",
                scores: [83, 83, 83, 83],
                class_ave: 88,
            },

            {
                photo: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg",
                status: "active",
                code: "003828",
                first_name: "Rey",
                middle_name: "",
                last_name: "Kaufman",
                scores: [83, 83, 83, 83],
                class_ave: 88,
            },
        ],
    },

    {
        cycle_criteria: [
            {
                type: "Cycle 1",
                weights: 25,
            },

            {
                type: "Cycle 2",
                weights: 25,
            },

            {
                type: "Cycle 3",
                weights: 25,
            },

            {
                type: "Cycle 4",
                weights: 25,
            },
        ],
    },
];

export class CycleGradesService {
    getCycleGradesData() {
        return CycleGradesData;
    }

    getTableHeaders() {
        return CycleGradesData[0].headers;
    }

    getAllCycles() {
        return CycleGradesData[0].headers[2].cycles;
    }

    getAllStudents() {
        return CycleGradesData[1].students;
    }

    getCycleCriteria() {
        return CycleGradesData[2].cycle_criteria;
    }

    searchStudentByCode(item_code) {
        let index = CycleGradesData[1].students.findIndex(
            (student) => student.code === item_code
        );
        return index;
    }

    updateGradeWeights(cycle1, cycle2, cycle3, cycle4) {
        CycleGradesData[2].cycle_criteria[0].weights = cycle1;
        CycleGradesData[2].cycle_criteria[1].weights = cycle2;
        CycleGradesData[2].cycle_criteria[2].weights = cycle3;
        CycleGradesData[2].cycle_criteria[3].weights = cycle4;
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
                let index = CycleGradesData[1].students.findIndex(
                    (student) => student.code === code
                );
                notEmpty.push(index);
            }
        }

        function verifyFirstName(firstName) {
            if (firstName != "") {
                let index = CycleGradesData[1].students.findIndex(
                    (student) => student.first_name === firstName
                );
                notEmpty.push(index);
            }
        }

        function verifyMiddleName(middleName) {
            if (middleName != "") {
                let index = CycleGradesData[1].students.findIndex(
                    (student) => student.middle_name === middleName
                );
                notEmpty.push(index);
            }
        }

        function verifyLastName(lastName) {
            if (lastName != "") {
                let index = CycleGradesData[1].students.findIndex(
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

                student.photo = CycleGradesData[1].students[obj[0]].photo;
                student.status = CycleGradesData[1].students[obj[0]].status;
                student.code = CycleGradesData[1].students[obj[0]].code;
                student.first_name =
                    CycleGradesData[1].students[obj[0]].first_name;
                student.middle_name =
                    CycleGradesData[1].students[obj[0]].middle_name;
                student.last_name =
                    CycleGradesData[1].students[obj[0]].last_name;

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
