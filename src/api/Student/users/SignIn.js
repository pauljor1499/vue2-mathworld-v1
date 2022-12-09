import { StudentData } from "./usersData";
import { storeCurrentUser } from "@/store/CurrentUser";

export class StudentSignIn {
    get_all_students() {
        return StudentData[0].items;
    }

    sign_in_user(email, password) {
        var students = this.get_all_students();
        const store_CurrentUser = storeCurrentUser();

        for (var index in students) {
            if (
                students[index].credentials.account.email === email &&
                students[index].credentials.account.password === password
            ) {
                store_CurrentUser.current_user = students[index];
                return true;
            }
        }
        return false;
    }
}
