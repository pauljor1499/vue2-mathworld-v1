<template>
    <div class="main-content">
        <div class="content">
            <div class="content-header">
                <h2>MathWorld Values</h2>
            </div>
            <div class="content-body">
                <p>
                    In MathWorld, we believe that effective learning takes place
                    when a learner answers questions, solve problems, create a
                    project and/or build a product.
                </p>
            </div>
        </div>

        <div class="image">
            <img src="@/assets/about_page/values.png" alt="" />
        </div>
    </div>
</template>
>

<style scoped>
.main-content {
    padding: 0px 5%;
    display: flex;
}

.content,
.image {
    flex: 1;
}

.content {
    text-align: right;
    margin-right: 50px;
}

.content .content-body {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-left: 70px;
}

.main-content .image img {
    max-width: 100%;
}

.content .content-header {
    text-align: center;
    font-size: 1.2em;
}

.content .content-body {
    font-size: 1.2em;
    margin-top: 10px;
    text-align: justify;
    text-justify: inter-word;
}
</style>
