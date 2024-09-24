//take update time
function getCurrentFormattedDate() {
    // Create a new Date object for the current date and time
    const currentDate = new Date();

    // Define the options for formatting
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    // Get the weekday, month, day, year, hour, minute, second
    const weekday = currentDate.toLocaleString('en-US', { weekday: 'short' });
    const month = currentDate.toLocaleString('en-US', { month: 'short' });
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const hour = String(currentDate.getHours()).padStart(2, '0');
    const minute = String(currentDate.getMinutes()).padStart(2, '0');
    const second = String(currentDate.getSeconds()).padStart(2, '0');

    // Get the timezone offset
    const timezoneOffset = currentDate.getTimezoneOffset();
    const offsetHours = String(Math.abs(Math.floor(timezoneOffset / 60))).padStart(2, '0');
    const offsetMinutes = String(Math.abs(timezoneOffset % 60)).padStart(2, '0');
    const offsetSign = timezoneOffset <= 0 ? '+' : '-';
    const formattedOffset = `GMT ${offsetSign}${offsetHours}${offsetMinutes}`;

    // Use the explicit timezone name
    const timezoneName = "Bangladesh Standard Time";  //get real timezone -> const timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Combine all parts to form the final output without a comma
    return `${weekday} ${month} ${day} ${year} ${hour}:${minute}:${second} ${formattedOffset} (${timezoneName})`;
}




// create new phone number
function generatePhoneNumber() {
    // Fixed part: First two digits are "01"
    let phoneNumber = "01";

    // Random digit between 2 and 9
    const randomDigit = Math.floor(Math.random() * (9 - 2 + 1)) + 2;
    phoneNumber += randomDigit;

    // Last 8 digits are "X"
    phoneNumber += "XXXXXXXX";

    return phoneNumber;
}


// create new transaction id
function generateTransactionID() {
    const digits = '0123456789';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';

    let transactionID = [];

    // Add 3 random digits
    for (let i = 0; i < 3; i++) {
        transactionID.push(digits[Math.floor(Math.random() * digits.length)]);
    }

    // Add 3 random uppercase letters
    for (let i = 0; i < 3; i++) {
        transactionID.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    }

    // Add 4 random lowercase letters
    for (let i = 0; i < 4; i++) {
        transactionID.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    }

    // Shuffle the array to randomize the positions
    for (let i = transactionID.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [transactionID[i], transactionID[j]] = [transactionID[j], transactionID[i]];
    }

    // Return as a string
    return transactionID.join('');
}
