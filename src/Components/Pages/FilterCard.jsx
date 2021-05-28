import React from 'react'
import "../../Styles/FilterCard.css"
function FilterCard({title,data,filters,handleFilter}) {
    const [state,setState] = React.useState(true)
    return (
        <div className="filterCard">
            <div className="flexBox filterCardHead"><p>{title}</p> <button onClick={()=>setState(state=>!state)}>{state? "+" : "-"}</button></div>
            <div className={state?"displayNone" : "filterList"}>
                {data.map(item=><div key={item}> <input type="checkbox" onChange={handleFilter} checked={filters.includes(item)} name={item} /> <label>{item}</label></div>)}
            </div>
        </div>
    )
}

export default FilterCard
