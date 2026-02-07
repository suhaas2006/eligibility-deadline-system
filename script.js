const scholarshipCheckbox = document.getElementById("scholarship");
const incomeBox = document.getElementById("incomeBox");

scholarshipCheckbox.addEventListener("change", function () {
    if (this.checked) {
        incomeBox.style.display = "block";
    } else {
        incomeBox.style.display = "none";
    }
});
