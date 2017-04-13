const Koa = require('koa')
const createAtomOpt = require('./atom_opt')
const app = new Koa()

let i = 0

function delay(n) {
	return new Promise((resolve, reject) => setTimeout(resolve, n))
}

async function worker(context) {
    await delay(1000)
    i++
    console.log(i)
    context.body = i
}

const atomOpt = createAtomOpt()

app.use(atomOpt(worker))


app.listen(3000)
