function languageHandler()
{
    const url = new URL("http://localhost:3000/language");
    try {
        fetch(url, { method: "GET" }).then(respone => {
            respone.json().then(data => {
                const urls = new URL("http://localhost:3000/language/" + data.message + ".json");
                fetch(urls, {method: "GET"}).then(respone_ => {
                    respone_.json().then(data_ => {
                        document.querySelectorAll("clanguage").forEach(el => {
                            const id = el.getAttribute("id");
                            const replaceContext = data_[id] || "<Missing " + id + ">";
                            el.replaceWith(replaceContext);
                        })
                    })
                })
            })
        });
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}
window.onload = languageHandler;