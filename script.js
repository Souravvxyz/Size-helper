document.getElementById('sizeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Retrieve form values
  var gender = document.getElementById('gender').value;
  var age = parseInt(document.getElementById('age').value);
  var weight = parseFloat(document.getElementById('weight').value);
  var bodyType = document.getElementById('bodyType').value;
  var fitChoice = document.getElementById('fitChoice').value;
  
  // Basic size calculation based on weight
  var size = '';
  if (weight < 50) {
    size = 'S';
  } else if (weight < 70) {
    size = 'M';
  } else if (weight < 90) {
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
  // 'average' and 'athletic' keep the same size
  
  // Convert fit choice to text
  var fitText = '';
  if (fitChoice === 'slimFit') {
    fitText = 'Slim Fit';
  } else if (fitChoice === 'normalFit') {
    fitText = 'Normal Fit';
  } else if (fitChoice === 'oversizedFit') {
    fitText = 'Oversized Fit';
  }
  
  // Build result message
  var resultMessage = "<h2>Your Recommended Size</h2>";
  resultMessage += "<p>Based on your input, your approximate size is <strong>" + size + "</strong> with a <strong>" + fitText + "</strong> style.</p>";
  resultMessage += "<p>This recommendation is a general guide to help you find a comfortable and festive fit for the holidays. Enjoy your stylish look and celebrate Christmas in comfort!</p>";
  
  // Display the result
  document.getElementById('result').innerHTML = resultMessage;
});
