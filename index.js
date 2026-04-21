

// Step 2 & 6: Require datejs for date formatting
const datejs = require('datejs');

/**
 * 2. Create a combineUsers function
 * @param {...Array} args - An indeterminate number of arrays (Rest Argument)
 */
function combineUsers(...args) {
    
    // 3. Initialize return object
    // Inside combineUsers, define the variable combinedObject
    // Initialize with a key of 'users' with value []
    const combinedObject = {
        users: []
    };

    // 4. Loop through args to isolate each array
    args.forEach((currentArray) => {
        
        // 5. Merge arrays into the 'users' attribute of combinedObject
        // Using a spread operator (...) to push individual elements
        combinedObject.users.push(...currentArray);
    });

    // 6. Get today's date
    // Add an attribute 'merge_date' with current date in MM/DD/YYYY format
    combinedObject.merge_date = Date.today().toString("M/dd/yyyy");

    // 7. Return object
    return combinedObject;
}
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};