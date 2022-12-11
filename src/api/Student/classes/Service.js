import { Classes } from "./Data";

export class AllClassesService {
    get_all_classes() {
        return Classes;
    }

    get_class(class_name) {
        var all_classes = Classes;
        const index = all_classes.findIndex(
            (item) => item.title === class_name
        );
        console.log(Classes[index]);
        return Classes[index];
    }
}
