import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
import PropTypes from "prop-types";

function Filters({ filterName, handleFilterName }) {
    return (
        <form>
            <FilterByName filterName={filterName} handleFilterName={handleFilterName} />
            <FilterByHouse />
        </form>
    )
}

Filters.propTypes = {
    filterName: PropTypes.string,
    handleFilterName: PropTypes.func
}

export default Filters
