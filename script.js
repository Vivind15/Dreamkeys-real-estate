document.getElementById("search").addEventListener("keyup", function() {
    let value = this.value.toLowerCase();
    let properties = document.querySelectorAll(".property");

    properties.forEach(function(property) {
        let city = property.getAttribute("data-city").toLowerCase();
        if (city.includes(value)) {
            property.style.display = "inline-block";
        } else {
            property.style.display = "none";
        }
    });
});
