// Aquí hacemos la petición a la API

const getDataFromApi = () => {

    return fetch('https://harry-potter-api.onrender.com/personajes')
        .then(response => response.json())
        .then((data) => {
            const cleanData = data.map((character) => {
                {/*CLEAN DATA: Quedarnos solo con lo que nos interesa */ }
                {/* Retornaremos el objeto con la información que me interesa de cada character */ }
                return {
                    image: character.imagen,
                    name: character.personaje,
                    student: character.estudianteDeHogwarts, //NUEVO
                    house: character.casaDeHogwarts,
                    id: character.id,
                    sons: character.hijos //NUEVO
                };
            });
            return cleanData
        });
};

export default getDataFromApi