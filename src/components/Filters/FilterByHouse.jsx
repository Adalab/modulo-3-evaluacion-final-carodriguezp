import PropTypes from "prop-types";

function FilterByCharacter({ filterHouse, handleSelectHouse }) {

  const handleInputSelect = (ev) => {

    handleSelectHouse(ev.target.value)//recoje valor de los option
  }

  return (
    <div className="form-div">
      <label htmlFor="House">Select House of Howarts</label>

      <select
        className="input-select"
        onChange={handleInputSelect}
        value={filterHouse}

      > {/*LOS OPTION DEBEN TENER VALUE OBLIGATORIAMENTE */}
        <option value="All">All</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Ravenclaw" >Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>

      </select>
    </div>
  )
}

FilterByCharacter.propTypes = {
  filterHouse: PropTypes.string,
  handleSelectHouse: PropTypes.func,
  labelText: PropTypes.string,
}

export default FilterByCharacter
