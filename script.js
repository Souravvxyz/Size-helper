// Wrap our code in DOMContentLoaded to ensure the form exists
window.addEventListener('DOMContentLoaded', function() {
  // Mapping for height dropdown values to scores (1-6)
  const heightMap = {
    "h1": 1,  // Below 150 cm
    "h2": 2,  // 150-159 cm
    "h3": 3,  // 160-169 cm
    "h4": 4,  // 170-179 cm
    "h5": 5,  // 180-189 cm
    "h6": 6   // 190 cm and above
  };

  // Mapping for weight dropdown values to scores (1-6)
  const weightMap = {
    "w1": 1,  // Below 50 kg
    "w2": 2,  // 50-59 kg
    "w3": 3,  // 60-69 kg
    "w4": 4,  // 70-79 kg
    "w5": 5,  // 80-89 kg
    "w6": 6   // 90 kg and above
  };

  document.getElementById('sizeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get selected values
    const selectedHeight = document.getElementById('height').value;
    const selectedWeight = document.getElementById('weight').value;
    const bodyType = document.getElementById('bodyType').value;
    
    // Ensure values are selected
    if (!selectedHeight || !selectedWeight || !bodyType) {
      alert("Please select all options.");
      return;
    }
    
    // Retrieve corresponding scores
    const heightScore = heightMap[selectedHeight];
    const weightScore = weightMap[selectedWeight];
    
    // Calculate an average score from height and weight
    let score = Math.round((heightScore + weightScore) / 2);
    
    // Adjust based on body type: slim (-1), heavy (+1), average/athletic (no change)
    if (bodyType === "slim") {
      score = Math.max(1, score - 1);
    } else if (bodyType === "heavy") {
      score = Math.min(6, score + 1);
    }
    
    // Map final score to clothing size
    let finalSize = "";
    if (score <= 2) {
      finalSize = "S";
    } else if (score === 3) {
      finalSize = "M";
    } else if (score === 4) {
      finalSize = "L";
    } else { // score 5 or 6
      finalSize = "XL";
    }
    
    // Build the result message
    const resultMessage = `
      <h2>Your Recommended Size</h2>
      <p>Based on your selections, your recommended clothing size is <strong>${finalSize}</strong>.</p>
      <p>This recommendation is based on our predefined height and weight brackets with adjustments for body type. Actual fit may vary by brand and style.</p>
    `;
    
    // Display the result with a fade-in effect
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = resultMessage;
    resultDiv.style.animation = 'none';
    void resultDiv.offsetWidth; // Trigger reflow to restart animation
    resultDiv.style.animation = 'fadeIn 1s forwards';
  });
});





