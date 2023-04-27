import React from "react";
import { useRestaurantName } from "../utils/dataFetching";
import MapFrame from "./MapFrame";
import RestaurantSearch from "./RestaurantSearch";
import RestaurantList from "./RestaurantList";

const HomePage = ()=>{
    const [searchInput, setSearchInput] = useState("");
    const raw = useRestaurantName();
    const data = Object.values(raw);
    const onSearch = (searchItem)=>{
        return <MapFrame searchItem/>
    }
    return (
        <div>
            <RestaurantSearch {...searchInput}/>
            <RestaurantList {...{data}, searchInput}/>
            
        </div>
    )
}
export default HomePage;