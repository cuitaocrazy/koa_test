const Koa = require('koa')

const app = new Koa()

let p = Promise.resolve()

function delay(n) {
	return new Promise((resolve, reject) => setTimeout(resolve, n))
}

app.use((context, next) => {
	context.body = "hello2"
	p = p.then(() => delay(1000)).then(next)
	return p
})


app.listen(3000)