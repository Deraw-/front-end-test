<template>
	<RouterLink
		:to="{ name: 'cart' }"
		class="btn shadow"
		:aria-label="$t('components.cartLink.label', [count])"
	>
		<CartIcon />

		<span class="sup">
			{{ count }}
		</span>
	</RouterLink>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { mapGetters } from 'vuex';

	import CartIcon from 'vue-material-design-icons/Cart.vue';

	export default Vue.extend({
		name: 'CartLink',
		components: {
			CartIcon
		},
		computed: {
			...mapGetters('cart', ['count'])
		}
	});
</script>

<style lang="scss" scoped>
	.btn {
		width: 50px;
		height: 50px;

		padding: 5px 15px;
		border-radius: 50%;

		background: #3a0f05;
		text-decoration: none;

		position: relative;

		&:hover,
		&:focus {
			background: #592727;
		}

		/deep/ .cart-icon {
			&,
			svg {
				width: 2rem;
				height: 2rem;
			}
		}
	}

	.sup {
		top: 4px;
		right: 10px;
		font-size: .85rem;
		position: absolute;
	}
</style>
