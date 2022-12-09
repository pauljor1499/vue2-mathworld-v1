<template>
    <v-app class="mainApp">
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
export default {};
</script>

<style>
:root {
    --red-1: #ffcdcd;
    --red-2: #ff2d2d;
    --red-3: #ff0000;
    --green-1: #b3ffc8;
    --green-2: #3b9353;
    --green-3: #00a558;
    --blue-1: #0091de;
    --blue-2: #ecf8ff;
    --white-1: #ffffff;
    --gray-1: #eeeeee;
    --gray-2: #727272;
    --black-1: #000000;
}

#app {
    /* font-family: "Poppins", sans-serif; */
    font-family: "Lato", sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--white-1);
}
.mainApp {
    background-color: var(--white-1);
}
</style>
