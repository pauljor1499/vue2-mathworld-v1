<template>
    <div class="main-container">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
    </div>
</template>

<script>
import Section1 from "@/components/Main/about_page/Section1.vue";
import Section2 from "@/components/Main/about_page/Section2.vue";
import Section3 from "@/components/Main/about_page/Section3.vue";
import Section4 from "@/components/Main/about_page/Section4.vue";

export default {
    components: { Section1, Section2, Section3, Section4 },
};
</script>
