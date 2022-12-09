import Vue from "vue";
import VueRouter from "vue-router";

//Main Pages
import MainPage from "@/views/Main/MainPage.vue";
import SignInPage from "@/components/Main/sign_in_page/MainPage.vue";
import SignUp from "@/components/Main/sign_up_page/MainPage.vue";
import LandingPage from "@/components/Main/landing_page/MainPage.vue";
import AboutPage from "@/components/Main/about_page/MainPage.vue";
import PageNotFound from "@/components/Main/page_not_found/PageNotFound.vue";

//Teacher Pages
import TeacherPage from "@/views/Teacher/TeacherPage.vue";
import Dashboard from "@/components/Teacher/dashboard/MainPage.vue";
import AllClassesPage from "@/components/Teacher/all_classes/MainPage.vue";
import EventPlannerPage from "@/components/Teacher/event_planner/MainPage.vue";
import ProfilePage from "@/components/Teacher/profile_page/ProfilePage.vue";
import TeacherNotFound from "@/components/Teacher/page_not_found/PageNotFound.vue";
//Gradebook
import GradebookPage from "@/components/Teacher/gradebook/main/MainPage.vue"; //Parent Page
import Classes from "@/components/Teacher/gradebook/main/classes/MainPage.vue";
import ClassSelected from "@/components/Teacher/gradebook/main/class_selected/MainPage.vue";
import ClassSelectedAllContent from "@/components/Teacher/gradebook/main/class_selected/AllContent.vue";
//Assignments
import AssignmentPage from "@/components/Teacher/gradebook/assignments/main/MainPage.vue"; //Parent Page
import SelectedAssignment from "@/components/Teacher/gradebook/assignments/main/selected_assignment/SelectedAssignment.vue";
import NewAssignment from "@/components/Teacher/gradebook/assignments/main/new_assignment/NewAssignment.vue";
import UpdateAssignment from "@/components/Teacher/gradebook/assignments/main/update_assignment/UpdateAssignment.vue";

//Student Pages
import StudentPage from "@/views/Student/StudentPage.vue";
import StudentProfile from "@/components/Student/profile_page/ProfilePage.vue";
import StudentClasses from "@/components/Student/classes/Classes.vue";
import StudentClassSelected from "@/components/Student/classes/class_selected/ClassSelected.vue";
import StudentNotes from "@/components/Student/notes/Notes.vue";
import StudentNotFound from "@/components/Student/page_not_found/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: MainPage,
        children: [
            {
                path: "",
                component: LandingPage,
            },

            {
                path: "about",
                component: AboutPage,
            },

            {
                path: "signin",
                component: SignInPage,
            },

            {
                path: "register",
                component: SignUp,
            },
        ],
    },

    {
        path: "/teacher",
        component: TeacherPage,
        children: [
            {
                path: "",
                component: Dashboard,
            },

            {
                path: "profile",
                component: ProfilePage,
            },

            {
                path: "all-classes",
                component: AllClassesPage,
            },

            {
                path: "event-planner",
                component: EventPlannerPage,
            },

            {
                path: "gradebook",
                component: GradebookPage,
                children: [
                    {
                        path: "",
                        component: Classes,
                        props: true,
                    },

                    {
                        path: ":class_code",
                        component: ClassSelected,
                        props: true,
                        children: [
                            {
                                path: "",
                                name: "ClassSelected",
                                component: ClassSelectedAllContent,
                                props: true,
                            },

                            {
                                path: "assignment",
                                name: "Assignment",
                                component: AssignmentPage,
                                props: true,
                                children: [
                                    {
                                        path: ":assignment_type/new",
                                        name: "NewAssignment",
                                        component: NewAssignment,
                                        props: true,
                                    },

                                    {
                                        path: ":assignment_type/:assignment_code",
                                        name: "SelectedAssignment",
                                        component: SelectedAssignment,
                                        props: true,
                                    },

                                    {
                                        path: ":assignment_type/:assignment_code/update",
                                        name: "UpdateAssignment",
                                        component: UpdateAssignment,
                                        props: true,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

            {
                path: "404",
                alias: "*",
                name: "TeacherNotFound",
                component: TeacherNotFound,
            },
        ],
    },

    {
        path: "/student",
        component: StudentPage,
        children: [
            {
                path: "",
                component: StudentClasses,
            },

            {
                path: "profile",
                component: StudentProfile,
            },

            {
                path: "notes",
                component: StudentNotes,
            },

            {
                path: ":class_name",
                name: "StudentClassSelected",
                component: StudentClassSelected,
                props: true,
            },

            {
                path: "404",
                alias: "*",
                name: "StudentNotFound",
                component: StudentNotFound,
            },
        ],
    },

    {
        path: "/404",
        alias: "*",
        name: "PageNotFound",
        component: PageNotFound,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
