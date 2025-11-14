/* ============================
   MicrillioPedia Search System
   ============================ */

/* Database of searchable pages */
const wikiPages = {
    "dirtforms": "Dirtforms.html",
    "example": "Example.html",
    "example2": "Example2.html"
};

/* Search function */
function startSearch() {
    const input = document.getElementById("searchBar").value.toLowerCase().trim();

    if (input === "") {
        alert("Type a page name to search.");
        return;
    }

    // Direct match
    if (wikiPages[input]) {
        window.location.href = wikiPages[input];
        return;
    }

    // Partial match search
    const possible = Object.keys(wikiPages).filter(key => key.includes(input));

    if (possible.length === 1) {
        window.location.href = wikiPages[possible[0]];
        return;
    }

    if (possible.length > 1) {
        alert(
            "Did you mean:\n• " +
            possible.join("\n• ")
        );
        return;
    }

    alert("Page not found in MicrillioPedia.");
}

/* Allow pressing Enter to search */
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        startSearch();
    }
});
