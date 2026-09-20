const courseContent = []
const filterOptions = []
const sortOptions = []
const searchResults = []

function createEl(tag, attrs, text) { }
function addOption(select, value, text) {
    const option = document.createElement("option");

    option.value = value;
    option.textContent = text;

    select.appendChild(option);
}
function updateSortOptions() {
    const filterBy = document.getElementById("#filter-by");
    const sortBy = document.getElementById("#sort-by");

    sortBy.innerHTML = "";

    switch (filterBy.value) {

        case "date":
            addOption(sortBy, "newest", "Newest");
            addOption(sortBy, "oldest", "Oldest");
            break;

        case "name":
            addOption(sortBy, "a-z", "A-Z");
            addOption(sortBy, "z-a", "Z-A");
            break;

        case "score":
            addOption(sortBy, "lowest", "Lowest");
            addOption(sortBy, "highest", "Highest");
            break;

        case "due-date":
            addOption(sortBy, "overdue", "Overdue");
            addOption(sortBy, "soonest", "Soonest");
            addOption(sortBy, "latest", "Latest");
            break;

        case "status":
            addOption(sortBy, "current", "in progress");
            addOption(sortBy, "pending", "pending");
            addOption(sortBy, "complete", "complete");
            break;

        case "course":
            addOption(sortBy, "a-z", "A-Z");
            addOption(sortBy, "z-a", "Z-A");
            break;
    }
}
function handleSearch(event) {
    event.preventDefault()
}
function setupSearchListeners() {
    const searchButton = document.getElementById("#search-button");
    const clearButton = document.getElementById("#clear-button");
    const filterBy = document.getElementById("#filter-by");

    searchButton.addEventListener("submit", handleSearch);
    clearButton.addEventListener("click", handleSearch);
    filterBy.addEventListener("change", updateSortOptions);
}
function bootSystem() {
    updateSortOptions();
    setupSearchListeners();
}

document.addEventListener("DOMContentLoaded", bootSystem);