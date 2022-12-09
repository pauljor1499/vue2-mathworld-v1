import { TeacherData } from "./usersData";
import { storeCurrentUser } from "@/store/CurrentUser";

export class TeacherSignIn {
    get_all_teachers() {
        return TeacherData[0].items;
    }

    sign_in_user(email, password) {
        var teachers = this.get_all_teachers();
        const store_CurrentUser = storeCurrentUser();

        for (var index in teachers) {
            if (
                teachers[index].credentials.account.email === email &&
                teachers[index].credentials.account.password === password
            ) {
                store_CurrentUser.current_user = teachers[index];
                return true;
            }
        }
        return false;
    }
}
