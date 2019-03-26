<template>
	<ul class="cart-list">
		<li
			v-for="product in products"
			:key="product.id"
		>
			<div class="product-infos">
				<img
					:src="`/api/img/${product.image}`"
					alt=""
					class="image"
				>

				<div class="name">
					{{ product.name }}

					<button
						class="btn primary"
						@click="deleteFromCart(product)"
					>
						{{ $t('components.cartList.deleteBtn') }}
					</button>
				</div>
			</div>

			<UpdateCartBtn
				:product="product"
				class="cart-btn"
			/>

			<div class="price">
				{{ product.price | euros }}
			</div>
		</li>
	</ul>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { mapActions } from 'vuex';

	import UpdateCartBtn from '@/components/UpdateCartBtn.vue';

	export default Vue.extend({
		name: 'CartList',
		components: {
			UpdateCartBtn
		},
		props: {
			products: {
				type: [Object, Array],
				required: true
			}
		},
		methods: {
			...mapActions('cart', ['deleteFromCart'])
		}
	});
</script>

<style lang="scss" scoped>
	.cart-list {
		margin-top: 25px;

		li {
			display: flex;
			flex-wrap: wrap;
			align-items: center;

			padding: 15px 20px;

			border-top: 2px solid #f5f5f5;

			&:nth-child(even) {
				background: #f5f5f5;
			}

			> div {
				width: calc(100% / 3);
			}
		}
	}

	.product-infos {
		display: flex;
		flex-wrap: wrap;
	}

	.image {
		width: 50px;
		height: 50px;
		margin-right: 15px;

		border-radius: 50%;
		object-fit: cover;
	}

	.name {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.cart-btn {
		text-align: center;
	}

	.price {
		font-weight: 700;
		color: #007c8b;

		text-align: right;
	}

	.btn {
		margin: 0;
		padding: 0;
		margin-top: 5px;

		background: transparent;

		&:hover,
		&:focus {
			color: #333;
			background: transparent;
		}
	}

	@media screen and (max-width: 700px) {
		.cart-list li {
			display: block;

			> div {
				text-align: left;

				+ div {
					margin-top: 15px;
				}
			}
		}
	}
</style>
