/**
 * Created by cuitao on 2017/4/10.
 */

const Koa = require('koa')

const app = new Koa()

let i = 0

app.use((context, next) => {
    i++
    console.log(i)
    return new Promise((resovle) => {
        context.body = i
        setTimeout(() => resovle(next()), 1000)
    })
})

app.listen(3000)