export async function GET() {
    return new Response(
        JSON.stringify({
            canary: "Ryubing/Canary-Releases",
            stable: "Ryubing/Stable-Releases"
        }),
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
}