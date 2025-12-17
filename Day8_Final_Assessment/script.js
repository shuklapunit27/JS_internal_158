document
  .getElementById("registration")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;
    const terms = document.getElementById("terms").checked;
    const gender = document.querySelector('input[name="gender"]:checked');

    let oldOutput = document.getElementById("output");
    if (oldOutput) oldOutput.remove();

    let oldError = document.getElementById("error");
    if (oldError) oldError.remove();

    const error = document.createElement("p");
    error.id = "error";
    error.style.color = "red";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
      error.textContent = "Name should not be empty";
      this.appendChild(error);
      return;
    }

    if (email === "" || !emailPattern.test(email)) {
      error.textContent = "Email should be valid";
      this.appendChild(error);
      return;
    }

    if (!gender) {
      error.textContent = "Gender must be selected";
      this.appendChild(error);
      return;
    }

    if (course === "") {
      error.textContent = "Course must be selected";
      this.appendChild(error);
      return;
    }

    if (!terms) {
      error.textContent = "Terms checkbox must be checked";
      this.appendChild(error);
      return;
    }

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("gender", gender.value);
    sessionStorage.setItem("course", course);

    const output = document.createElement("div");
    output.id = "output";
    output.style.color = "green";
    output.style.marginTop = "15px";

    let timeLeft = 10;

    output.innerHTML = `
    <strong>Registration Successful!</strong><br><br>
    Name: ${name}<br>
    Email: ${email}<br>
    Gender: ${gender.value}<br>
    Course: ${course}<br><br>
    Redirecting in <span id="timer">${timeLeft}</span> seconds...
  `;

    this.appendChild(output);

    const countdown = setInterval(() => {
      timeLeft--;
      document.getElementById("timer").textContent = timeLeft;

      if (timeLeft === 0) {
        clearInterval(countdown);
        window.location.href = "success.html";
      }
    }, 1000);
  });
