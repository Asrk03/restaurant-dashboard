import React, { useState } from "react";

const MapFrame = (
    searchTerm
)=>{
    const [displayed, setDisplayed] = useState(true);
    const [BookMarkList, setBookMarkList] = useState([])
    const handleRemove = ()=>{
        setDisplayed(null);
    }
    const handleBookmark = ()=>{
        setCartList((previous)=>[...previous, ]);
    }
    if(!displayed)return null;
    return (
        <div>
            <iframe
                width="100%"
                height="400"
                src={`https://datastudio.google.com/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params={"ds2.name2":"${searchTerm}"}`}
            />
            <button onClick ={handleRemove}>-</button>
            <button onClick = {handleBookmark}>+</button>
        </div>
    )
}

export default MapFrame;