

// Register PWA Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js")
            .then(() => {
                console.log("PWA is ready!");
            })
            .catch((error) => {
                console.log("PWA registration failed:", error);
            });
    });
}

// ===== SMART PORTFOLIO SEARCH =====

document.addEventListener("DOMContentLoaded", () => {

    const openBtn = document.getElementById("openSearch");
    const closeBtn = document.getElementById("closeSearch");
    const overlay = document.getElementById("searchOverlay");
    const searchInput = document.getElementById("portfolioSearch");
    const resultsBox = document.getElementById("searchResults");

    if (!openBtn || !closeBtn || !overlay || !searchInput || !resultsBox) {
        console.error("Search HTML elements not found!");
        return;
    }

    // Open search
    function openSearch() {
        overlay.classList.add("active");
        searchInput.focus();
    }

    // Close search
    function closeSearch() {
        overlay.classList.remove("active");
        searchInput.value = "";
        resultsBox.innerHTML = "<p>Start typing to search...</p>";
    }

    openBtn.addEventListener("click", openSearch);
    closeBtn.addEventListener("click", closeSearch);

    // Close when clicking outside
    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            closeSearch();
        }
    });

    // Keyboard shortcuts
    document.addEventListener("keydown", (event) => {

        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
            event.preventDefault();
            openSearch();
        }

        if (event.key === "Escape") {
            closeSearch();
        }
    });

    // Search portfolio sections
    searchInput.addEventListener("input", () => {

        const query = searchInput.value.trim().toLowerCase();

        resultsBox.innerHTML = "";

        if (!query) {
            resultsBox.innerHTML = "<p>Start typing to search...</p>";
            return;
        }

        const sections = document.querySelectorAll("section[id]");
        let found = 0;

        sections.forEach((section) => {

            const text = section.innerText.toLowerCase();

            if (text.includes(query)) {

                found++;

                const heading = section.querySelector("h1, h2, h3");
                const title = heading
                    ? heading.innerText
                    : section.id;

                const result = document.createElement("div");
                result.className = "search-result";

                const strong = document.createElement("strong");
                strong.textContent = title;

                const small = document.createElement("small");
                small.textContent = "Found in this section";

                result.appendChild(strong);
                result.appendChild(small);

                result.addEventListener("click", () => {
                    closeSearch();
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                });

                resultsBox.appendChild(result);
            }
        });
        const linkText = (
    (link.innerText || "") + " " +
    link.href + " " +
    link.getAttribute("href")
).toLowerCase();

        if (found === 0) {
            resultsBox.innerHTML = "<p>No results found. Try another keyword.</p>";
        }

    });

});

