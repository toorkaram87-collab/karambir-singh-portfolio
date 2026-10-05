console.log("Karambir Singh Portfolio Loaded Successfully");

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.querySelectorAll(".nav-links a").forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });

});