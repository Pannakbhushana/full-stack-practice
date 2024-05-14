import React from "react";
import Styles from "../Styles/Navbar.module.css";
import {NavLink} from "react-router-dom";

const navElm=[
    {path:'/',elm:"Home"},
    {path:'/aboutme',elm:"About Me"},
    {path:'/auth',elm:"login"}
]

const Navbar=()=>{
    return <div className={Styles.container}>
        {navElm.map((el,i)=>{
           return <NavLink 
                    key={i} 
                    to={el.path}
                    className={({isActive})=>{
                       return isActive ? Styles.active : Styles.default
                    }}
                    >{el.elm}</NavLink>
        })}
    </div>
}

export default Navbar