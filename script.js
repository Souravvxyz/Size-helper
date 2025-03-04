document.getElementById('sizeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Retrieve form values
  var gender = document.getElementById('gender').value;
  var age = parseInt(document.getElementById('age').value);
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);
  var bodyType = document.getElementById('bodyType').value;
  var fitChoice = document.getElementById('fitChoice').value;
  
  // Calculate BMI (weight in kg, height in m)
  var heightMeters = height / 100;
  var bmi = weight / (heightMeters * heightMeters);
  
  // Determine a basic size using standard BMI thresholds
  var size = '';
  if (bmi < 18.5) {
    size = 'S';
  } else if (bmi < 25) {
    size = 'M';
  } else if (bmi < 30) {
    size = 'L';
  } else {
    size = 'XL';
  }
  
  // Adjust size based on body type
  if (bodyType === 'slim') {
    if (size === 'M') size = 'S';
    else if (size === 'L') size = 'M';
    else if (size === 'XL') size = 'L';
  } else if (bodyType === 'heavy') {
    if (size === 'S') size = 'M';
    else if (size === 'M') size = 'L';
    else if (size === 'L') size = 'XL';
  }
  // 'average' and 'athletic' remain unchanged
  
  // Convert fit choice to text
  var fitText = '';
  if (fitChoice === 'slimFit') {
    fitText = 'Slim Fit';
  } else if (fitChoice === 'normalFit') {
    fitText = 'Normal Fit';
  } else if (fitChoice === 'oversizedFit') {
    fitText = 'Oversized Fit';
  }
  
  // Build result message with detailed information
  var resultMessage = "<h2>Your Recommended Size</h2>";
  resultMessage += "<p>Based on your input (BMI: " + bmi.toFixed(1) + "), your approximate clothing size is <strong>" + size + "</strong> with a <strong>" + fitText + "</strong> style.</p>";
  resultMessage += "<p>This recommendation is a general guide to help you select a comfortable fit for your body type during the festive season.</p>";
  
  // Display the result with a fade-in effect by resetting the animation
  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML = resultMessage;
  resultDiv.style.animation = 'none';
  // Trigger reflow to restart animation
  void resultDiv.offsetWidth;
  resultDiv.style.animation = 'fadeIn 1s forwards';
});


