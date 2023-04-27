import { useEffect, useState } from "react";

const userToken = "patT0AtTT1YM0BpIl.87a1743ac6de4c99429322d157efb2df682b642b87f15f00aa4ac5dd93a2fed4";
const restaurantNameToken = "pataprwWBSrS6XzD8.d970ad63db1710b92a751abb2566842601a7695febc501874596b034dd894d4d";
const userBaseId = "appowrzt7MrycjPP1";
const userTableId = "Grid view"
const restaurantNameId = "restaurants-name"
const url = `https://api.airtable.com/v0/${userBaseId}/`;

export const useUserData = ()=>{
    const [userData, setUserData] = useState("");
    useEffect(()=>{
        getUserData();
    },[]);
    async function getUserData(){
        const raw = await fetch(url + userTableId, {headers: {"Authorization": `Bearer ${userToken}`}});
        const data = await raw.json();
        setUserData(data?.records);
    }
    return userData;
}

export const useRestaurantName = ()=>{
    const [restaurantName, setRestaurantName] = useState("");
    useEffect(()=>{
        getRestaurantName();
    }, []);
    async function getRestaurantName(){
        const raw = await fetch(url + restaurantNameId, {headers:{"Authorization":`Bearer ${restaurantNameToken}`}})
        const data = await raw.json();
        setRestaurantName(data?.records);
    }
    return restaurantName;
}
