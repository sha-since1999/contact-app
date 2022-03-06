import React,{ useState, useEffect } from "react";
import { BrowserRouter  as Router ,  Routes , Route }  from 'react-router-dom' ;
import "./App.css";
import { v4 as uuid } from "uuid"
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import Header from "./Header"; 
import ContactDetail from "./ContactDetail";
import DeleteContact from "./DeleteContact"

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
const [contacts, setContacts] = useState([]);

const addContactHandler = (contact) => {
  // console.log(contact);
  // console.log(uuid())
  setContacts([...contacts, { id :uuid(), ...contact} ]);
};

const removeContactHandler = (id ) => {
  const newContactList= contacts.filter((contact) =>{
    return contact.id !== id ;
  });
  setContacts(newContactList);
};

useEffect(() => {
  const retriveContacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if( retriveContacts) {
    setContacts(retriveContacts);
  }
}, []);

useEffect( () => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
},[contacts]);




  return (
    <div className="ui container" >
      <Router>
        <Header/>
          <Routes>

            <Route  index  element= {<ContactList contacts ={contacts} />}></Route>
            <Route   path='add-contact'   element= {<AddContact addContactHandler = {addContactHandler} /> }></Route>
            <Route   path='contact/:id'   element ={ <ContactDetail contacts= {contacts} /> }></Route>
            <Route path="delete-contact/:id" element = {<DeleteContact deleteContactHandler= {removeContactHandler} />}></Route>
            <Route   path='*'   element= {<h1> page not found! </h1>}></Route>
         
          </Routes>
      </Router>
    </div>
  );
}

export default App;
