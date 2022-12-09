<template>
    <header>
        <div class="logo">
            <router-link :to="'/'" class="logo-link">
                <h1>Math</h1>
                <span>World</span>
            </router-link>
        </div>

        <div class="main-nav">
            <router-link :to="'/'" class="nav-link">
                <span>Home</span>
            </router-link>

            <router-link :to="'about'" class="nav-link">
                <span>About</span>
            </router-link>

            <router-link :to="'community'" class="nav-link">
                <span>Community</span>
            </router-link>

            <v-btn class="ma-2" outlined color="#0091DE" large to="signin">
                <span class="signin">Sign In</span>
            </v-btn>

            <v-btn color="#0091DE" large to="register">
                <span class="register">Register</span>
            </v-btn>
        </div>
    </header>
</template>

<style scoped>
* {
    text-decoration: none;
    list-style: none;
    text-transform: initial;
}

header {
    position: sticky;
    background-color: #ffff;
    top: 0;
    z-index: 999;

    width: 100%;
    display: flex;
    justify-content: space-between;

    padding: 0px 5% 0px 5%;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
}

.logo {
    display: flex;
    align-items: center;
}

.logo .logo-link {
    display: flex;
}

span {
    color: black;
}

.main-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo span {
    font-size: 2em;
}

.main-nav .nav-link {
    font-size: 1.2em;
    padding: 35px 20px 35px 20px;
    border-bottom: 3px solid white;
}

.main-nav .nav-link:hover {
    background-color: #ecf8ff;
    border-bottom: 3px solid #0091de;
}

.main-nav a.router-link-exact-active {
    background-color: #ecf8ff;
    border-bottom: 3px solid #0091de;
}

.main-nav .v-btn {
    margin: 5px;
    padding: 20px;
}

.main-nav .v-btn span {
    font-size: 1.2em;
}

.main-nav .v-btn span .signin {
    color: #0091de;
}

.main-nav .v-btn span .register {
    color: #ffff;
}
</style>
