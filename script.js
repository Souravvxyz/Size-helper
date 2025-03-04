document.getElementById('sizeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Retrieve form values
  var gender = document.getElementById('gender').value;
  var age = parseInt(document.getElementById('age').value);
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);
  var bodyType = document.getElementById('bodyType').value;
  var fitChoice = document.getElementById('fitChoice').value;
  
  // Calculate BMI (using weight in kg and height in meters)
  var heightMeters = height / 100;
  var bmi = weight / (heightMeters * heightMeters);
  
  // Determine a base size using standard BMI thresholds
  // 0: S, 1: M, 2: L, 3: XL
  var baseSize;
  if (bmi < 18.5) {
    baseSize = 0;
  } else if (bmi < 24.9) {
    baseSize = 1;
  } else if (bmi < 29.9) {
    baseSize = 2;
  } else {
    baseSize = 3;
  }
  
  // Create an array for sizes for easy adjustment
  var sizes = ["S", "M", "L", "XL"];
  
  // Adjust size based on height:
  // If height is less than 160 cm, reduce size by one step (if possible)
  // If height is greater than 180 cm, increase size by one step (if possible)
  if (height < 160) {
    baseSize = Math.max(0, baseSize - 1);
  } else if (height > 180) {
    baseSize = Math.min(3, baseSize + 1);
  }
  
  // Adjust based on body type:
  // If body type is slim, reduce size by one step
  // If heavy, increase size by one step
  if (bodyType === "slim") {
    baseSize = Math.max(0, baseSize - 1);
  } else if (bodyType === "heavy") {
    baseSize = Math.min(3, baseSize + 1);
  }
  
  // Final size based on adjustments
  var finalSize = sizes[baseSize];
  
  // Convert fit choice to text
  var fitText = "";
  if (fitChoice === "slimFit") {
    fitText = "Slim Fit";
  } else if (fitChoice === "normalFit") {
    fitText = "Normal Fit";
  } else if (fitChoice === "oversizedFit") {
    fitText = "Oversized Fit";
  }
  
  // Build the result message
  var resultMessage = "<h2>Your Recommended Size</h2>";
  resultMessage += "<p>Based on your inputs (BMI: " + bmi.toFixed(1) + ", Height: " + height + " cm), your recommended clothing size is <strong>" + finalSize + "</strong> with a <strong>" + fitText + "</strong> style.</p>";
  resultMessage += "<p>This recommendation is derived from standard BMI thresholds, height adjustments, and body type considerations to help you find a comfortable fit for the holiday season.</p>";
  
  // Display the result with a fade-in animation
  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML = resultMessage;
  resultDiv.style.animation = 'none';
  void resultDiv.offsetWidth;
  resultDiv.style.animation = 'fadeIn 1s forwards';
});



