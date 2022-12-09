export let GradebookData = [
    {
        items: [
            "Class Periods",
            "Cycle Grades",
            "Assignments",
            "My Data",
            "Requests",
        ],
    },
];

export class GradebookService {
    getTabItems() {
        return GradebookData[0].items;
    }

    setActiveTab(item) {
        GradebookData[1].active_tab = item;
    }

    getActiveTab() {
        return GradebookData[1].active_tab;
    }
}
