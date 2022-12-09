<template>
	<v-card>
		<v-card-title>
			<span>Subject Details</span>
		</v-card-title>
		<v-card-text>
			<div class="content-body">
				<div class="content-item">
					<div class="item">Class Code</div>
					<div class="item-value">8RT1</div>
				</div>
				<div class="content-item">
					<div class="item">Total Students</div>
					<div class="item-value">10</div>
				</div>
			</div>
		</v-card-text>
	</v-card>
</template>

<style scoped>
span {
	font-size: 0.9em;
}

.content-body {
	display: flex;
	flex-direction: column;
	row-gap: 10px;
}

.content-body .content-item {
	display: flex;
	justify-content: space-between;
}
</style>
