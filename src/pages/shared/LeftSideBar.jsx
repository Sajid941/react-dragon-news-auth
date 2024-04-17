import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";

const LeftSideBar = () => {
    const [categories ,setCategories]= useState([])
    useEffect(()=>{
        fetch("categories.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="space-y-6 ">
            <h1>All category</h1>
            {
                categories.map(category => <NavLink
                    to={`category${category.id}`} 
                    key={category.id} 
                    className={({ isActive }) => isActive ?"block  bg-[#E7E7E7] text-center p-3 rounded-lg":"block text-center p-3 rounded-lg"}
                    >{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideBar;