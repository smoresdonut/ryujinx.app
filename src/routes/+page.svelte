<script lang="ts">
	import Footer from '$lib/components/footer/Footer.svelte'
</script>
<svelte:head>
	<title>Ryujinx - Nintendo Switch Emulator</title>
	<link rel="icon" href="/ryugay.webp">
	<meta name="description" content="Ryujinx is an open-source Nintendo Switch Emulator created by gdkchan and written in C#." />
	<meta name="viewport-fit=cover, width=device-width, height=device-height, initial-scale=1">
</svelte:head>
<body>
	<div id="app">
		<div id="content" class="flex flex-auto flex-col pt-10 pb-4 max-w-full bg-gray-900">
			<header class="flex items-center">
				<div class="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-10">
					<a class="logo inline-flex items-center space-x-2 font-bold text-xl tracking-wide text-white" href="/">
						<img class="inline-block w-7 h-7" src="/ryugay.webp" alt="logo">
						<span class="">Ryujinx</span>
					</a>
					<div class="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10">
						<nav class="space-x-4 md:space-x-6">
							<a class="font-semibold text-gray-300 hover:text-white" href="/download">
							<span>Download</span>
							</a>
							<a class="font-semibold text-gray-300 hover:text-white" href="https://ryuldnweb.vudjun.com/">
							<span>LDN</span>
							</a>
							<a class="font-semibold text-gray-300 hover:text-white" href="https://wiki.ryujinx.app">
							<span>Wiki</span>
							</a>
							<a class="font-semibold text-gray-300 hover:text-white" href="https://wiki.ryujinx.app/faq">
							<span>FAQ</span>
							</a>
						</nav>
						<div class="flex items-center justify-center space-x-3">
							<a class="text-gray-300 hover:text-white" href="https://bsky.app/profile/ryujinx.app" target="_blank">
								<svg class="inline-block w-5 h-5" fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
								<path d="M407.8 294.7c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3C61.6-9.4 37.5-1.7 21.6 5.5C3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7c3.3-.5 6.6-.9 10-1.4c-3.3
								.5-6.6 1-10 1.4C74.3 308.6-9.1 342.8 100.3 464.5C220.6 589.1 265.1 437.8 288 361.1c22.9 76.7 49.2 222.5 185.6 103.4c102.4-103.4 28.1-156-65.8-169.9c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3c64.1 7.1 133.6-15.1 153.2-80.7C566.9 194 576 75 576
								58.4s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8C385.1 81.9 314.1 176.4 288 227.1z"></path></svg></a>
							<a class="text-gray-300 hover:text-white" href="https://github.com/Ryubing/Ryujinx" target="_blank">
							<svg class="inline-block w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304
							3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653
							1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path></svg></a>
							<a class="text-gray-300 hover:text-white" href="https://discord.gg/ryujinx" target="_blank">
								<svg class="inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
								<path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213
								9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1
								.015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817
								1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637
								1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path></svg></a>
							</div>
						</div>
					</div>
				</header>
				<div class="text-center container xl:max-w-7xl mx-auto px-4 py-32 lg:px-8 lg:py:32">
					<h1 class="text-center md:text-7xl text-white font-extrabold mb-6">Ryujinx</h1>
					<h2 class="md:text-3xl font-semibold mb-2 text-white">
						A simple, experimental
						<span class="text-red-500">Nintendo Switch</span>
						emulator
					</h2>
					<h3 class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-300 lg:w-2/3 mx-auto">This Fork is intended to be a QoL uplift for existing Ryujinx users <br> This is not a revival project nor a phoenix project </h3>
					<div class="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2 pt-4 pb-16">
						<a class="inline-flex justify-center items-center md:lg:space-x-2 border font-semibold focus:outline-none appearance-none px-3 py-2 leading-6 border-sky-500 bg-sky-500 text-white hover:text-white hover:bg-sky-700 hover:border-sky-700 focus:ring focus:ring-sky-700 focus:ring-opacity-50 active:bg-sky-700 active:border-sky-700 cursor-pointer rounded" href="/download" type="button">
						<!---->
						<span>Get Started</span></a>
						<a class="inline-flex justify-center items-center md:lg:space-x-2 border font-semibold focus:outline-none appearance-none px-3 py-2 leading-6 border-red-500 bg-red-500 text-white hover:text-white hover:bg-red-700 hover:border-red-700 focus:ring focus:ring-red-500 focus:ring-opacity-50 active:bg-red-700 active:border-red-700 cursor-pointer rounded" href="https://discord.gg/ryujinx" type="button">
						<span>Contribute</span>
						</a>
					</div>
				</div>
			</div>
		    <div class="grow bg-gray-100">
			<div class="overflow:hidden">
				<div class="container xl:max-w-7xl mx-auto h-[45rem] px-4 py-16 lg:px-8 lg:py-32">
					<div class="flex flex-col lg:flex-row lg:items-center space-y-12 lg:space-y-0 lg:space-x-20">
						<div class="lg:w-5/12 xl:w-5/12 md:py-12 space-y-10">
						<div>
							<div class="text-sm uppercase font-bold tracking-wider mb-1 text-blue-400">Ryujinx Fork</div>
							<h2 class="text-3xl md:text-4xl font-extrabold mb-4">About the Project</h2>
							<h3 class="text-lg md:text-xl md:leading-relaxed font-semibold text-gray-600">Written from scratch, the Ryujinx project began with a single developer in 2017 and continued on until October 1st 2024, when <span class="text-red-400">gdkchan</span> was forced to abandon the project</h3>
							<h3 class="text-lg md:text-xl md:mt-5 md:leading-relaxed font-semibold text-gray-600">This Fork is intended to be a direct continuation of the project with a competent core team and help from dozens of contributors</h3>
						</div>
						</div>
						<div class="lg:w-7/12 xl:w-7/12 flex-none relative">
							<div class="pattern-dots-xl text-gray-300 absolute top-0 left-0 w-48 h-64 md:mt-20 transform -translate-x-10 -translate-y-10"></div>
							<div class="pattern-dots-xl opacity-10 absolute bottom-0 right-0 w-48 h-64 md:mb-10 transform translate-x-10 translate-y-10"></div>
						<div class="relative flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
							<div class="md:w-1/2 md:mt-24 space-y-6">
							<div class="group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-gray-300">
								<div class="inline-flex items-center justify-center w-10 h-10 m-2 mb-6 relative">
									<div class="absolute inset-0 rounded-3xl -m-2 transform rotate-6 bg-green-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105"></div>
									<div class="absolute inset-0 rounded-2xl transform -rotate-6 bg-green-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105"></div>
									<svg class="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-solid hi-adjustments inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 
									4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 
									6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"></path></svg>
								</div>
								<h4 class="text-lg font-bold mb-2">Open Source</h4>
								<p class="class=leading-relaxed text-gray-600">The source code is available on <a class="text-blue-500" href="https://github.com/Ryubing/Ryujinx">Github</a> under the <a class="text-blue-500" href="https://github.com/Ryubing/Ryujinx/blob/master/LICENSE.txt">MIT license</a>.</p></div>
								<div class="group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-gray-300">
									<div class="inline-flex items-center justify-center w-10 h-10 m-2 mb-6 relative">
										<div class="absolute inset-0 rounded-3xl -m-2 transform rotate-6 bg-red-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105"></div>
										<div class="absolute inset-0 rounded-2xl transform -rotate-6 bg-red-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105"></div>
										<svg class="text-white relative transform transition ease-out duration-200 group-hover:scale-110 inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
										<path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"></path></svg>
								</div>
								<h4 class="text-lg font-bold mb-2">Cross-platform</h4>
								<p class="class=leading-relaxed text-gray-600">Ryujinx is currently available for Windows 10/11, macOS and Linux-based systems.</p></div>
							</div>
							<div class="md:w-1/2 space-y-6">
							<div class="group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-gray-300">
								<div class="inline-flex items-center justify-center w-10 h-10 m-2 mb-6 relative">
									<div class="absolute inset-0 rounded-3xl -m-2 transform rotate-6 bg-teal-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105"></div>
									<div class="absolute inset-0 rounded-2xl transform -rotate-6 bg-teal-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105"></div>
									<svg class="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-solid hi-globe inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path></svg>
								</div>
								<h4 class="text-lg font-bold mb-2">Compatibility</h4>
								<p class="leading-relaxed text-gray-600">Ryujinx has been tested on approximately 4,300 titles, over 4,100 boot past menus and into gameplay, with roughly 3,550 of those being considered playable.</p></div>
							    <div class="group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-gray-300">
								<div class="inline-flex items-center justify-center w-10 h-10 m-2 mb-6 relative">
									<div class="absolute inset-0 rounded-3xl -m-2 transform rotate-6 bg-sky-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105"></div>
									<div class="absolute inset-0 rounded-2xl transform -rotate-6 bg-sky-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105"></div>
									<svg class="text-white relative transform transition ease-out duration-200 group-hover:scale-110 inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
								</div>
								<h4 class="text-lg font-bold mb-2">Support</h4>
								<p class="leading-relaxed text-gray-600">Need help? Join the <a class="text-blue-500" href="https://discord.gg/ryujinx"> Discord</a> to get support as well as talk with fellow switch emulation enthusiasts and developers.</p></div></div></div></div></div></div></div>
								<div class="bg-white">
									<div class="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
										<div class="text-center">
											<h2 class="text-3xl md:text-4xl font-extrabold mb-4">Our team</h2>
											<h3 class="text-lg md:text-xl md:leading-relaxed font-semibold text-gray-600 lg:w-2/3 mx-auto">These developers are working nonstop to continue development of the emulator</h3>
										</div>
										<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 text-center">
											<div class="">
												<span class="inline-block rounded-full bg-white shadow-lg p-2 mb-5">
													<img class="inline-block w-28 h-28 rounded-full" src="https://avatars.githubusercontent.com/u/28578990?v=4" alt="Greemdev">
												</span>
												<h4 class="text-xl font-semibold mb-1">
													<a class="text-blue-400" href="https://github.com/GreemDev">Greemdev</a>
												</h4>
												<p class="text-gray-600 mb-2 font-semibold">Lead Developer</p>
											</div>
											<div>
												<span class="inline-block rounded-full bg-white shadow-lg p-2 mb-5">
													<img class="inline-block w-28 h-28 rounded-full" src="https://avatars.githubusercontent.com/u/69540471?v=4" alt="Smoresdonut">
												</span>
												<h4 class="text-xl font-semibold mb-1">
													<a class="text-blue-400" href="https://github.com/smoresdonut">Smoresdonut</a>
												</h4>
												<p class="text-gray-600 mb-2 font-semibold">Web Designer / Developer</p>
											</div>
											<div>
												<span class="inline-block rounded-full bg-white shadow-lg p-2 mb-5">
													<img class="inline-block w-28 h-28 rounded-full" src="https://avatars.githubusercontent.com/u/1753406?v=4" alt="Smoresdonut">
												</span>
												<h4 class="text-xl font-semibold mb-1">
													<a class="text-blue-400" href="https://github.com/Vudjun">Vudjun</a>
												</h4>
												<p class="text-gray-600 font-semibold">Developer</p>
											</div>
										</div>
									</div>
								</div>
								<div class="bg-gray-100 overflow-hidden">
								<div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:pt-32">
									<div class="text-center mb-16">
										<div class="text-sm uppercase font-bold tracking-wider mb-1 text-blue-400">Support Us</div>
										<h2 class="text-3xl md:text-4xl font-extrabold mb-4">Get In Touch</h2>
										<h3 class="text-lg md:text-xl md:leading-relaxed font-semibold text-gray-600 lg:w-2/3 mx-auto">If you have something you'd like to contribute to the fork, need emulator support or just want to get in touch with the team or contributors, join the <a class="text-blue-500" href="https://discord.gg/ryujinx">Discord</a></h3>
									</div>
									<div class="relative">
										<div class="pattern-dots-md text-gray-300 absolute top-0 right-0 w-32 h-32 transform -translate-y-12 translate-x-12"></div>
										<div class="pattern-dots-md text-gray-300 mb-32 absolute bottom-0 left-0 w-32 h-32 transform translate-y-12 -translate-x-12"></div>
										<div class="grid grid-cols-1 sm:grid-cols-3 text-center rounded-xl shadow-md bg-gray-800 divide-y sm:divide-y-0 sm:divide-x divide-gray-600 overflow-hidden relative">
											<div class="space-y-1 px-5 py-12"> <div class="text-4xl font-extrabold text-blue-400">6,5k+</div> <div class="text-sm text-white uppercase tracking-wide font-bold">Github Stars</div></div>
											<div class="space-y-1 px-5 py-12"> <div class="text-4xl font-extrabold text-blue-400">3,550+</div> <div class="text-sm text-white uppercase tracking-wide font-bold">Playable Games</div></div>
											<div class="space-y-1 px-5 py-12"> <div class="text-4xl font-extrabold text-blue-400">200+</div> <div class="text-sm text-white uppercase tracking-wide font-bold">Github Contributors</div></div>
										</div>
										<div class="flex flex-col md:flex-row-reverse md:justify-between space-y-6 md:space-y-0 text-center md:text-left text-sm lg:text-base container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-16">
										</div>
									</div>
								</div>
							</div>
							<Footer></Footer>
						</div>
					</div>
				</body>

<style>
	#app {
		font-family: var(--font-inter);
	}
</style>