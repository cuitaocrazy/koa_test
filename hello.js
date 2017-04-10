const Koa = require('koa')

const app = new Koa()

let p = Promise.resolve()

function delay(n) {
	return new Promise((resolve, reject) => setTimeout(() => {
		console.log("work")
		resolve()
	}, n))
}

let i = 0

app.use((context, next) => {
    i++
    console.log(i)
	context.body = i
    const tp = delay(1000)
	p = p.then(() => tp).then(next)
	return p
})


app.listen(3000)