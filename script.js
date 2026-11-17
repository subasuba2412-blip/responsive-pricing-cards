
const monthlyBtn = document.getElementById("monthly");
const yearlyBtn = document.getElementById("yearly");

const prices = document.querySelectorAll(".price");
const units = document.querySelectorAll(".unit");

function setPeriod(period) {

    prices.forEach(function(price) {
        price.textContent = price.dataset[period];
    });

    units.forEach(function(unit) {
        unit.textContent =
            period === "monthly" ? "per month" : "per year";
    });

    monthlyBtn.classList.toggle("active", period === "monthly");
    yearlyBtn.classList.toggle("active", period === "yearly");

    monthlyBtn.setAttribute(
        "aria-pressed",
        String(period === "monthly")
    );

    yearlyBtn.setAttribute(
        "aria-pressed",
        String(period === "yearly")
    );
}

monthlyBtn.addEventListener("click", function() {
    setPeriod("monthly");
});

yearlyBtn.addEventListener("click", function() {
    setPeriod("yearly");
});

setPeriod("monthly");

const planButtons = document.querySelectorAll(".plan-btn");

planButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const planName = button
            .closest(".pricing-card")
            .querySelector("h2").textContent;

        alert("You selected the " + planName + " plan!");
    });
});