export let AllClassesData = [
    {
        all_classes: [
            {
                name: "Algebra 1",
                code: "013-HQ1",
                section: "Section 1",
            },

            {
                name: "Algebra 2",
                code: "013-HQ2",
                section: "Section 2",
            },

            {
                name: "Algebra 3",
                code: "013-HQ3",
                section: "Section 3",
            },

            {
                name: "Algebra 4",
                code: "013-HQ4",
                section: "Section 4",
            },

            {
                name: "Algebra 5",
                code: "013-HQ5",
                section: "Section 5",
            },
        ],
    },
];

export class AllClassesService {
    getAllClass() {
        return AllClassesData[0].all_classes;
    }
}
