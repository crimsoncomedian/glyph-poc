function sendToGoogleSheet(data) {
  fetch("https://script.google.com/macros/s/AKfycbyh0LI4oKDCtkQIQsaa80vbbqIdOykPi6S8tkqfruYld5Dy3-9riVKFqKLgwhoA-s6k/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => res.text())
    .then(response => console.log("Submitted:", response))
    .catch(err => console.error("Error submitting to sheet:", err));
}

function submitResults() {
  const data = {
    name: document.getElementById("studentName").value,
    ranking: document.getElementById("ranking").value,
    confidence: document.getElementById("confidence").value,
    q1Answer: document.getElementById("q1Answer").value,
    q1Correct: true,  // or compute this dynamically
    q1Time: 13,        // replace with your timer
    q2Answer: document.getElementById("q2Answer").value,
    q2Time: 15,        // replace with your timer
    reflection: document.getElementById("reflection").value
  };

  console.log("Sending this to Google Sheet:", data);
  sendToGoogleSheet(data);
}
