
import 'bootstrap/dist/css/bootstrap.min.css';


const Filters = ({filterStatus, setFilterStatus}) => {

  return (

    <div className="filter-contaienr">
        <label htmlFor="statusFilter" className="filter-heading">Filter by Status: </label>
        <select 
        id="statusFilter"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
        className="input-field"    >
            
        <option value='All'>All</option>
        <option value='Pending'>Pending</option>
        <option value='In Prohress'>In Progress</option>
        <option value='Completed'>Completed</option>
        </select>
      
    </div>
  )
}

export default Filters
