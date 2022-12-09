export let TeacherData = [
    {
        items: [
            {
                id: 1,
                role: "Teacher",
                credentials: {
                    photo: "",
                    name: {
                        first_name: "Jose",
                        middle_name: "",
                        last_name: "Rizal",
                    },
                    account: {
                        email: "teacher@gmail.com",
                        password: "teacher",
                    },
                    school: "Harvard University",
                    office: {
                        location: "Room 2092",
                        free_time: "4:00 p.m. - 5:00 p.m.",
                        phone_number: "+1-202-555-0140",
                    },
                    background: {
                        biography:
                            "Jordan Williams is a Software Developer and Teacher having enjoyed his courses to date. He is the creator of Codexpand, a place of learning and growth to help people move into and be successful within the Helping Industry. One of Graham's key driving forces is to remove the barriers to the Helping Industry by producing high quality, accredited courses at affordable prices.",
                        education: [
                            {
                                school: "Cor Jesu College",
                                course: "Bachelor of Science in Information Technology",
                                field: "Computer Science",
                                start_year: "2018",
                                end_year: "2019",
                            },
                            {
                                school: "De La Salle University",
                                course: "Computer Technology Division",
                                field: "Biology",
                                start_year: "2014",
                                end_year: "2018",
                            },
                        ],
                    },
                },
            },
        ],
    },
];

export class Teacher {
    teacher = {
        role: "",
        code: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        school: "",
        email: "",
        password: "",
    };

    getTeacher() {
        return this.teacher;
    }

    reset() {
        Object.keys(this.teacher).forEach((key) => {
            this.teacher[key] = "";
        });
    }
}

export class TeacherService {
    getAllTeachers() {
        return TeacherData[0].items;
    }

    addNewTeacher(teacher) {
        var user = new Teacher();
        var new_teacher = user.teacher;
        var all_teachers = TeacherData[0].items;

        var index = all_teachers.findIndex(
            (item) => item.email === teacher.e_mail
        );

        if (index < 0) {
            new_teacher.code = this.getAllTeachers().length + 1;
            new_teacher.first_name = teacher.first_name;
            new_teacher.middle_name = teacher.middle_name;
            new_teacher.last_name = teacher.last_name;
            new_teacher.school = teacher.school;
            new_teacher.email = teacher.e_mail;
            new_teacher.password = teacher.password;

            all_teachers.push(new_teacher);
            user.reset();
            return true;
        }
        return false;
    }
}
