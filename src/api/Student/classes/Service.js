import { Classes } from "./Data";

var all_classes = Classes;

export class AllClassesService {
    get_class(class_name) {
        const index = all_classes.findIndex(
            (item) => item.title === class_name
        );
        return all_classes[index];
    }
}
