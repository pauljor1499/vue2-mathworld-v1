<template>
    <div id="section3" class="main-content">
        <div class="content">
            <div class="content-items">
                <h1>Test We Offer</h1>
                <div class="item">
                    <div class="item-image">
                        <img
                            src="https://www.freeiconspng.com/thumbs/star-icon/blue-star-icon-14.png"
                            alt=""
                        />
                    </div>
                    <div class="item-details">
                        <div class="details-title">MathWorld Test</div>
                        <div class="details-body">
                            (initial) A test used in selecting candidates for
                            college admission, formerly called the Scholastic
                            Aptitude Test. It measures critical reading
                            abilities, mathematical reasoning abilities, and
                            writing abilities developed over time through work
                            done in school and alone.
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="item-image">
                        <img
                            src="https://www.freeiconspng.com/thumbs/star-icon/blue-star-icon-14.png"
                            alt=""
                        />
                    </div>
                    <div class="item-details">
                        <div class="details-title">
                            Scholastic Assessment Test
                        </div>
                        <div class="details-body">
                            A test used in selecting candidates for college
                            admission, formerly called the Scholastic Aptitude
                            Test. It measures critical reading abilities,
                            mathematical reasoning abilities, and writing
                            abilities developed over time through work done in
                            school and alone.
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="item-image">
                        <img
                            src="https://www.freeiconspng.com/thumbs/star-icon/blue-star-icon-14.png"
                            alt=""
                        />
                    </div>
                    <div class="item-details">
                        <div class="details-title">American College Test</div>
                        <div class="details-body">
                            A national standardized test that serves as a
                            measurement of aptitude and critical thinking.
                            Colleges and universities in the United States
                            carefully review exam results when admitting
                            students to schools. ACT scores are an important
                            factor of consideration.
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="item-image">
                        <img
                            src="https://www.freeiconspng.com/thumbs/star-icon/blue-star-icon-14.png"
                            alt=""
                        />
                    </div>
                    <div class="item-details">
                        <div class="details-title">
                            Texas Success Initiative Assessment
                        </div>
                        <div class="details-body">
                            <p>
                                The TSI Assessment (TSIA) is part of the Texas
                                Success Initiative enacted by the Texas State
                                Legislature and designed to determine a
                                student’s readiness for college-level coursework
                                in the general areas of reading, writing, and
                                mathematics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-content {
    padding: 50px 70px 100px 70px;
}

.main-content .content {
    margin: auto;
    width: 75%;
}

.main-content h1 {
    text-align: center;
}

.content-items {
    display: flex;
    flex-direction: column;
    row-gap: 50px;
}

.item {
    display: flex;
    font-size: 1.2em;
    text-justify: inter-word;
}

.item .item-image {
    max-width: 50px;
    max-height: 50px;
}

.item .item-image img {
    width: 100%;
}

.item .item-details {
    padding-left: 20px;
}

.details-body {
    text-align: justify;
    text-justify: inter-word;
}
</style>
