import fs from 'fs'

for (var i =0; i<= 10; i++) {
    fs.appendFile('test.txt', `line:${i}\n`, (err) => {
        if(err) console.log('er')
        else console.log('ok')
    }) 

}

