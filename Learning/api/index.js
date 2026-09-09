//fetch  function used for makinf HTTP requests to fetch resources 

//fetch(url, {method: "GET/POST/DELETE"})

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then((result) => {
//         if(!result.ok){
//             throw new Error("Could not fetch resource")
//         }
//         return result.json();
//     })
//     .then(data => console.log(data))
//     .catch((err) => console.log(err));


async function fetchData() {
    try {
        const pokemonName = document
            .getElementById("pokemonName")
            .value
            .toLowerCase();

        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();

        const pokemonSprite = data.sprites.front_default;

        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    } catch (error) {
        console.log(error);
    }
}