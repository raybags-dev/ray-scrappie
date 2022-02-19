const randomXters = require("crypto").randomBytes(7).toString('hex');
const fs = require("fs")


function writer(file, error, data_array) {
    if (!file) file = randomXters;
    fs.writeFileSync(`./data/${file}.json`, JSON.stringify(data_array));
    console.log(`Success: Your data is in a file called "${file}.json saved"`);
    if (error) return error;
}

function writer_2(file, data_arr) {
    if (!file) file = randomXters;
    fs.writeFileSync(`./data/${file}.json`, JSON.stringify(data_arr));
    console.log(`Success: Your data is in a file called "${file}.json saved"`);
}
module.exports = { writer, writer_2 }