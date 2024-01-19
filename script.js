//your JS code here. If required.
    var targetElement = document.getElementById("level");

    if (targetElement) {
        // Initialize DOM level counter
        var domLevel = 1;

        // Traverse through the parent elements until the root HTML element
        while (targetElement !== document.documentElement) {
            targetElement = targetElement.parentElement;
            domLevel++;
        }

        // Display the result using the alert function
        alert("The level of the element is: " + domLevel);
    } else {
        // Display an alert if the target element is not found
        alert("Element with id 'level' not found.");
    }
