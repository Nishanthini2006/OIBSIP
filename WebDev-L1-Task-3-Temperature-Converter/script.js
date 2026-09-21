// ================================
// TEMPERATURE CONVERTER
// ================================

const form = document.getElementById("converterForm");

const temperatureInput =
    document.getElementById("temperature");

const unitSelect =
    document.getElementById("unit");

const inputError =
    document.getElementById("inputError");

const resultBox =
    document.getElementById("result");

const celsiusResult =
    document.getElementById("celsiusResult");

const fahrenheitResult =
    document.getElementById("fahrenheitResult");

const kelvinResult =
    document.getElementById("kelvinResult");


// ================================
// FORM SUBMIT
// ================================

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Clear previous error
    inputError.textContent = "";

    // Get input value
    const value = parseFloat(
        temperatureInput.value
    );

    const unit = unitSelect.value;


    // ============================
    // VALIDATE EMPTY INPUT
    // ============================

    if (temperatureInput.value.trim() === "") {

        inputError.textContent =
            "Please enter a temperature value.";

        resultBox.classList.add("hidden");

        temperatureInput.focus();

        return;
    }


    // ============================
    // VALIDATE NUMBER
    // ============================

    if (Number.isNaN(value)) {

        inputError.textContent =
            "Please enter a valid number.";

        resultBox.classList.add("hidden");

        return;
    }


    // ============================
    // CONVERT TO CELSIUS
    // ============================

    let celsius;

    if (unit === "celsius") {

        celsius = value;

    } else if (unit === "fahrenheit") {

        celsius = (value - 32) * 5 / 9;

    } else if (unit === "kelvin") {

        celsius = value - 273.15;
    }


    // ============================
    // ABSOLUTE ZERO VALIDATION
    // ============================

    if (celsius < -273.15) {

        inputError.textContent =
            "Temperature cannot be below absolute zero.";

        resultBox.classList.add("hidden");

        return;
    }


    // ============================
    // CONVERT ALL UNITS
    // ============================

    const fahrenheit =
        (celsius * 9 / 5) + 32;

    const kelvin =
        celsius + 273.15;


    // ============================
    // DISPLAY RESULTS
    // ============================

    celsiusResult.textContent =
        `${formatNumber(celsius)} °C`;

    fahrenheitResult.textContent =
        `${formatNumber(fahrenheit)} °F`;

    kelvinResult.textContent =
        `${formatNumber(kelvin)} K`;


    resultBox.classList.remove("hidden");

});


// ================================
// FORMAT RESULT
// ================================

function formatNumber(number) {

    return Number(
        number.toFixed(2)
    ).toString();
}