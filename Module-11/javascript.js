// Array to store entries
let entries = [];
// Reference for container div
let container = document.getElementById('container');

// Function to add an entry
function addEntry() {
    // Value the user has entered into the text input
    let entry = document.getElementById('entryInput').value;

    // Update entries array
    entries.push(entry);
    alert("Entry added: " + entry);

    // If the ordered list is being displayed, it will be updated with the new entry
    if(document.getElementById('entryList')){
        displayEntries();
    }

    // Clears text input
    document.getElementById('entryInput').value = '';
}

// Function to delete last entry
function deleteEntry() {
    let promptMessage = "Enter the number of the entry you want to delete:\n";
    entries.forEach(function(entry, index) {
        promptMessage += (index + 1) + '. ' + entry + '\n';
    });

    // Prompt for user to enter the index of the item they would like to delete
    let indexToDelete = prompt(promptMessage);

    // Checks if the user input is not empty
    if (indexToDelete !== null) {
        // Checks if input is a valid number
        indexToDelete = parseInt(indexToDelete);
        if (!isNaN(indexToDelete) && indexToDelete >= 1 && indexToDelete <= entries.length) {
            // Deletes the chosen item in the list and display's the deleted item for the user
            let deletedEntry = entries.splice(indexToDelete - 1, 1)[0];
            alert("Deleted entry: " + deletedEntry);

            // If the ordered list is being displayed, it will be updated with the new entry
            if(document.getElementById('entryList')){
                displayEntries();
            }
        }
        else {
            alert("Invalid index.");
        }
    }
}

// Function to display entries
function displayEntries() {
    let entryList = document.createElement('ol');
    let listTitle = document.createElement('h3');
    listTitle.setAttribute('id', 'listTitle')
    listTitle.textContent = 'To Do List:';
    entryList.setAttribute('id', 'entryList');
    
    // Checking if entryList element ID exists and then deletes previous list
    if (document.getElementById('entryList')){
        document.getElementById('listTitle').remove();
        document.getElementById('entryList').remove();
    }
    
    // Iterates through entries array and adds to ordered list to display on page
    entries.forEach(function(entry, index) {
        let listItem = document.createElement('li');
        listItem.textContent = entry;
        entryList.appendChild(listItem);
    });

    container.appendChild(listTitle);
    container.appendChild(entryList);
}

