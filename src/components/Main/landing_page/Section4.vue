<template>
    <div class="main-content">
        <div class="title">
            <span>What do our students &nbsp;</span>
            <h1>say about us?</h1>
        </div>
        <v-carousel cycle hide-delimiters>
            <v-carousel-item v-for="(item, i) in items" :key="i">
                <div class="content-items">
                    <div class="content-item">
                        <div class="item-header">
                            <div class="header-image">
                                <img :src="item.item1.src" alt="" />
                            </div>
                            <div class="header-details">
                                <div class="name-details">
                                    <h3>{{ item.item1.name }}</h3>
                                </div>
                                <div class="position-details">
                                    <span>{{ item.item1.position }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="item-body">
                            <p>"{{ item.item1.feedback }}"</p>
                        </div>
                        <div class="item-footer">⭐⭐⭐⭐⭐</div>
                    </div>

                    <div class="content-item">
                        <div class="item-header">
                            <div class="header-image">
                                <img :src="item.item2.src" alt="" />
                            </div>
                            <div class="header-details">
                                <div class="name-details">
                                    <h3>{{ item.item2.name }}</h3>
                                </div>
                                <div class="position-details">
                                    <span>{{ item.item2.position }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="item-body">
                            <p>"{{ item.item2.feedback }}"</p>
                        </div>
                        <div class="item-footer">⭐⭐⭐⭐⭐</div>
                    </div>

                    <div class="content-item">
                        <div class="item-header">
                            <div class="header-image">
                                <img :src="item.item3.src" alt="" />
                            </div>
                            <div class="header-details">
                                <div class="name-details">
                                    <h3>{{ item.item3.name }}</h3>
                                </div>
                                <div class="position-details">
                                    <span>{{ item.item3.position }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="item-body">
                            <p>"{{ item.item3.feedback }}"</p>
                        </div>
                        <div class="item-footer">⭐⭐⭐⭐⭐</div>
                    </div>
                </div>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
export default {
    components: {},

    data() {
        return {
            items: [
                {
                    item1: {
                        src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                        feedback:
                            "Thank you for your hard work in supporting my son as they develop. Your patience and commitment to supporting my child has mean a lot to our family.",
                        name: "Mark Williams",
                        position: "Web Designer",
                    },

                    item2: {
                        src: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg",
                        feedback:
                            "Thank you for your hard work in supporting my son as they develop. Your patience and commitment to supporting my child has mean a lot to our family.",
                        name: "Harry David",
                        position: "Fullstack Developer",
                    },

                    item3: {
                        src: "https://t4.ftcdn.net/jpg/02/26/67/23/360_F_226672340_FUInCFzn7Yyso0I1KNaekRg2JBqw4XC9.jpg",
                        feedback:
                            "Thank you for your hard work in supporting my son as they develop. Your patience and commitment to supporting my child has mean a lot to our family.",
                        name: "Samatha Jones",
                        position: "DevOps Engineer",
                    },
                },

                {
                    item1: {
                        src: "https://t4.ftcdn.net/jpg/02/26/67/23/360_F_226672340_FUInCFzn7Yyso0I1KNaekRg2JBqw4XC9.jpg",
                        feedback:
                            "Thank you for your hard work in supporting my son as they develop. Your patience and commitment to supporting my child has mean a lot to our family.",
                        name: "Samantha Jones",
                        position: "DevOps Engineer",
                    },

                    item2: {
                        src: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg",
                        feedback:
                            "Thank you for your hard work in supporting my son as they develop. Your patience and commitment to supporting my child has mean a lot to our family.",
                        name: "Harry David",
                        position: "DevOps Engineer",
                    },

                    item3: {
                        src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                        feedback:
                            "Thank you for your hard work in supporting my son as they develop. Your patience and commitment to supporting my child has mean a lot to our family.",
                        name: "Mark Williams",
                        position: "Web Designer",
                    },
                },

                {
                    item1: {
                        src: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg",
                        feedback:
                            "Thank you for your hard work in supporting my son as they develop. Your patience and commitment to supporting my child has mean a lot to our family.",
                        name: "Harry David",
                        position: "DevOps Engineer",
                    },

                    item2: {
                        src: "https://t4.ftcdn.net/jpg/02/26/67/23/360_F_226672340_FUInCFzn7Yyso0I1KNaekRg2JBqw4XC9.jpg",
                        feedback:
                            "Thank you for your hard work in supporting my son as they develop. Your patience and commitment to supporting my child has mean a lot to our family.",
                        name: "Samantha Jones",
                        position: "DevOps Engineer",
                    },

                    item3: {
                        src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                        feedback:
                            "Thank you for your hard work in supporting my son as they develop. Your patience and commitment to supporting my child has mean a lot to our family.",
                        name: "Mark Williams",
                        position: "Web Designer",
                    },
                },
            ],
        };
    },
};
</script>

<style scoped>
.main-content {
    max-width: 100%;
    height: 100%;

    padding: 70px 70px 0px 70px;
}

.main-content .title {
    margin: auto;
    text-align: left;
}

.main-content .title span {
    float: left;
    font-size: 2em;
}

.main-content .title h1 {
    color: #0073b0;
}

.main-content .content-items {
    max-width: 100%;

    display: flex;
    flex-direction: row;
    column-gap: 50px;
    padding: 100px 5% 100px 5%;
}

.content-items .content-item {
    width: 100%;
    background-color: #ffff;
    padding: 20px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
}

.item-header {
    display: flex;
}

.header-image {
    width: 50px;
    height: 50px;
}
.header-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.header-details {
    padding-left: 10px;
}

.position-details {
    opacity: 75%;
}

.item-body {
    margin-top: 15px;
    text-align: justify;
    text-justify: inter-word;
}

.item-footer {
    float: right;
}
</style>
