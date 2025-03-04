// Ensure our code runs after the DOM is loaded
window.addEventListener('DOMContentLoaded', function() {
  // Mapping for height dropdown values to scores (1-8)
  const heightMap = {
    "h1": 1,  // Below 155 cm
    "h2": 2,  // 155-159 cm
    "h3": 3,  // 160-164 cm
    "h4": 4,  // 165-169 cm
    "h5": 5,  // 170-174 cm
    "h6": 6,  // 175-179 cm
    "h7": 7,  // 180-184 cm
    "h8": 8   // 185 cm and above
  };

  // Mapping for weight dropdown values to scores (1-7)
  const weightMap = {
    "w1": 1,  // Below 45 kg
    "w2": 2,  // 45-50 kg
    "w3": 3,  // 50-55 kg
    "w4": 4,  // 55-60 kg
    "w5": 5,  // 60-65 kg
    "w6": 6,  // 65-70 kg
    "w7": 7   // Above 70 kg
  };

  document.getElementById('sizeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get selected values
    const selectedHeight = document.getElementById('height').value;
    const selectedWeight = document.getElementById('weight').value;
    const bodyType = document.getElementById('bodyType').value;
    
    // Validate input
    if (!selectedHeight || !selectedWeight || !bodyType) {
      alert("Please select all options.");
      return;
    }
    
    // Retrieve corresponding scores
    const heightScore = heightMap[selectedHeight];
    const weightScore = weightMap[selectedWeight];
    
    // Calculate average score from height and weight
    let averageScore = (heightScore + weightScore) / 2;
    
    // Adjust based on body type:
    // If slim, subtract 0.5; if heavy, add 0.5; average and athletic: no change.
    if (bodyType === "slim") {
      averageScore -= 0.5;
    } else if (bodyType === "heavy") {
      averageScore += 0.5;
    }
    
    // Determine recommended size based on adjusted average score:
    // Score range: 1 to 8. Use thresholds:
    // average < 3    => S
    // 3 <= average < 5  => M
    // 5 <= average < 6.5 => L
    // average >= 6.5   => XL
    let finalSize = "";
    if (averageScore < 3) {
      finalSize = "S";
    } else if (averageScore < 5) {
      finalSize = "M";
    } else if (averageScore < 6.5) {
      finalSize = "L";
    } else {
      finalSize = "XL";
    }
    
    // Build result message
    const resultMessage = `
      <h2>Your Recommended Size</h2>
      <p>Based on your selections, your recommended clothing size is <strong>${finalSize}</strong>.</p>
      <p>This recommendation is based on your height and weight brackets with adjustments for body type. Remember, actual fit may vary by brand and style.</p>
    `;
    
    // Display the result with fade-in effect
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = resultMessage;
    resultDiv.style.animation = 'none';
    void resultDiv.offsetWidth; // trigger reflow
    resultDiv.style.animation = 'fadeIn 1s forwards';
  });
});






