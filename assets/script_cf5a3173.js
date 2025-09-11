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
