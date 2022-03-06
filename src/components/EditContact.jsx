import React ,{useState } from "react";
import { Link  ,useNavigate,  useParams } from 'react-router-dom';
const EditContact =(props) => {
    
    let navigate = useNavigate();
    let param = useParams();
    const id = param.id;
    const changableContact=  props.contacts.find( (contact) => contact.id === id);
    console.log(changableContact);
    const [contact, setContact] = useState(changableContact);

    
    const update = (e) =>{
        e.preventDefault();
        props.editContactHandler(contact);
        navigate(`/`);
        // console.log(contact);
    };
        return (
            <div className="ui main">
            <h2>Add Contact</h2>    
            <form  className="ui form" onSubmit ={ update  }>
                    <div className="field">
                        <label >Name</label>
                        <input 
                        type="text" 
                        name="name"
                        placeholder="Name" 
                        value= {contact.name}
                        onChange={ (e) => setContact( { ...contact,name :e.target.value })} />
                    </div>
                    <div className="field">
                        <label >Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="Email"  
                        value= {contact.email}
                        onChange={(e) => setContact({ ...contact,email : e.target.value}) }/>
                    </div>
                    <button className="ui button blue left floated" > update</button>
                    <Link to='/'>
                    <button className="ui button red right floated" > Back</button>
                    </Link>
            </form>
            </div>

        );
};


export default EditContact;