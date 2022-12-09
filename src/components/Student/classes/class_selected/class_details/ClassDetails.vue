<template>
    <div class="class-details-content">
        <div class="content-title">
            <h1>Multi-step Equations and Inequalities</h1>
            <span> Algebra </span>
        </div>
        <br />
        <v-divider />
        <div class="content-details">
            <div class="details-teacher">
                <img
                    src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                    alt="teacher photo"
                />
                <div class="teacher-details">
                    Teacher
                    <span>Jordan Williams</span>
                </div>
            </div>
            <v-divider vertical />
            <div class="details-time">
                <div class="time-details">
                    Time
                    <span>9:00 am - 10:00 am</span>
                </div>
            </div>
            <v-divider vertical />
            <div class="details-day">
                <div class="day-details">
                    Day
                    <span>Monday, Wednesday, Friday</span>
                </div>
            </div>
        </div>
        <v-divider />
    </div>
</template>

<style scoped>
.class-details-content {
    width: 100%;
}

.content-title span {
    font-size: 1.4em;
}

.content-details {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
}

.details-teacher,
.details-time,
.details-day {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 15px;
}

.details-teacher img {
    width: 50px;
    border-radius: 50%;
}

.teacher-details span,
.time-details span,
.day-details span {
    font-size: 1em;
    font-weight: bold;
}

.teacher-details,
.time-details,
.day-details {
    width: 100%;
    display: flex;
    flex-direction: column;
}
</style>
