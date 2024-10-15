<svelte:head>
	<title>Ryujinx</title>
    <link rel="/favicon.png">
	<meta name="description" content="Ryujinx is an open-source Nintendo Switch Emulator created by gdkchan and written in C#." />
	<meta name="viewport-fit=cover, width=device-width, height=device-height, initial-scale=1">
</svelte:head>
<body>
	<div id="app">
		<div id="content" class="flex flex-auto flex-col max-w-full">
			<header class="flex flex-none items-center py-10">
				<div id="wrapper" class="flex flex-col text-center md:flex-row md:items-center justify-between space-y-6 md:space-y-0 xl:max-w-7xl mx-auto px-4 lg:px-10">
					<a class="logo inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-white" href="/">
						<img class="inline-block" src="/favicon.png" alt="logo">
						<span>Ryujinx</span>
					</a>
					<div class="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10">
						<nav class="space-x-4 md:space-x-6">
							<a class="font-semibold text-gray-300 hover:text-white" href="https://blog.ryujinx.app">
							<span>Blog</span>
							</a>
							<a class="font-semibold text-gray-300 hover:text-white" href="/download">
							<span>Download</span>
							</a>
							<a class="font-semibold text-gray-300 hover:text-white" href="https://github.com/Ryujinxemu/Ryujinx/wiki/Ryujinx-Setup-&-Configuration-Guide">
							<span>Guide</span>
							</a>
							<a class="font-semibold text-gray-300 hover:text-white" href="https://github.com/Ryujinxemu/Ryujinx/wiki/FAQ-and-Troubleshooting">
							<span>FAQ</span>
							</a>
							<a class="font-semibold text-gray-300 hover:text-white" href="/compatibility">
							<span>Compatibility</span>
							</a>
						</nav>
					</div>
				</div>
			</header>
				<div class="text-center container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py:32">
					<h1 class="text-2xl md:text-3xl font-extrabold mb-4 text-white">
						A simple, experimental
						<span class="text-red-500">Nintendo Switch</span>
						emulator
					</h1>
					<h2 class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-400 lg:w-2/3 mx-auto">
					Ryujinx is an open-source Nintendo Switch emualtor created by
					<span class="text-red-50">gdkchan</span>
					</h2>
				</div>
		</div>
	</div>
</body>

<style>
	#app {
		background-color: #1b1b1f;
		font-family: var(--font-inter);
		box-sizing: border-box;
	}
</style>