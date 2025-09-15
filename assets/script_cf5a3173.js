function sendResultsToSheet() {
  const student = JSON.parse(localStorage.getItem('student_name') || '{}');
  const confidence = JSON.parse(localStorage.getItem('confidence') || '{}');

  const data = {
    studentName: `${student.first || ''} ${student.last || ''}`,
    ranking: JSON.stringify(orderedQuestions),
    confidence: JSON.stringify(confidence),
    q1Answer: localStorage.getItem('q1_answer'),
    q1Correct: localStorage.getItem('q1_correct') === 'true',
    q1Time: localStorage.getItem('q1_time') || "",
    q2Answer: localStorage.getItem('q2_answer'),
    q2Time: localStorage.getItem('q2_time') || "",
    reflection: localStorage.getItem('reflection_response')
  };

  sendToGoogleSheet(data);
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
