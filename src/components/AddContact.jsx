import React ,{useState} from "react";

import { Link  ,useNavigate } from 'react-router-dom';
const AddContact =(props) => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    let navigate = useNavigate();

    const add = (e) =>{
        e.preventDefault();
        if( name ==="" || email === ""){
            alert( " All the fields are mendatory")
            return ;
        }
        props.addContactHandler({name,email});
        navigate(`/`);
        // console.log(props);
    };
        return (
            <div className="ui main">
            <h2>Add Contact</h2>    
            <form  className="ui form" onSubmit ={ add  }>
                    <div className="field">
                        <label >Name</label>
                        <input 
                        type="text" 
                        name="name"
                        placeholder="Name" 
                        value= {name}
                        onChange={ (e) => setName( e.target.value)} />
                    </div>
                    <div className="field">
                        <label >Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="Email"  
                        value= {email}
                        onChange={(e) => setEmail(e.target.value) }/>
                    </div>
                    <button className="ui button blue left floated" > Add</button>
                    <Link to='/'>
                    <button className="ui button red right floated" > Back</button>
                    </Link>
            </form>
            </div>

        );
};


export default AddContact;