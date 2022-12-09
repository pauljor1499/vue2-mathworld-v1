import { TeacherData } from "./usersData";

var teachers = TeacherData[0].items;
var user = {
    id: 0,
    role: "",
    credentials: {
        photo: "",
        name: {
            first_name: "",
            middle_name: "",
            last_name: "",
        },
        account: {
            email: "",
            password: "",
        },
        school: "",
        office: {
            location: "",
            free_time: "",
            phone_number: "",
        },
        background: {
            biography: null,
            education: [],
        },
    },
};

export class TeacherSignUp {
    sign_up_user(new_user) {
        try {
            var model = this.create_teacher(new_user);
            var user = this.teacher_exists(model);
            if (user.status === false) {
                teachers.push(JSON.parse(JSON.stringify(model)));
                return user;
            }
            return user;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    create_teacher(new_user) {
        user.id = teachers.length + 1;
        user.role = "Teacher";
        user.credentials.name.first_name = new_user.first_name;
        user.credentials.name.middle_name = new_user.middle_name;
        user.credentials.name.last_name = new_user.last_name;
        user.credentials.account.email = new_user.email;
        user.credentials.account.password = new_user.password;
        return user;
    }

    teacher_exists(new_user) {
        var error = {
            status: false,
            message: "",
        };
        teachers.forEach((teacher) => {
            if (
                JSON.stringify(teacher.credentials.name) ==
                    JSON.stringify(new_user.credentials.name) &&
                JSON.stringify(teacher.credentials.account.email) ==
                    JSON.stringify(new_user.credentials.account.email)
            ) {
                error.status = true;
                error.message = "Account is already registered";
                return error;
            } else if (
                JSON.stringify(teacher.credentials.name) !=
                    JSON.stringify(new_user.credentials.name) &&
                JSON.stringify(teacher.credentials.account) ==
                    JSON.stringify(new_user.credentials.account)
            ) {
                error.status = true;
                error.message = "Email address is already taken";
                return error;
            }
        });
        return error;
    }
}
