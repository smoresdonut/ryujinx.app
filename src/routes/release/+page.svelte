<script lang="js">
    import { onMount } from 'svelte';

// Function to detect the OS
function getOperatingSystem() {
  const platform = navigator.userAgent.toLowerCase();
  if (platform.includes('win')) {
    return 'windows';
  } else if (platform.includes('mac')) {
    return 'mac';
  } else if (platform.includes('linux')) {
    return 'linux';
  } else if (platform.includes('ARM64')) {
    return 'arm64';
  }
  return 'unknown';
}

// Trigger the file download based on the OS
onMount(() => {
    const os = getOperatingSystem();
    let downloadLink = "";

    switch (os) {
      case 'windows':
        downloadLink = "https://github.com/GreemDev/Ryujinx/releases/download/1.2.72/ryujinx-1.2.72-win_x64.zip";
        break;
      case 'mac':
        downloadLink = "https://github.com/GreemDev/Ryujinx/releases/download/1.2.72/ryujinx-1.2.72-macos_universal.app.tar.gz";
        break;
      case 'linux':
        downloadLink = "https://github.com/GreemDev/Ryujinx/releases/download/1.2.72/ryujinx-1.2.72-linux_x64.tar.gz";
        break;
      case 'arm64':
        downloadLink = "https://github.com/GreemDev/Ryujinx/releases/download/1.2.72/ryujinx-1.2.72-linux_arm64.tar.gz";
        break;
    }

     // Trigger the download by setting the window location to the file URL
     window.location.href = downloadLink;
  });
</script>