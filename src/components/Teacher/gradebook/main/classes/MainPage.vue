<template>
    <div class="main-content">
        <div class="content-title">
            <span class="class-name">Gradebook</span>
        </div>
        <div class="content-body">
            <div class="items">
                <v-card
                    v-for="(items, index) in my_class"
                    :key="index"
                    :class="{
                        itemHovered: index === item_index,
                        itemNotHovered: index !== item_index,
                    }"
                    :elevation="index === item_index ? 6 : ''"
                    @mouseover="selectItem(index)"
                    @mouseleave="unselectItem()"
                    @click="
                        $router.push({
                            name: 'ClassSelected',
                            params: {
                                class_code: items.code,
                            },
                        })
                    "
                >
                    <div class="item-upper">
                        <span class="upper-class-name">{{ items.name }}</span>
                        <span class="upper-class-code">{{ items.code }}</span>
                    </div>
                    <div class="item-bottom">
                        <span>{{ items.section }}</span>
                    </div>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
import { AllClassesService } from "@/api/Teacher/all_classes/AllClassesData";

export default {
    data() {
        return {
            my_class: AllClassesService.prototype.getAllClass(),

            item_index: "",
        };
    },

    methods: {
        selectItem(index) {
            this.item_index = index;
        },

        unselectItem() {
            this.item_index = "";
        },
    },
};
</script>

<style scoped>
.main-content {
    width: 100%;
}

.content-title {
    display: flex;
    flex-direction: column;
    padding: 25px 5% 25px 5%;
    background-color: var(--blue-1);
}

.content-title .class-name {
    font-size: 1.5em;
    color: var(--white-1);
}

.content-title .class-code {
    font-size: 1em;
    color: var(--white-1);
}

.content-body {
    width: 100%;
    padding: 5%;
}

.items {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 20px;
}

.items .itemHovered,
.itemNotHovered {
    width: 288px;
}

.itemHovered {
    cursor: pointer;
}

.itemHovered .item-upper {
    padding: 15px;
    display: flex;
    flex-direction: column;
    background-color: var(--blue-1);
    color: var(--white-1);
}

.itemHovered .item-bottom {
    padding: 15px;
    color: var(--black-1);
}

.itemNotHovered .item-upper {
    padding: 15px;
    display: flex;
    flex-direction: column;
    background-color: var(--gray-1);
    color: var(--gray-2);
}

.itemNotHovered .item-bottom {
    padding: 15px;
    color: var(--gray-2);
}
</style>
