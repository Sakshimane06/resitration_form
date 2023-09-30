document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const displayData = document.getElementById("displayData");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const userData = `
            <h3>Registration Successful!</h3>
            <p>First Name: ${firstName}</p>
            <p>Last Name: ${lastName}</p>
            <p>Email: ${email}</p>
            <p>Password: ${password}</p>
        `;

        displayData.innerHTML = userData;
    }
    );
}
);