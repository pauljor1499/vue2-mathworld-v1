<template>
    <div class="main-content">
        <div class="message">
            <h1>UNLOCK THE POWER OF YOUR FULL POTENCIAL.</h1>
            <p>
                You'll definitely find the right solution for your math journey.
            </p>
            <v-btn color="#00C136" dark x-large to="/register">
                JOIN NOW
            </v-btn>
        </div>
        <div class="image">
            <img
                src="https://img.freepik.com/premium-photo/young-student-couple-isolated-yellow-background-giving-thumbs-up-gesture-because-something-good-has-happened_1368-310333.jpg?w=2000"
                alt=""
            />
        </div>
    </div>
</template>

<style scoped>
.link {
    text-decoration: none;
    list-style: none;
    text-transform: initial;
}

.main-content {
    width: 100%;
    display: flex;
    background-color: #0091de;
}

.main-content .message {
    flex: 1;
    width: 100%;
    padding: 10% 5% 20% 5%;
}

.main-content .message h1 {
    font-family: "Anton", sans-serif;
    line-height: 1;
    font-size: 3.2em;
    color: #ffff;
}

.main-content .message p {
    margin-top: 20px;
    font-size: 1.5em;
    color: #ffff;
}

.main-content .message .v-btn {
    margin-top: 50px;
    width: 40%;
    font-weight: bold;
    border: 1px solid #ffff;
}

.image {
    flex: 1;
    max-width: 100%;
    max-height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.image img {
    width: 75%;
    height: 75%;
    object-fit: cover;
    border-radius: 25% 0% 0% 0%;

    box-shadow: -25px 20px 0px 0px #ffff;
}
</style>
