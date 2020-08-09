const jogos = [
    {
        nome: "Pokémon FireRed",
        imagem:"https://s2.glbimg.com/Yh-saJ-tG9QI2dG6kT02OyI2A3g=/695x0/s.glbimg.com/po/tt2/f/original/2016/03/11/pokemonfirered.jpg",
        plataforma:"GBA",
        descricao:" Charmander neles",
        link_download:""


    },
    {
        nome: "Pokémon LeafGreen",
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRECD_z5ZXGLqlkkPpQwWCrWBqKUQn5sRmVBg&usqp=CAU",
        plataforma:"GBA",
        descricao:"Bulbassaur neles",
        link_download:""
    }



]
const consoles=[
    "GBA",
    "NDS",
    "3DS",
]


function pageLanding(req,res){
    const filters = req.query
    return res.render('index.html',{jogos,consoles,filters})

}


const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

nunjucks.configure('src/view', {
    express:server,
    noCache: true,

})

server.use(express.static("public"))
.get('/',pageLanding)
.listen(5500)
