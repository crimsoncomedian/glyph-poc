function sendResultsToSheet() {
  const student = JSON.parse(localStorage.getItem('student_name') || '{}');
  const confidence = JSON.parse(localStorage.getItem('confidence') || '{}');

  const data = {
    timestamp: new Date().toISOString(),
    studentName: `${student.first || ''} ${student.last || ''}`,
    ranking: JSON.stringify(orderedQuestions),
    confidence: JSON.stringify(confidence),
    q1Answer: localStorage.getItem('q1_answer'),
    q1Correct: localStorage.getItem('q1_correct') === 'true',
    q1Time: 0, // you can replace with actual time tracking later
    q2Answer: localStorage.getItem('q2_answer'),
    q2Time: 0, // optional time tracking
    reflection: localStorage.getItem('reflection_response')
  };

  sendToGoogleSheet(data); // this function already exists in script_cf5a3173.js
}

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

