document.getElementById("showMore").addEventListener("click", function() {
    const moreContent = document.getElementById("moreContent");
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        this.textContent = "Mostrar Menos";
    } else {
        moreContent.style.display = "none";
        this.textContent = "Mostrar Mais";
    }
});