// Function to handle the quiz submission
function handleQuizSubmit() {
    // Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');

    // Check if an option is selected
    if (selectedOption) {
        // Get the value of the selected option
        const userAnswer = selectedOption.value;

        // Correct answer
        const correctAnswer = "4";

        // Check if the user's answer is correct
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "Incorrect. The correct answer is 4.";
            feedbackElement.style.color = "red";
        }
    } else {
        feedbackElement.textContent = "Please select an answer.";
        feedbackElement.style.color = "orange";
    }
}

// Attach event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', handleQuizSubmit);
