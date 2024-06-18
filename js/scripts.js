function loadContent(page) {
    // find a file
    var filePath = `pages/${page}.html`;
    // create AJAX request
    var ajax = new XMLHttpRequest();
    // configure the ajax request: use GET Method, provide the file path, and make it asynchronous
    ajax.open("GET", filePath, true);
    // callback function
    ajax.onload = function () { 
        // Check if request was successful (200=OK)
        if (ajax.status == 200) {
            // Find the element with id "main-content"
            const container = document.getElementById("main-content")
            // Set the html content of the container to the response from the server
            container.innerHTML = ajax.responseText;
        }
    

    }

// Define what to do if error occurs
ajax.onerror = function () {
    // Log an error message to the console
    console.log("Error: " + ajax.statusText);
};
// Send the AJAX request to the server
ajax.send();
}




const today = new Date();
console.log("month:" + today.getUTCMonth());

// Function to multiply three numbers
function multiply(param1, param2, param3) {
    return param1 * param2 * param3;
}

console.log(multiply(1, 2, 3)); // Should print 6

// Function to reverse the order of the words in a string
function reverseWordOrder(value) {
    return value.split(' ').reverse().join(' ');
}

console.log(reverseWordOrder("Left to right")); // Should print "right to Left"

// Function to log user data
function logUserData(personName, age) {
    console.log(`User: ${personName} is ${age} years old`);
}

logUserData("John Doe", 50); // Should print "User: John Doe is 50 years old"

