document.addEventListener('DOMContentLoaded', function() {
    const messageElement = document.getElementById('message');
    const messageText = messageElement.textContent;
    messageElement.textContent = ''; // Clear the message

    let index = 0;
    const typingEffect = setInterval(function() {
        messageElement.textContent += messageText[index];
        index++;
        if (index >= messageText.length) {
            clearInterval(typingEffect);
            showButtons(); // Call function to show buttons after message is fully displayed
        }
    }, 100); // Adjust typing speed here (in milliseconds)

    function showButtons() {
        const buttonsContainer = document.querySelector('.buttons');
        buttonsContainer.style.display = 'flex'; // Show the buttons
    }

    // Add event listener to "Yes" button
    const yesButton = document.getElementById('yesButton');
    yesButton.addEventListener('click', function() {
        window.location.href = 'test_heart/index.html'; // Redirect to index.html inside "test_heart" directory
    });

    // Add event listener to "No" button
    const noButton = document.querySelector('.no');
    noButton.addEventListener('click', function() {
        const buttonsContainer = document.querySelector('.buttons');
        const buttons = buttonsContainer.children;
        // Toggle the positions of "Yes" and "No" buttons
        buttonsContainer.appendChild(buttons[1]);
        buttonsContainer.appendChild(buttons[0]);
    });
});