<template>
	<footer
		role="footer"
		class="footer"
	>
		<span v-html="$t('components.footer.copyright')" />

		<img
			width="20px"
			height="20px"
			class="developer"
			:src="$t('components.footer.author.image')"
			alt=""
		>

		<a
			:href="$t('components.footer.author.website')"
			target="_blank"
			rel="noopener noreferrer"
			class="author"
		>
			{{ $t('components.footer.author.name') }}
		</a>
	</footer>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'Footer'
	});
</script>

<style lang="scss" scoped>
	.footer {
		color: #fff;
		background: #23333b;

		display: flex;
		align-items: center;
		justify-content: flex-end;

		padding: 8px 24px;

		box-shadow: 0 10px 10px 10px rgba(0, 0, 0, .2);
	}

	.developer {
		margin-right: 5px;

		border-radius: 50%;
		border: 1px solid #fff;
	}

	.author {
		color: inherit;
		font-weight: 700;
		text-decoration: none;
	}
</style>
