const Koa = require('koa')
const route = require('koa-route')

const res1 = require('./res1')
const res2 = require('./res2')

const app = new Koa()

app.use(route.get("/res1", res1))
app.use(route.get("/res2", res2))

app.listen(3000)
