<template>
    <div class="main-content">
        <div class="content">
            <h1>Become a Student Today</h1>
            <p>
                Join one of the world’s largest online learning marketplaces.
                Our Student Support Team is ready to help you in learning.
            </p>
            <div class="button">
                <v-btn color="#00C136" dark x-large to="/register">
                    JOIN NOW
                </v-btn>
            </div>
            <div class="image"></div>
        </div>
    </div>
</template>

<style scoped>
.main-content {
    background-color: #f4f6f9;
}

.content {
    padding: 50px 0px;
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}

.content h1 {
    text-align: center;
}

.content p {
    text-align: center;
}

.content .button {
    display: flex;
    justify-content: center;
}
</style>
