import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function CharacterDetail({ character }) {


    let icon = "";
    let isAlive = "";

    if (character.alive) {
        isAlive = "Alive";
        icon = "fa-heart-pulse";
    } else {
        isAlive = "Dead";
        icon = "fa-heart-skull";
    }

    return (
        <div className="background-detail" >
            <img src="https://i.pngimg.me/thumb/f/720/m2H7G6H7Z5H7K9Z5.jpg" alt="" />

            <Link to={`/`} >
                <i className="fa-solid fa-square-xmark"></i>
            </Link>

            <div className="background-detail-div">
                <img className="img" src={character.image} alt={character.name} />
                <section className="background-detail-div-section">
                    <p>{character.name}</p>
                    <p>{isAlive} <i className={`fa-solid ${icon}`}></i> </p>

                    <p>{character.specie}</p>
                    <p>{character.gender}</p>
                    <p>{character.house}</p>
                </section>
            </div>
        </div>
    )

}

CharacterDetail.propTypes = {
    character: PropTypes.object,
    handleClick: PropTypes.func,
}

export default CharacterDetail
