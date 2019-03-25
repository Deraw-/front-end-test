<template>
	<section class="page">
		<h2 class="title">
			Your Cart
		</h2>

		<!-- Empty cart -->
		<template v-if="!cartProducts.length">
			<p class="description">
				Your cart is empty!
			</p>

			<RouterLink
				class="btn primary"
				:to="{ name: 'home' }"
			>
				Browse products
			</RouterLink>
		</template>

		<template v-else>
			<CartList :products="cartProducts" />

			<div class="total">
				Total ({{ cartProducts.length }} items): <span class="price">{{ total | euros }}</span>
			</div>
		</template>
	</section>
</template>

<script lang="ts">
	import Vue, { VueConstructor } from 'vue';
	import { mapGetters } from 'vuex';
	import VuexBindings, { CartProduct } from '@/store/types';

	import CartList from '@/components/CartList.vue';

	export default (Vue as VueConstructor<Vue & VuexBindings>).extend({
		name: 'Cart',
		components: {
			CartList
		},
		computed: {
			...mapGetters('cart', ['cartProducts']),
			total(): number {
				return this.cartProducts.reduce((total: number, p: CartProduct) => {
					return total + p.price * p.quantity;
				}, 0);
			}
		}
	});
</script>

<style lang="scss" scoped>
	.total {
		margin-top: 15px;

		font-weight: 700;
	}

	.price {
		color: #008393;
	}
</style>
