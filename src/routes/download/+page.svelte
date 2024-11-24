<script lang="ts">
import Footer from '$lib/components/footer/Footer.svelte'
import { onMount } from 'svelte';

async function LatestRelease() {
  const repoOwner = "Greemdev";
  const repoName = "Ryujinx";
  const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/releases/latest`;

try {
 const response = await fetch(apiUrl);
 const releaseData = await response.json();
 const platform = navigator.userAgent.toLowerCase();

 const downloadLink = releaseData.assets.find(asset => {
   const name = asset.name.toLowerCase();
      // Windows
      if (platform.includes('win') && name.endsWith('win_x64.zip')) {
       return true;
      // MacOS
     } else if (platform.includes('mac') && name.includes('macos_universal') && name.endsWith('.tar.gz')) {
       return true;
      // Linux
     } else if (platform.includes('linux') && !platform.includes('arm64') && name.includes('linux_x64') && name.endsWith('.tar.gz')) {
       return true;
      // ARM64
     } else if (platform.includes('linux') && platform.includes('arm64') && name.includes('linux_arm64') && name.endsWith('.tar.gz')) {
       return true;
      // Steamdeck
     } else if (platform.includes('steamdeck') && name.includes('linux_x64') && name.endsWith('.tar.gz')) {
      return true;
     }
     return false;
     })?.browser_download_url;

   return downloadLink;
   } catch (error) {
     console.error("Error fetching the latest release data:", error);
     return null;
   }
 }

onMount(async () => {
const downloadLink = await LatestRelease();

if (downloadLink) {
 window.location.href = downloadLink;
} else {
 console.log("No matching download link found");
}
});
</script>
    <svelte:head>
        <title>Ryujinx - Nintendo Switch Emulator</title>
        <link rel="icon" href="/ryugay.webp">
        <meta name="description" content="Ryujinx is an open-source Nintendo Switch Emulator created by gdkchan and written in C#." />
        <meta name="viewport-fit=cover, width=device-width, height=device-height, initial-scale=1">
    </svelte:head>
<body>
    <div class="app">
        <header class="flex bg-[#000913] items-center">
            <div class="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto pt-8 pb-8 px-4 lg:px-10">
                <a class="logo inline-flex items-center space-x-2 font-bold text-xl tracking-wide text-white" href="/">
                    <img class="inline-block w-7 h-7" src="/ryugay.webp" alt="logo">
                    <span class="">Ryujinx</span>
                </a>
                <div class="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10">
                    <nav class="space-x-4 md:space-x-6">
                        <a class="font-semibold text-gray-300 hover:text-white" href="/download">
                        <span>Download</span>
                        </a>
                        <a class="font-semibold text-gray-300 hover:text-white" href="https://ldn.ryujinx.app">
                        <span>LDN</span>
                        </a>
                        <a class="font-semibold text-gray-300 hover:text-white" href="https://wiki.ryujinx.app">
                        <span>Wiki</span>
                        </a>
                        <a class="font-semibold text-gray-300 hover:text-white" href="https://wiki.ryujinx.app/faq">
                        <span>FAQ</span>
                        </a>
                        <a class="font-semibold text-gray-300 hover:text-white" href="https://wiki.ryujinx.app/compatibility">
                        <span>Compatibility</span>
                        </a>
                    </nav>
                    <div class="flex items-center justify-center space-x-3">
                        <a class="text-gray-400 hover:text-white" href="https://bsky.app/profile/ryujinx.app" target="_blank">
                            <svg class="inline-block w-5 h-5" fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M407.8 294.7c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3C61.6-9.4 37.5-1.7 21.6 5.5C3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7c3.3-.5 6.6-.9 10-1.4c-3.3
                            .5-6.6 1-10 1.4C74.3 308.6-9.1 342.8 100.3 464.5C220.6 589.1 265.1 437.8 288 361.1c22.9 76.7 49.2 222.5 185.6 103.4c102.4-103.4 28.1-156-65.8-169.9c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3c64.1 7.1 133.6-15.1 153.2-80.7C566.9 194 576 75 576
                            58.4s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8C385.1 81.9 314.1 176.4 288 227.1z"></path></svg></a>
                        <a class="text-gray-400 hover:text-white" href="https://github.com/GreemDev/Ryujinx" target="_blank">
                        <svg class="inline-block w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304
                        3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653
                        1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path></svg></a>
                        <a class="text-gray-400 hover:text-white" href="https://discord.gg/xNW747aN7S" target="_blank">
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
            <div class="grow bg-gray-100 h-[44rem]">
                <div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 space-y-16">
                    <div class="text-center">
                        <h2 class="text-2xl md:text-3xl font-extrabold mb-4">Downloading the latest release for your operating system</h2>
                    </div>
                </div>
            </div>
    <Footer></Footer> 
</body>
