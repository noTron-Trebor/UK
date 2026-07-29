const fs = require('fs');
const path = require('path');

async function run() {
    console.log("Starting generation...");
    for (let day = 3; day <= 25; day++) {
        const folderPath = path.join(process.cwd(), 'photos', `8-${day}`);
        const filePath = path.join(folderPath, `8-${day}.txt`);
        
        // Create the folder if it doesn't exist
        fs.mkdirSync(folderPath, { recursive: true });
        
        // Write the text file
        fs.writeFileSync(filePath, `Log file for August ${day}.`);
    }
    console.log("Done!");
}

run();
