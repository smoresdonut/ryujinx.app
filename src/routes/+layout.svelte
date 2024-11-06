<script lang="ts">
import "../app.css";
</script>

<svelte:head>
	<meta name="description" content="">
	<meta property="og:description" content="">
</svelte:head>
<slot></slot>
<style>
    :global(:root) {
        background-color: #070707;
        --font-sans: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
        --font-serif: Georgia,Times,serif;
        --font-mono: Menlo,Courier,monospace;
        --font-inter: Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
        --max-width: 1440px;
    }
</style>