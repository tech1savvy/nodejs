const fs = require('fs');

const obj = {
    username: 'a-kon',
    pasword: 'akon1234'
}

fs.writeFileSync(
    'content/data.txt',
    JSON.stringify(obj),
    { flag: 'a'} // append mode
);
console.log('success sync');

fs.writeFile(
    'content/data.txt',
    JSON.stringify(obj),
    {flag: 'a'}
)