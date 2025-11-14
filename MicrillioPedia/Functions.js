// MicrillioPedia simple search engine
document.addEventListener("DOMContentLoaded", function() {
    const searchBtn = document.getElementById("search-btn");
    const searchInput = document.getElementById("wiki-search");
    const resultsDiv = document.getElementById("search-results");

    // List of pages in your wiki
    const pages = [
        {name: "Dirtforms", path: "MicrillioPedia/Dirtforms.html"},
        // Add more pages as your wiki grows
    ];

    searchBtn.addEventListener("click", function() {
        const query = searchInput.value.toLowerCase().trim();
        resultsDiv.innerHTML = "";

        if (query === "") {
            resultsDiv.innerHTML = "<p>Please enter a search term.</p>";
            return;
        }

        const matched = pages.filter(page => page.name.toLowerCase().includes(query));

        if (matched.length > 0) {
            matched.forEach(page => {
                const link = document.createElement("a");
                link.href = page.path;
                link.textContent = page.name;
                link.style.display = "block";
                link.style.color = "#63b8ff";
                link.style.marginBottom = "5px";
                resultsDiv.appendChild(link);
            });
        } else {
            resultsDiv.innerHTML = "<p>No results found.</p>";
        }
    });

    // Optional: Enter key triggers search
    searchInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            searchBtn.click();
        }
    });
});
