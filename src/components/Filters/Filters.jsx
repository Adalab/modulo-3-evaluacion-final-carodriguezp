import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
import PropTypes from "prop-types";

function Filters({ filterName, handleFilterName, filterHouse, handleFilterHouse }) {
    return (
        <form className="form">
            <FilterByName filterName={filterName} handleFilterName={handleFilterName} />
            <FilterByHouse filterHouse={filterHouse} handleSelectHouse={handleFilterHouse} />
        </form>
    )
}

Filters.propTypes = {
    filterName: PropTypes.string,
    handleFilterName: PropTypes.func,
    filterHouse: PropTypes.string,
    handleFilterHouse: PropTypes.func,
}

export default Filters
