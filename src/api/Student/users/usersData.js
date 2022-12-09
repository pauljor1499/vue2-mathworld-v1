export let StudentData = [
    {
        items: [
            {
                id: 1,
                role: "Student",
                credentials: {
                    photo: "",
                    name: {
                        first_name: "Michael",
                        middle_name: "",
                        last_name: "Williams",
                    },
                    account: {
                        email: "student@gmail.com",
                        password: "student",
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

export class StudentService {}
