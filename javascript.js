function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if (!weight || !height) {
        document.getElementById("bmiValue").innerHTML = "";
        document.getElementById("bmiStatus").innerHTML = "";
        return;
    }

    height = height / 100; // convert cm to meters
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(1);

    document.getElementById("bmiValue").innerHTML = bmi;

    let status = "";
    if (bmi < 18) {
        status = "Underweight";
        document.getElementById("bmiValue").style.color = "orange";
    } else if (bmi >= 18 && bmi < 25) {
        status = "Normal";
        document.getElementById("bmiValue").style.color = "green";
    } else if (bmi >= 25 && bmi < 30) {
        status = "Overweight";
        document.getElementById("bmiValue").style.color = "goldenrod";
    } else {
        status = "Obese";
        document.getElementById("bmiValue").style.color = "red";
    }

    document.getElementById("bmiStatus").innerHTML = status + " BMI";
}
