import React from 'react'

const init={
    job_title:"",
    Role:"",
    experience:"",
    location:"",
    company:"",
    jobtype:"",
    max_salary:"",
    min_salary:""
    }
function SearchBarComponent() {
    const [query,setQuery] = React.useState(init)
    const{experience,location}=query

return (
<div className="SearchComponents">
    <div>
        <img width="20px" src="https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png" alt="search"/> 
        <input type="text" value={job_title} name="job_title" placeholder='Search for keyword'onChange={handleChange} />
    </div>
    <div>
        <img width="20px" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-location-512.png" alt=""/>
        <input  placeholder='Location' type="text" value={location} name="location"onChange={handleChange} />
    </div>
    <div>
    <input className='inputi' placeholder='Experience' type="text" value={experience} name="experience" onChange={handleChange} />
    </div>
    <button></button>

</div>
)
}

export default SearchBarComponent