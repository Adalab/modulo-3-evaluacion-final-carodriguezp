import PropTypes from "prop-types";

function FilterByName({ filterName, handleFilterName }) {
    return (
        <>
            <label htmlFor="">Search for character</label>

            <input type="text" name="" id="" placeholder="Harry Potter" value={filterName} onChange={(ev) => handleFilterName(ev.target.value)} />
        </>
    )
}


FilterByName.propTypes = {
    filterName: PropTypes.string,
    handleFilterName: PropTypes.func
}

export default FilterByName
