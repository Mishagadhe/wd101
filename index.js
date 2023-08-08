<!DOCTYPE html>
<html>
<head>
   <title>Registration Form</title>
</head>
<body>
   <h1>WD101 Registration Form</h1>
   <form id="registrationForm">
      <label for="fullName">Full Name:</label>
      <input type="text" id="fullName" name="fullName" required><br><br>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required><br><br>

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required><br><br>

      <button type="button" id="registerButton">Register</button>
   </form>

   <script>
      document.addEventListener("DOMContentLoaded", function () {
         const registerButton = document.getElementById("registerButton");
         registerButton.addEventListener("click", function () {
            const fullName = document.getElementById("fullName").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (fullName && email && password) {
               // You can perform further actions here, like sending the data to a server
               console.log("Registration successful!");
            } else {
               console.log("Please fill in all fields.");
            }
         });
      });
   </script>
</body>
</html>
