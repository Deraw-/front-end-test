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

			<template v-if="getProductQuantity(product.id)">
				<button
					class="round-btn outline"
					:aria-label="$t('components.product.removeBtn', [product.name])"
					@click="removeFromCart(product)"
				>
					<MinusIcon />
				</button>

				<span class="quantity">
					<span class="sr-only">
						{{ $t('components.product.quantity') }}
					</span>

					{{ getProductQuantity(product.id) }}
				</span>
			</template>

			<button
				class="round-btn"
				:aria-label="$t('components.product.addBtn', [product.name])"
				@click="addToCart(product)"
			>
				<PlusIcon />
			</button>
		</div>
	</li>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { mapActions, mapGetters, mapState } from 'vuex';

	import MinusIcon from 'vue-material-design-icons/Minus.vue';
	import PlusIcon from 'vue-material-design-icons/Plus.vue';

	export default Vue.extend({
		name: 'Poduct',
		components: {
			MinusIcon,
			PlusIcon
		},
		props: {
			product: {
				type: [Object, Array],
				required: true
			}
		},
		computed: {
			...mapState('cart', ['added'])
		},
		methods: {
			...mapActions('cart', ['addToCart', 'removeFromCart']),
			getProductQuantity(id: number) {
				const product = this.added.find((p: any) => p.id === id);
				const quantity = product ? product.quantity : 0;

				return quantity;
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

		.quantity {
			margin: 0 10px;
		}
	}

	.round-btn {
		width: 35px;
		height: 35px;

		font-size: 1.25rem;

		border-radius: 50%;
		border: 1px solid transparent;

		color: #fff;
		background: #008393;

		&:hover,
		&:focus {
			background: rgb(2, 152, 172);
		}

		&.outline {
			background: transparent;
			border-color: currentColor;
			color: #008393;

			&:hover,
			&:focus {
				background: rgba(2, 152, 172, .1);
			}
		}
	}
</style>
