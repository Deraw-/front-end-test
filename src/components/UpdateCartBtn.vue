<template>
	<div>
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
</template>

<script lang="ts">
	import Vue from 'vue';
	import { mapActions, mapGetters, mapState } from 'vuex';

	import MinusIcon from 'icons/Minus.vue';
	import PlusIcon from 'icons/Plus.vue';

	export default Vue.extend({
		name: 'UpdateCartBtn',
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

	.quantity {
		margin: 0 10px;
	}
</style>
