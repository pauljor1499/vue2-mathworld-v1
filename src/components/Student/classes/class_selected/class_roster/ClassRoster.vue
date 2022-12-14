<template>
    <div class="class-roster-content">
        <div class="content-title" style="color: var(--blue-1)">
            <h2>All Students</h2>
            <div>
                {{ class_roster.length + " students" }}
            </div>
        </div>
        <br />
        <br />
        <v-list dense v-for="(item, index) in class_roster" :key="index">
            <v-list-item :key="index">
                <v-list-item-avatar>
                    <v-img :src="item.photo" />
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>
                        <span>
                            {{
                                item.first_name +
                                " " +
                                item.middle_name +
                                " " +
                                item.last_name
                            }}
                        </span>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider class="mt-3" v-if="index < class_roster.length - 1" />
        </v-list>
    </div>
</template>

<script>
import { AllClassesService } from "@/api/Student/classes/Service";

export default {
    props: {
        className: String,
    },

    computed: {
        class_roster() {
            return AllClassesService.prototype.get_class(this.className)
                .class_roster;
        },
    },
};
</script>

<style scoped>
span {
    text-transform: uppercase;
}

.class-roster-content {
    width: 100%;
}

.content-title {
    display: flex;
    justify-content: space-between;
}
</style>
