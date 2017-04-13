/**
 * Created by cuitao on 2017/4/13.
 */


module.exports = function (n) {
    return new Promise((resolve, reject) => setTimeout(resolve, n))
}