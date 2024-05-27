const fs = require('fs');

const obj = {
    username: 'a-kon',
    pasword: 'akon1234'
}

try{
    fs.writeFileSync(
        'content/sync.txt',
        JSON.stringify(obj)
    );
    console.log('success sync');
} catch (err){
    console.log(err);
}


fs.writeFile(
    'content/async.txt',
    JSON.stringify(obj),
    (err)=>{
        if(err){
            return console.log(err);
        }
        console.log('success async');
    }
);