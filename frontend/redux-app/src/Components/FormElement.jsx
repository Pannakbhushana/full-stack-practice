import React, { useState } from "react";
import Styles from "../Styles/Navbar.module.css"

const initState={
    name:"",
    city:"",
    age:"",
    mobile:"",
    imageUrl:"",
    gender:"",
    description:"",
    isMarried:false
}

const FormElement=()=>{
    const [formData, setFormData]=useState(initState);
    const {name,city,age,mobile,imageUrl,gender,description,isMarried}=formData;

    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.name== 'isMarried' ? e.target.checked : e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
    }

    return <div style={{display:'flex',justifyContent:'center',marginTop:'1%'}}>

            <form className={Styles.formContainer} onSubmit={handleSubmit}>
                <h3>Add Users</h3>
                <input type="text" placeholder="Name" className={Styles.inputBox} name="name" onChange={handleChange} value={name} />
                <br />
                <br />
                <input type="text" placeholder="City" className={Styles.inputBox} name="city" onChange={handleChange} value={city} />
                <br />
                <br />

                <input type="number" placeholder="Age" className={Styles.inputBox} name="age" onChange={handleChange} value={age} />
                <br />
                <br />

                <input type="number" placeholder="Mobile" className={Styles.inputBox} name="mobile" onChange={handleChange} value={mobile} />
                <br />
                <br />

                <input type="text" placeholder="Image Url" className={Styles.inputBox} name="imageUrl" onChange={handleChange} value={imageUrl} />
                <br />
                <br />
            
                <select className={Styles.inputBox} name="gender" onChange={handleChange} value={gender}>
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="rather not say">Rather Not Say</option>
                </select>
                <br />
                <br />

                <textarea type="text" 
                          placeholder="Description" 
                          className={Styles.inputBox} 
                          style={{height:'100px'}} 
                          name="description" 
                          value={description}
                          onChange={handleChange}
                           />
                <br />
                <br />

                
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                Married
                <input type="checkbox" style={{width:'30px', height:'30px'}} name="isMarried" onChange={handleChange} value={isMarried}  />
                </div>
                <br />

                <input type="submit" value='submit' />
            </form>
    </div>
}

export default FormElement