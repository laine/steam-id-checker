const lineReader = require('line-reader');
const SteamApi = require("steamapi");
const fs = require('fs').promises;

//https://steamcommunity.com/dev/apikey
const apiuser = new SteamApi("replaceme");

lineReader.eachLine('input.txt', async function (line, last) {
    try {
        await apiuser.resolve(`https://steamcommunity.com/id/${line}/`);
        console.log(`${line} is taken`);
    } catch (err) {
        console.log(`${line} is not taken`);
        await fs.appendFile('output.txt', `${line}\n`);
    }

    if (last) {
        console.log('Processing complete.');
    }
});