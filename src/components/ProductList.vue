<template>
	<div>
		<h2 class="title">
			{{ $t('components.productList.title') }}
		</h2>

		<p
			class="description"
			v-html="$t('components.productList.description')"
		/>

		<ul class="products">
			<Product
				v-for="product in products"
				:key="product.id"
				:product="product"
			/>
		</ul>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';

	import Product from '@/components/Product.vue';

	export default Vue.extend({
		name: 'ProductList',
		components: {
			Product
		},
		props: {
			products: {
				type: [Object, Array],
				required: true
			}
		}
	});
</script>

<style lang="scss" scoped>
	.title {
		font-size: 1.75rem;
	}

	.description {
		margin-top: 15px;
		font-size: 1.1rem;
	}

	.products {
		display: grid;
		grid-gap: 32px;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-auto-rows: minmax(250px, auto);
		margin-top: 50px;
	}

	@media only screen and (max-width: 600px) {
		.products {
			margin-top: 25px;
		}
	}
</style>
