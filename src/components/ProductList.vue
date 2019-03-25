<template>
	<div>
		<h2 class="title">
			{{ $t('components.productList.title') }}
		</h2>

		<p
			class="description"
			v-html="$t('components.productList.description')"
		/>

		<ul class="grid-list">
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
