/* my loader */
const loader = document.querySelector(".container");
let duration = 2000;
const interval = setInterval(() => {
  if (duration < 2000) {
    duration++;
  } else {
    clearInterval(interval);
    window.location.href = "main.html";
  }
}, (intervalTime = duration));

/* form handler */
  function sendEmail(event) {
        event.preventDefault();

        let params = {
          from_name: document.getElementById("full_name").value,
          email_id: document.getElementById("email_id").value,
          message: document.getElementById("message").value,
          services: document.getElementById("services").value,
        };

        if (
          !params.from_name ||
          !params.email_id ||
          !params.message ||
          !params.services
        ) {
          alert("Please fill all required fields.");
          return;
        }

        emailjs
          .send("service_a8bar4u", "template_519z0hf", params)
          .then(function (res) {
            alert("Email sent successfully! Status: " + res.status);
          })
          .catch(function (err) {
            alert("Failed to send email: " + JSON.stringify(err));
          });
      }
