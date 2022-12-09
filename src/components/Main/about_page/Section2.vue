<template>
    <div class="main-content">
        <div class="content">
            <div class="content-header">
                <h2>Our Mission</h2>
            </div>
            <div class="content-body">
                <p>
                    In MathWorld, we believe that every individual, regardless
                    of age, race and gender is gifted with an inherent talent to
                    understand mathematical ideas. With this belief as the
                    cornerstone, we strive to provide a learning environment
                    where individual talents are identified and nurtured to its
                    full potential.
                </p>

                <div class="items">
                    <div class="item">
                        <div class="item-image">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2107/2107638.png"
                                alt=""
                            />
                        </div>
                        <div class="item-details">Create an account</div>
                    </div>

                    <div class="item">
                        <div class="item-image">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2107/2107638.png"
                                alt=""
                            />
                        </div>
                        <div class="item-details">Sign In to MathWorld</div>
                    </div>

                    <div class="item">
                        <div class="item-image">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2107/2107638.png"
                                alt=""
                            />
                        </div>
                        <div class="item-details">Select and take tests</div>
                    </div>

                    <div class="item">
                        <div class="item-image">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2107/2107638.png"
                                alt=""
                            />
                        </div>
                        <div class="item-details">Pass the tests</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="image">
            <img
                src="https://bl3301files.storage.live.com/y4m2jwVZOAEv4rSnq_nIkMW8h3lFvH9McSV3cvLE0u0ObIvnPSaCMhRuHz5O-ODr6FMlIlY1BjGfB4TetUmo4KA1UVj-0M5sILyU6Ak99dNeWgTL-w4VZl4deT9rJKIOK3Oqk61zmu40_J4L1SViOBFv0CRWQeNGdOh1YcU65DNOvm4xcZoyPt6EcZ_J_UsxvbF?width=612&height=569&cropmode=none"
                alt=""
            />
        </div>
    </div>
</template>

<style scoped>
.main-content {
    padding: 100px 70px 50px 70px;
    display: flex;
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

.main-content .image {
    padding-left: 50px;
}

.main-content .image img {
    max-width: 100%;
}

.content .content-header {
    font-size: 1.2em;
}

.content .content-body {
    font-size: 1.2em;
    margin-top: 10px;
    text-align: justify;
    text-justify: inter-word;
}

.items .item {
    display: flex;
    align-items: center;
}

.items .item .item-image {
    max-width: 35px;
}

.items .item .item-image img {
    width: 100%;
}

.items .item .item-details {
    padding-left: 20px;
}
</style>
