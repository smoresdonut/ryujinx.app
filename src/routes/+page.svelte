<svelte:head>
	<title>Ryujinx</title>
    <link rel="./static/favicon.png">
	<meta name="description" content="Ryujinx is an open-source Nintendo Switch Emulator created by gdkchan and written in C#." />
	<meta name="viewport-fit=cover, width=device-width, height=device-height, initial-scale=1">
</svelte:head>
<body>
	<div id="app">
		<div id="content">
			<header id="header"></header>
			<div id="header-content">
				<div id="title">Ryujinx</div>
			</div>
		</div>
	</div>
</body>

<style>
	#app {
		background-color: #1b1b1f;
		font-family: var(--font-inter);
	}
	#header-content #title {
		font-size: 6rem;
		font-weight: 800;
		color: #fff;
	}
	#header {
		padding-top: 2.5rem;
	}
</style>