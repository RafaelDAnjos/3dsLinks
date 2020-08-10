const { render } = require("nunjucks")


const jogosa = [
    {
        nome:"Pokémon Thunder Yellow",
        imagem:"https://pokemonsaves.files.wordpress.com/2016/10/6c24b-th.jpg",
        plataforma:"GBA",
        descricao:"Hack feita com base em Fire Red,é um Remake de Pokémon Yellow lançado para Game Boy Color em 1998.",
        link:"https://drive.google.com/file/d/1CY3WwN3JBH6U8eA7T7n3ev8nC5tqzzKd/view?usp=sharing"
    
    
    
    },
    {
        nome:"Pokémon Ranger",
        imagem:"https://upload.wikimedia.org/wikipedia/pt/3/31/Pok%C3%A9mon_Ranger_cover.png",
        plataforma:"NDS",
        descricao:"Pokémon Ranger é um jogo da série Pokémon com um novo conceito: comandar temporariamente os monstrinhos. Você usa um 'apetrecho' para poder controlá-los e liberá-los depois.",
        link:"https://drive.google.com/file/d/1lio99OXALUylftRv0a7xzfgtWYs5xZDk/view?usp=sharing"
    },
    {
        nome:"Orcs&Elves",
        imagem: "https://gamespot1.cbsistatic.com/uploads/screen_medium/mig/6/9/3/0/2216930-orcs_elves_ds_us.jpg",
        plataforma:"NDS",
        descricao:"Orcs & Elves é um jogo de aventura de RPG para desenvolvido para telefone celular e Nintendo DS. Foi desenvolvido pela id Software e Fountainhead Entertainment e publicado pela EA Mobile, licenciado pela Nintendo para a versão DS.",
        link:"https://drive.google.com/file/d/1hNJB7EXCmmnuetYwGknsI99TeMaq6IrJ/view?usp=sharing"
    }
    
]
    
    
const consoles = ["GBA","NDS","3DS"]



function pageLanding(req,res){
    const filters = req.query
    const jogos = []
    console.log()

     jogosa.forEach(jogo => {

        if(Object.is(jogo.plataforma,consoles[filters.console])){
            jogos.push(jogo)
        }
        
    
     });
     
    return res.render("index.html",{jogos,consoles,filters})
}

module.exports = {
    pageLanding
    
}