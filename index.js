let pokeid
async function getApi(pokeid) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeid}`)
    const data = await res.json()
    Pokemons(data)
}


    const bulbasaurBtn = document.createElement('button')
    bulbasaurBtn.addEventListener('click', ()=> {
        pokeid = 1;
        getApi(pokeid)
        document.getElementById('Pokedex').innerHTML=""
    }) 
    const bulbasaurGif = document.createElement('img')
    bulbasaurGif.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
    bulbasaurBtn.appendChild(bulbasaurGif)


    const charmanderBtn = document.createElement('button')
    charmanderBtn.addEventListener('click', () => {
        pokeid = 4;
        getApi(pokeid)
        document.getElementById('Pokedex').innerHTML=""
    })
    const charmanderGif = document.createElement('img')
    charmanderGif.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif"
    charmanderBtn.appendChild(charmanderGif)


    const squirttleBtn = document.createElement('button')
    squirttleBtn.addEventListener('click', () => {
        pokeid = 7;
        getApi(pokeid)
        document.getElementById('Pokedex').innerHTML=""
    })
    const squirttleGif = document.createElement('img')
    squirttleGif.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif"
    squirttleBtn.appendChild(squirttleGif)

    const tittle = document.createElement('h1')
    tittle.innerText = "Pokedex"

    const section = document.createElement('section')
    section.appendChild(bulbasaurBtn)
    section.appendChild(charmanderBtn)
    section.appendChild(squirttleBtn)

    document.getElementById('Btns').appendChild(tittle)
    document.getElementById('Btns').appendChild(section)


    function devolve (pokemon_id){
        if (pokemon_id >= 2 && pokemon_id <= 9) {
            getApi(--pokemon_id)
        }else {
            getApi(pokemon_id)
        }
    }
    function evolve(pokemon_id){
        if (pokemon_id >= 1 && pokemon_id <= 8) {
            getApi(++pokemon_id)
        }else{
            getApi(pokemon_id)
        }
    }


const Pokemons = (data) => {

const Container = document.createElement('div');
    
const section = document.createElement('section');
section.id = "Card";
   
const number = document.createElement('h2');
number.textContent = `No° ${data.id}`;

const img = document.createElement('img');
img.src = data.sprites.front_default;

const name = document.createElement('h3');
name.textContent = data.name;

const evolution = document.createElement('section')
evolution.id = "evolution"

const devolveBtn = document.createElement('button');
devolveBtn.textContent = "Devolve";
devolveBtn.addEventListener('click', () => {
    devolve(data.id)
    Container.innerHTML = ""
    document.getElementById('Pokedex').innerHTML=""
});
evolution.appendChild(devolveBtn);

const evolveBtn = document.createElement('button');
evolveBtn.textContent = "Evolve";
evolveBtn.addEventListener('click', () => {
    evolve(data.id)
    document.getElementById('Pokedex').innerHTML=""
});
evolution.appendChild(evolveBtn);

section.appendChild(number);
section.appendChild(img);
section.appendChild(name);
section.appendChild(evolution);

Container.appendChild(section);

document.getElementById('Pokedex').appendChild(Container);
}