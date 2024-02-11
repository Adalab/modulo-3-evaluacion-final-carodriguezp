import PropTypes from "prop-types";

function FilterByName({ filterName, handleFilterName, hasFiltered }) {



    return (
        <div className="">
            <label htmlFor="">Search for character</label>

            <input type="text" name="" id="" placeholder="Harry Potter" value={filterName} onChange={(ev) => handleFilterName(ev.target.value)} />

            {(!hasFiltered && filterName) && <p>No hay ningún personaje que coincida con la palabra {filterName}</p>}
        </div>
    )
}



FilterByName.propTypes = {
    filterName: PropTypes.string,
    handleFilterName: PropTypes.func,
    hasFiltered: PropTypes.bool,
}

export default FilterByName
