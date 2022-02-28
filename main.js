const searchInput = document.querySelector("#search-input")

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&oq=&aqs=chrome.1.35i39i362l7j69i59i450.351316274j0j15&sourceid=chrome&ie=UTF-8"
}