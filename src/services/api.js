// Aquí hacemos la petición a la API

const getDataFromApi = () => {

    return fetch('https://hp-api.onrender.com/api/characters/')
        .then(response => response.json())
        .then((data) => {
            const cleanData = data.map((character) => {
                {/*CLEAN DATA: Quedarnos solo con lo que nos interesa */ }
                {/* Retornaremos el objeto con la información que me interesa de cada character */ }
                return {
                    image: character.image,
                    name: character.name,
                    specie: character.species,
                    gender: character.gender,
                    house: character.house,
                    alive: character.alive,


                    id: character.id,
                };
            });
            return cleanData
        });
};

export default getDataFromApi