<template>
    <div class="main-content">
        <div class="content-header">
            <div class="content-title">
                <span>Why choose &nbsp;</span>
                <h1>MathWorld?</h1>
            </div>
            <p>
                The rise and fall of civilization depends on the level of
                technological advancement. All technological tools starts with a
                mathematical idea.
            </p>
        </div>
        <div class="grid">
            <div class="col">
                <div class="section1">
                    <div class="circle">
                        <img
                            src="https://bl3301files.storage.live.com/y4m7z-t4hdf0Za0QUBw7E00S0yuXKbj3rjDqpFf5ZMs5eY6xxJ-aXbw0xA4MfQkU-CsRuSnJak6kQ3bEikJoGokoN4pY4IlT1u4tK4EIJ-IHwRFUyX0s_aehMg3RKGXO_F3boXF5weSDy_7TWMWjwfefFogrb2_hZLkOoS8RvIR2y4xZFmvSqoxCMWzl0w6XO4i?width=200&height=200&cropmode=none"
                            alt=""
                        />
                    </div>
                    <h2>Personalized Learning</h2>
                    <p>
                        Customizable exercises and tests centered on students
                        skill set. Taking into account individual students
                        ability and interest makes learning more meaningful.
                    </p>
                </div>
            </div>

            <div class="col">
                <div class="section2">
                    <div class="circle">
                        <img
                            src="https://bl3301files.storage.live.com/y4m2FpESxrT4vepGODp7C03rq0L1HwjynKiqRodIErurQ5yQMLAXMmZlx670Nt8-l7JfB5sUogJ2b9w55ippyvSCmfRsBOApNLyY3UDzl-NIsZl7YOCkzeW83QJIPor2vBkwGHt-ZfJv-jFtYVQyrBigia3hnUwzK9zpBLqeXfjDA7pwH6YqQ8COjPa1Ml73svu?width=376&height=376&cropmode=none"
                            alt=""
                        />
                    </div>
                    <h2>Trusted Content</h2>
                    <p>
                        Created with strong collaboration between classroom
                        teachers, parents, students and state tests writers.
                        Thoroughly reviewed and constantly updated.
                    </p>
                </div>
            </div>

            <div class="col">
                <div class="section3">
                    <div class="circle">
                        <img
                            src="https://bl3301files.storage.live.com/y4mzHf3X53JJD3m8Pv0mUoMpLAA69ps55rDNwaDEv8hDTKilJRjJaLJEhvl1seY11CdOjTbKS8p5bXbf8RWPpY0GdD4jV8MXzzhYayXo8oZZ_J4l9rTdAq709L9rz-EvI8iRqxBoqDLsEcMM9N4XKCngjxqtp5QcJa1MOxuAJ-n-8qXCIaR9LK7fLgLYCtMSiRD?width=548&height=562&cropmode=none"
                            alt=""
                        />
                    </div>
                    <h2>Tools to Empower Teachers</h2>
                    <p>
                        Allign with state standards and college board identified
                        competencies. Designed for college success.
                    </p>
                </div>
            </div>
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
    padding: 70px;
}

.main-content .content-header {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin: auto;
    width: 50%;
}

.main-content .content-title {
    display: flex;
    margin: auto;
}

.main-content .content-header span {
    float: left;
    font-size: 2.5em;
}

.main-content .content-header h1 {
    color: #0073b0;
    margin: auto;
    font-size: 2.5em;
}

.main-content .content-header p {
    opacity: 50%;
    text-align: center;
    font-size: 1.2em;
}

.main-content .grid {
    margin-top: 100px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 50px;
}

.main-content .grid .col {
    text-align: center;
}

.section1,
.section2,
.section3 {
    height: 100%;
    display: inline-block;
    padding: 0px 50px 50px 50px;
    border-radius: 3%;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
}

.section1 .circle,
.section2 .circle,
.section3 .circle {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: auto;
    margin-top: -50px;
    margin-bottom: 25px;

    display: flex;
    justify-content: center;
    align-items: center;
}

h2 {
    line-height: 1;
}

.main-content .grid .col .section1 {
    border: 3px solid #8cd6ff;
}

.main-content .grid .col .section1 .circle {
    background: #0073b0;
    border: 6px solid #8cd6ff;
}

.main-content .grid .col .section1 .circle img {
    width: 50px;
}

.main-content .grid .col .section1 h2 {
    color: #0073b0;
}

.main-content .grid .col .section2 {
    border: 3px solid #ffcdcd;
}

.main-content .grid .col .section2 .circle {
    background: #ff244c;
    border: 6px solid #ffcdcd;
}

.main-content .grid .col .section2 .circle img {
    width: 50px;
}

.main-content .grid .col .section2 h2 {
    color: #ff244c;
}

.main-content .grid .col .section3 {
    border: 3px solid #a6f48a;
}

.main-content .grid .col .section3 .circle {
    background: #05893a;
    border: 6px solid #a6f48a;
}

.main-content .grid .col .section3 .circle img {
    width: 50px;
}

.main-content .grid .col .section3 h2 {
    color: #05893a;
}

.main-content .grid .col h2 {
    margin-bottom: 20px;
}

.main-content .grid .col button {
    float: left;
}
</style>
