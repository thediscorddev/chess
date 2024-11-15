async function checklogin() {
    const url = new URL("http://localhost:3000/getaccountinfo");

    try {
        const response = await fetch(url, { method: "GET" });
        const data = await response.json();
        return data.status === 200; // Return the result of the check
    } catch (error) {
        console.error("Error during fetch:", error);
        return false; // Handle errors gracefully
    }
}