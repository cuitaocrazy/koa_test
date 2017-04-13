const Koa = require('koa')
const createAtomOpt = require('./atom_opt')
const app = new Koa()

let i = 0

function delayWorker(context) {
	return new Promise((resolve, reject) => setTimeout(() => {
        i++
        console.log(i)
        context.body = i
		resolve()
	}, 1000))
}


const atomOpt = createAtomOpt()

app.use(atomOpt(delayWorker))


app.listen(3000)
