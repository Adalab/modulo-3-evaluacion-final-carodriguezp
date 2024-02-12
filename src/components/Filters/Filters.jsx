import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
import PropTypes from "prop-types";

function Filters({ filterName, handleFilterName, hasFiltered, filterHouse, handleFilterHouse }) {
    return (
        <form className="form">
            <FilterByName filterName={filterName} handleFilterName={handleFilterName} hasFiltered={hasFiltered} />
            <FilterByHouse filterHouse={filterHouse} handleSelectHouse={handleFilterHouse} />
        </form>
    )
}

Filters.propTypes = {
    filterName: PropTypes.string,
    handleFilterName: PropTypes.func,
    filterHouse: PropTypes.string,
    handleFilterHouse: PropTypes.func,
    hasFiltered: PropTypes.bool,
}

export default Filters
