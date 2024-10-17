<svelte:head>
	<title>Ryujinx - Nintendo Switch Emulator</title>
    <link rel="/favicon.png">
	<meta name="description" content="Ryujinx is an open-source Nintendo Switch Emulator created by gdkchan and written in C#." />
	<meta name="viewport-fit=cover, width=device-width, height=device-height, initial-scale=1">
</svelte:head>
<body>
	<div id="app">
		<div id="content" class="flex flex-auto flex-col max-w-full bg-gray-800">
			<header class="flex flex-none items-center py-10">
				<div id="wrapper" class="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-10">
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
					<h1 class="text-center md:text-7xl text-white font-extrabold mb-6">Ryujinx</h1>
					<h2 class="md:text-2xl font-semibold mb-2 text-white">
						A simple, experimental
						<span class="text-red-500">Nintendo Switch</span>
						emulator
					</h2>
					<h2 class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-400 lg:w-2/3 mx-auto">
					Ryujinx is an open-source Nintendo Switch emulator created by
					<span class="text-red-50">gdkchan</span>
					and written in C#. This emulator aims at providing execellent accuracy and performance, a user-friendly interface, and consistent builds.
					</h2>
					<div class=""></div>
				</div>
		</div>
	</div>
</body>

<style>
	#app {
		font-family: var(--font-inter);
		box-sizing: border-box;
	}
</style>