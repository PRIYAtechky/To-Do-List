// Get references to the DOM elements
const addTaskButton = document.getElementById('add-task');
const taskInput = document.getElementById('new-task');
const postItsContainer = document.getElementById('post-its-container');

// Function to create a new sticky note
function createStickyNote(taskText) {
    // Create sticky note div
    const stickyNote = document.createElement('div');
    stickyNote.classList.add('post-it');
    
    // Create text area inside sticky note
    const textArea = document.createElement('textarea');
    textArea.value = taskText;
    textArea.setAttribute('readonly', 'true');
    stickyNote.appendChild(textArea);

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML = '❌';
    deleteButton.addEventListener('click', () => {
        postItsContainer.removeChild(stickyNote);
    });
    
    // Create check button
    const checkButton = document.createElement('button');
    checkButton.classList.add('check-btn');
    checkButton.innerHTML = '✔️';
    checkButton.addEventListener('click', () => {
        stickyNote.classList.toggle('completed');
    });

    // Add buttons to sticky note
    stickyNote.appendChild(deleteButton);
    stickyNote.appendChild(checkButton);

    // Append sticky note to the container
    postItsContainer.appendChild(stickyNote);
}

// Event listener to add a new task when the button is clicked
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    // Only add if the input is not empty
    if (taskText) {
        createStickyNote(taskText);
        taskInput.value = ''; // Clear input field after adding
    } else {
        alert("Please enter a task!");
    }
});

// Event listener to allow pressing Enter to add a task
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTaskButton.click();
    }
});
