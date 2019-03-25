<template>
	<div class="home-ctn">
		<section class="banner">
			<h1 class="main-title">
				Pâtisserie
			</h1>

			<img
				src="/img/background.jpg"
				alt=""
			>
		</section>

		<section class="page">
			<ProductList :products="all" />
		</section>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { mapState, mapActions } from 'vuex';

	import ProductList from '@/components/ProductList.vue';

	export default Vue.extend({
		name: 'Home',
		components: {
			ProductList
		},
		computed: {
			...mapState('products', ['all'])
		},
		mounted() {
			this.setAllProducts();
		},
		methods: {
			...mapActions('products', ['setAllProducts'])
		}
	});
</script>

<style lang="scss" scoped>
	.home-ctn {
		width: 100%;
	}

	.banner {
		overflow: hidden;
		position: relative;

		display: flex;
		flex: 1 0 auto;
		align-items: center;
		justify-content: center;

		min-height: 350px;
		height: calc(100vh - 64px - 185px); // viewport - toolbar - gap to see content

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.main-title {
		color: #fff;
		z-index: 1;
		position: absolute;

		margin-top: -25px;

		line-height: 1;
		font-weight: 400;
		font-size: calc(4vw + 2rem);
		font-family: serif;

		text-align: center;
		text-shadow: 0 0 100px black, 0 0 100px black;

		&::after {
			left: 50%;
			width: 50%;
			content: '';
			height: 5px;
			bottom: -1vh;
			background: #fff;
			position: absolute;
			transform: translateX(-50%);
		}
	}

	@media only screen and (max-width: 600px) {
		.banner {
			height: calc(100vh - 64px - 155px);
		}
	}
</style>
