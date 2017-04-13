/**
 * Created by cuitao on 2017/4/13.
 */

function createAtomOpt() {
    let p = Promise.resolve()

    return function (worker) {
        return function (context, next) {
            p = p.then(() => worker(context)).then(next)
            return p
        }
    }
}

createAtomOpt.createAtomOpt = createAtomOpt

module.exports = createAtomOpt