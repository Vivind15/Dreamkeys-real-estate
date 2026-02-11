document.addEventListener("DOMContentLoaded", function() {

    const searchInput = document.getElementById("search");
    const properties = document.querySelectorAll(".property");

    searchInput.addEventListener("input", function() {
        let value = this.value.toLowerCase();

        properties.forEach(function(property) {
            let city = property.getAttribute("data-city").toLowerCase();

            if (city.includes(value)) {
                property.style.display = "block";
            } else {
                property.style.display = "none";
            }
        });
    }); 
});
const toggleButton = document.getElementById("darkToggle");

toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️";
    } else {
        toggleButton.textContent = "🌙";
    }
});
function showCategory(categoryId) {

    const categories = document.querySelectorAll(".property-category");

    categories.forEach(function(category) {
        category.style.display = "none";
    });

    document.getElementById(categoryId).style.display = "flex";
}
