



// __dirname 是node.js中的一个全局变量，它指向当前执行脚本所在的目录

module.exports = {

    entry: __dirname+'/src/index.js',
    output: {
        path: __dirname+'public',
        filename: 'bundle.js'
    }
}


