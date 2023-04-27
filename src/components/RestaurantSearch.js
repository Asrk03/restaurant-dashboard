import React from "react";

export default RestaurantSearch = (searchInput)=>{
    return (
        <div>
            <input type="text" value = {searchInput} onChange={(e)=> setSearchInput(e.target.value)}/>
            <button onClick={()=>onSearch(value)}>Add</button>
        </div>
    )
}