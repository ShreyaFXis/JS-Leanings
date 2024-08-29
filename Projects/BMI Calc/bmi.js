function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
  
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      document.getElementById('results').innerText = "Please enter valid height and weight values.";
      return;
    }
  
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    document.getElementById('results').innerText = `Your BMI is ${bmi}`;
  }
  
  function toggleGuide() {
    const guideContent = document.getElementById('weight-guide-content');
    const guideTitle = document.querySelector('#weight-guide h3');
  
    if (guideContent.style.display === "none" || guideContent.style.display === "") {
      guideContent.style.display = "block";
      guideTitle.innerHTML = 'BMI Weight Guide ▲';
    } else {
      guideContent.style.display = "none";
      guideTitle.innerHTML = 'BMI Weight Guide ▼';
    }
  }
  