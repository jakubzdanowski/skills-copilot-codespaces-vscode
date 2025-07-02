// Create web server
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
// Create a simple function
function calculateNumbers(var1, var2) {
    return var1 + var2;
}
// Export the function for testing
module.exports = {
    calculateNumbers
};
// Create a simple test
const assert = require('assert');
describe('calculateNumbers', function() {
    it('should return the sum of two numbers', function() {
        assert.strictEqual(calculateNumbers(1, 2), 3);
        assert.strictEqual(calculateNumbers(-1, 1), 0);
        assert.strictEqual(calculateNumbers(0, 0), 0);
    });
});
// Run the test
if (require.main === module) {
    const Mocha = require('mocha');
    const mocha = new Mocha();
    mocha.addFile('./test.js'); // Assuming the test is in test.js
    mocha.run(function(failures) {
        process.exitCode = failures ? 1 : 0; // exit with non-zero status if there were failures
    });
}
// Create a simple HTML page
const fs = require('fs');
const path = require('path');
app.get('/page', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        res.send(data);
    });
});
// Create a simple HTML file
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a simple HTML page served by Express.</p>
</body>
</html>`;
fs.writeFileSync(path.join(__dirname, 'index.html'), htmlContent, 'utf8');