document.addEventListener("DOMContentLoaded", function () {
  const bmiForm = document.getElementById("bmiForm");
  const bmiResultSection = document.getElementById("bmiResult");
  const bmiCategory = document.getElementById("bmiCategory");
  const bmiValue = document.getElementById("bmiValue");

  bmiForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const age = parseInt(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters

    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi);

    bmiCategory.textContent = `Hasil BMI: ${category}`;
    bmiValue.textContent = `Nilai BMI: ${bmi.toFixed(1)}`;

    bmiResultSection.style.display = "block";
  });

  document.getElementById("resetButton").addEventListener("click", function () {
    bmiForm.reset();
    bmiResultSection.style.display = "none";
  });

  document.getElementById("consultGiziButton").addEventListener("click", function () {
    window.location.href = "https://example.com/konsultasi-gizi";
  });

  document.getElementById("consultDokterButton").addEventListener("click", function () {
    window.location.href = "https://example.com/konsultasi-dokter";
  });

  function calculateBMI(weight, height) {
    return weight / (height * height);
  }

  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal (ideal)";
    } else if (bmi >= 25 && bmi < 30) {
      return "Kelebihan berat badan";
    } else {
      return "Kegemukan (Obesitas)";
    }
  }
});
