/**
 * Created by cuitao on 2017/4/13.
 */

const delay = require('./delay')
const {createAtomOpt} = require('./atom_opt')

const atomOpt = createAtomOpt()

const state = {
    count: 0
}

async function add(context) {
    await delay(1000)
    state.count++
    context.body = "res1 count is " + state.count
}

module.exports = atomOpt(add)