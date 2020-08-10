

const {pageLanding, filtroJogos} = require('./pages')




const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

nunjucks.configure('src/view',{
    express:server,
    noCache: true,

})

server.use(express.static("public"))
.get('/',pageLanding)
.listen(5500)
