import * as React from 'react';
import "./form.css" 

const Form = () => {
// const[values, setValues] = useState({
    // firstname: '',
    // lastname: '',
    // email: '',
    // contact: '',
    // Flavor: ''
// })

const handleChanges = (e) => {
    setValues({...values, [e.target.name]:[e.target.value]})
}

const handleSubmit= (e) => {
    e.preventDefault()
    console.log(values)
}
// const ResetFun = (e) => {
    //setValues({firstname: '', lastname: '', email: ''})
    //
    //}

    return(
    
    <div className='container'>
        <h1>Sign up for deals on your favorite IceCream</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">First Name*</label>
            <input type="text" placeholder='Enter First Name' name='firstname'
            onChange={(e) => handleChanges(e)} required />
            
            <label htmlFor="lastname">Last Name*</label>
            <input type="text" placeholder="Enter Last Name" name='lastname' 
             onChange={(e) => handleChanges(e)}required />

            <label htmlFor="email">Email*</label>
            <input type="email" placeholder="Enter Email" name='email'
             onChange={(e) => handleChanges(e)} required/>

            <label htmlFor="email">Contact*</label>
            <input type="text" placeholder="Enter Phone #" name='contact'
             onChange={(e) => handleChanges(e)} required />

             <label htmlFor="Favorite Flavor">Flavor</label>   
           <select name="Flavor" id="Flavor"></select>
           <option value="Chocolate Peanut Butter" onChange={(e) => handleChanges(e)}required>Chocolate Peanut Butter</option>
           <option value="Chocolate Vanilla Swirl" onChange={(e) => handleChanges(e)}required>Chocolate Vanilla Swirl</option>
           <option value="Vanilla/Chocolate Swirl" onChange={(e) => handleChanges(e)}required>Vanilla/Chocolate Swirl</option>
           <option value="Chocolate Brownie" onChange={(e) => handleChanges(e)}required>Chocolate Brownie</option>
           <option value="Pistachio" onChange={(e) => handleChanges(e)}required>Pistachio</option>

           <button type="submit">Submit</button>
           <button type="button">Reset</button>
        </form>
    </div>
    )
}
export default Form

 
