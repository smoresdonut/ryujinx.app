<script lang="js">
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
      if (name.endsWith('.zip') && platform.includes('win')) {
        return true;
      } else if (name.endsWith('tar.gz') && platform.includes('macos')) {
        return true;
      } else if (name.endsWith('.tar.gz') && platform.includes('linux')) {
        return true; 
      } else if (name.endsWith('.tar.gz') && platform.includes('arm64')) {
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

<main class="flex items-center justify-center min-h-screen">
  <h2 class="text-2xl text-white font-semibold">Downloading the latest release for your operating system</h2>
</main>