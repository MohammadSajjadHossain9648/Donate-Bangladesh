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
