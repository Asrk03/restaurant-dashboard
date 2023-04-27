import React from "react";

export default RestaurantList = ({data, searchInput})=>{
    <div>
        {
            data.filter((item)=>{
                    const searchTerm = searchInput.toLowerCase();
                    const term = item.fields.name.toLowerCase();

                    return (
                        searchTerm && 
                        term.startsWith(searchTerm) &&
                        term !== searchTerm
                    )

                })
                .slice(0, 10)
                .map((item)=>(
                    <div onClick = {()=> onSearch(item.fields.name)} key = {item.id}>
                        {item.fields.name}
                    </div>
                ))}
            </div>
}