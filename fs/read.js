const fs = require('fs');

try {
    let data = fs.readFileSync(
        'content/sync.txt',
        'utf-8' // encoding (common for string)
    )
} catch (err) {
    console.log(err);
}

fs