<template>
    <div class="main-content">
        <div class="image">
            <img src="@/assets/about_page/vision.png" alt="" />
        </div>

        <div class="content">
            <div class="content-header">
                <h2>Our Vision</h2>
            </div>
            <div class="content-body">
                <p>
                    MathWorld will pursue to become a worldwide repository of
                    test questions, projects, open problems and other types of
                    assessment.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-content {
    padding: 0px 5%;
    display: flex;
    column-gap: 45px;
}

.main-content .content,
.image {
    flex: 1;
}

.content .content-body {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}

.content {
    text-align: right;
}

.main-content .image img {
    max-width: 90%;
    padding-left: 30px;
}

.content .content-header {
    font-size: 1.2em;
    text-align: center;
}

.content .content-body {
    font-size: 1.2em;
    margin-top: 10px;
    text-align: justify;
    text-justify: inter-word;
}
</style>
