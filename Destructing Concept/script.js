function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 101,
                name: "Alice Johnson",
                age: 28,
                email: "alice@example.com",
                address: {
                    city: "New York",
                    country: "USA",
                },
                hobbies: ["Reading", "Traveling", "Cooking"],
                isAdmin: true
            });
        }, 1000);
    });
}

// Function to display user details
function displayUser({ name, age, email, address: { city, country }, hobbies = [], isAdmin, ...otherDetails }) {
    // Array destructuring (get first hobby & rest)
    const [firstHobby, ...otherHobbies] = hobbies;

    // Prepare HTML content
    const userHTML = `
                <h3 class="highlight">${name}</h3>
                <p><strong>Age:</strong> ${age}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Location:</strong> ${city}, ${country}</p>
                <p><strong>First Hobby:</strong> ${firstHobby || "No hobbies listed"}</p>
                <p><strong>Other Hobbies:</strong> ${otherHobbies.length ? otherHobbies.join(", ") : "None"}</p>
                <p><strong>Admin Status:</strong> ${isAdmin ? "✅ Admin" : "❌ Not an Admin"}</p>
                <p><strong>Other Details:</strong> ${JSON.stringify(otherDetails)}</p>
            `;

    // Display in UI
    document.getElementById("user-container").innerHTML = userHTML;
}

// Fetch and display user data
fetchUserData().then(displayUser);