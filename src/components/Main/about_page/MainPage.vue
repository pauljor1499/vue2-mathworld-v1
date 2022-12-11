<template>
    <div class="main-container">
        <Section1 />
        <Mission />
        <Vision />
        <Values />
        <Team />
        <Section3 />
        <Section4 />
    </div>
</template>

<script>
import Section1 from "@/components/Main/about_page/Section1.vue";
import Vision from "@/components/Main/about_page/Vision.vue";
import Section3 from "@/components/Main/about_page/Section3.vue";
import Section4 from "@/components/Main/about_page/Section4.vue";
import Mission from "@/components/Main/about_page/Mission.vue";
import Values from "@/components/Main/about_page/Values.vue";
import Team from "@/components/Main/about_page/Team.vue";

export default {
    components: { Section1, Mission, Vision, Values, Team, Section3, Section4 },
};
</script>

<style scoped>
.main-container {
    display: flex;
    flex-direction: column;
    row-gap: 100px;
}
</style>
