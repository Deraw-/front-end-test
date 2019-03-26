<template>
	<li
		class="product"
	>
		<img
			:src="`/api/img/${product.image}`"
			alt=""
			class="image"
		>

		<div class="product-desc">
			<h3 class="name">
				{{ product.name }}
			</h3>

			<p class="number">
				{{ $tc('components.product.number', product.number) }}
			</p>
		</div>

		<div class="actions">
			<span class="price">
				{{ product.price | euros }}
			</span>

			<UpdateCartBtn
				:product="product"
			/>
		</div>
	</li>
</template>

<script lang="ts">
	import Vue from 'vue';

	import UpdateCartBtn from '@/components/UpdateCartBtn.vue';

	export default Vue.extend({
		name: 'Poduct',
		components: {
			UpdateCartBtn
		},
		props: {
			product: {
				type: [Object, Array],
				required: true
			}
		}
	});
</script>

<style lang="scss" scoped>
	.product {
		width: 100%;
		margin: 0 auto;
		min-width: 250px;

		display: flex;
		flex-direction: column;

		box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, .2);

		.image {
			height: 200px;
			width: 100%;
			object-fit: cover;
		}

		.product-desc {
			padding: 8px 16px;
		}

		.price {
			flex: 1 0 auto;
		}

		.name {
			font-size: 1.2rem;
			margin-bottom: 10px;
		}

		.number {
			font-size: .9rem;
		}
	}

	.actions {
		display: flex;
		align-items: center;
		justify-content: flex-end;

		padding: 8px 16px;
	}
</style>
