import {React } from "react";
import { Link , useParams } from 'react-router-dom';
import user from "../images/user.png"
const ContactDetail  = (props) => {
    let param = useParams();
    const id = param.id;
    const  contact = props.contacts.find(  (contact) => contact.id === id );
    // console.log(contact);
    // console.log(props);
    return (
        <div className="ui main">
            <div className="ui card centered">
                <div className="image">
                        <img src={user} alt="user"  />
                </div>
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div className="description">{contact.email}</div>
                </div>
                <div className="center-div">
                <Link to='/'>
                            <button className="ui button red center" > Back to Contact List</button>
                </Link>
                </div>
            </div>
    </div>
    );
};

export default ContactDetail;