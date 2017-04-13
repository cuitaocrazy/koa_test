const fetch = require('node-fetch')



for(let i = 0; i < 10; i++) {
    fetch('http://localhost:3000/res1').then(res => res.text()).then(console.log).catch(console.log)
}

for(let i = 0; i < 10; i++) {
    fetch('http://localhost:3000/res2').then(res => res.text()).then(console.log).catch(console.log)
}