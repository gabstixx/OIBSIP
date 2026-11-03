const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");
const errorMessage = document.getElementById("errorMessage");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

convertBtn.addEventListener("click", convertTemperature);

function convertTemperature() {
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    errorMessage.textContent = "";

    if (temperatureInput.value.trim() === "" || !Number.isFinite(temperature)) {
        errorMessage.textContent = "Please enter a valid temperature.";
        return;
    }

    let celsius;

    // Convert the input to Celsius first.
    if (unit === "Celsius") {
        celsius = temperature;
    } else if (unit === "Fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    } else {
        celsius = temperature - 273.15;
    }

    // Check whether the temperature is below absolute zero.
    if (celsius < -273.15) {
        errorMessage.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    // Convert Celsius into the other units.
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    // Display all three results.
    celsiusResult.textContent = `${celsius.toFixed(2)} °C`;
    fahrenheitResult.textContent = `${fahrenheit.toFixed(2)} °F`;
    kelvinResult.textContent = `${kelvin.toFixed(2)} K`;
}