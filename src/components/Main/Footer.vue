<template>
	<footer>
		<div class="footer-head"></div>

		<div class="footer-body">
			<div class="content">
				<div class="about">
					<h3>MATHWORLD</h3>
					<p>
						In MathWorld, we believe that every individual, regardless of age,
						race and gender is gifted with an inherent talent to understand
						mathematical ideas. With this belief as the cornerstone, we strive
						to provide a learning environment where individual talents are
						identified and nurtured to its full potential.
					</p>
				</div>
			</div>

			<div class="content">
				<h3>TESTS</h3>
				<a href="/about#section3" class="item">MathWorld Test</a>
				<a href="#" class="item">Scholastic Aptitude Test</a>
				<a href="#" class="item">American College Test</a>
				<a href="#" class="item">Texas Success Initiative</a>
			</div>

			<div class="content">
				<h3>COMPANY</h3>
				<a href="#" class="item">Home</a>
				<a href="#" class="item">About</a>
				<a href="#" class="item">Courses</a>
			</div>

			<div class="content">
				<h3>FOLLOW US</h3>
				<div class="social-links">
					<a href="#" class="social-item">
						<v-icon color="white"> mdi-facebook </v-icon>
					</a>
					<a href="#" class="social-item">
						<v-icon color="white"> mdi-twitter </v-icon>
					</a>
					<a href="#" class="social-item">
						<v-icon color="white"> mdi-instagram </v-icon>
					</a>
				</div>
			</div>
		</div>
		<div class="footer-bottom">
			<div>&copy; 2022 by MathWorld. All rights reserved.</div>
		</div>
	</footer>
</template>

<style scoped>
footer {
	background-color: #003754;
	background-image: url("https://demo.themewinter.com/html/exhibz/classic/images/bg/footer_bg.png");
	background-repeat: no-repeat;
	background-size: cover;
}

a {
	text-decoration: none;
	list-style: none;
	text-transform: initial;
}

footer {
	max-width: 100%;
}

footer .footer-head {
	overflow: hidden;
	padding: 10px 70px 10px 70px;
}

footer .footer-body {
	display: grid;
	grid-template-columns: 2fr 1fr 1fr 1fr;
	gap: 100px;
	padding: 50px 70px 50px 70px;
}

footer .footer-body .content {
	width: 100%;
	color: #ffff;
	text-align: left;
}

footer .footer-body .content h3 {
	margin-bottom: 20px;
	color: #ffff;
}

footer .footer-body .content .about {
	text-align: justify;
	text-justify: inter-word;
}

footer .footer-body .content .about p {
	color: #ffff;
}

footer .footer-body .content .item {
	display: block;
	color: #ffff;
	margin-top: 5px;
}

footer .footer-body .content .item:hover {
	color: #00a6ff;
	opacity: 100%;
}

footer .footer-bottom {
	width: 100%;
	padding: 10px 70px 10px 70px;
	background-color: #002133;
	text-align: center;
}

footer .footer-bottom div {
	padding: 20px;
	color: white;
}

.social-links {
	display: flex;
	justify-content: space-between;
}

.social-links .social-item {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #002a41;
}

.social-links .social-item .v-icon {
	width: 100%;
	height: 100%;
	margin: auto;
}

.social-item:hover {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #137db6;

	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
