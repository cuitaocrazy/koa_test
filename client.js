const fetch = require('node-fetch')



for(let i = 0; i < 10000; i++)
	fetch('http://localhost:3000').then(res => res.text()).then(console.log).catch(console.log)