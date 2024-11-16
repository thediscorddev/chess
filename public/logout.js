const url = new URL("http://localhost:3000/logout");
(async () => {
    try {
        const response = await fetch(url, { method: "GET" });
        const data = await response.json();
        window.location.href = "/";
    } catch (error) {
        window.location.href = "/";
    }
})();