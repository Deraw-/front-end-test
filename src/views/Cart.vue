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

			<div class="suggestion">
				<h2 class="title">
					You might also like…
				</h2>

				<ul
					v-if="suggestion"
					class="grid-list"
				>
					<Product
						v-for="product in suggestion"
						:key="product.id"
						:product="product"
					/>
				</ul>
			</div>
		</template>
	</section>
</template>

<script lang="ts">
	import Vue, { VueConstructor } from 'vue';
	import { mapGetters, mapState } from 'vuex';
	import VuexBindings, { CartProduct, ProductType } from '@/store/types';

	import CartList from '@/components/CartList.vue';
	import Product from '@/components/Product.vue';

	export default (Vue as VueConstructor<Vue & VuexBindings>).extend({
		name: 'Cart',
		components: {
			CartList,
			Product
		},
		computed: {
			...mapState('products', ['all']),
			...mapState('cart', ['added']),
			...mapGetters('cart', ['cartProducts']),
			total(): number {
				return this.cartProducts.reduce((total: number, p: CartProduct) => {
					return total + p.price * p.quantity;
				}, 0);
			},
			suggestion() {
				// Filter to not suggest products already in cart
				const suggestion: ProductType[] = this.all.filter((obj: ProductType) => {
					const added = this.added.find((addedObj: ProductType) => obj.id === addedObj.id);

					return !added;
				});

				// Only 4 suggestions
				return suggestion.slice(0, 4);
			}
		}
	});
</script>

<style lang="scss" scoped>
	.total {
		margin-top: 15px;
		margin-right: 20px;

		font-weight: 700;
		text-align: right;
	}

	.price {
		color: #008393;
	}

	.suggestion {
		margin-top: auto;
	}
</style>
