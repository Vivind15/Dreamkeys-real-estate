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
