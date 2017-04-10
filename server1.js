const Koa = require("koa")

const app = new Koa()

app.use(async (context, next) => {
    context.body = "hello world!!!"
    await next()
})

app.listen(3000)
