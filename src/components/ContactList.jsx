import React from "react";
import ContactCard from "./ContactCard";
import { Link } from 'react-router-dom';

const ContactList = (props) => { 

    // const contacts= [
    //     {
    //         name: 'rohit',
    //         email: "sahu@gmail.com",
    //     },
    // ]
    const renderContactList = props.contacts.map( (contact) => {
        return (
            <ContactCard contact= {contact}  key= {contact.id}   />
        );
    });
return (
    <div className="ui celled list">
        <h2>Contact List
            <Link to ='add-contact'>
                <button className="ui button blue right floated "> Add Contact</button>
            </Link>
        </h2>
        {renderContactList}
    </div>
);

};

export default ContactList;