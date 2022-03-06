import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css"
import { v4 as uuid } from "uuid"
import ContactList from "./ContactList"
import AddContact from "./AddContact"
import Header from "./Header"
import ContactDetail from "./ContactDetail"
import DeleteContact from "./DeleteContact"
import EditContact from "./EditContact"
import api from "../api/contact"

function App() {
  const [contacts, setContacts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResult, setSearchResult] = useState([])

  const retriveContacts = async () => {
    const response = await api.get('/contacts')
    return response.data
  }


  const addContactHandler = async (contact) => {
    // console.log(contact);
    // console.log(uuid())
    const request = { id: uuid(), ...contact, }
    const response = await api.post('/contacts', request)
    // console.log(response.data)
    setContacts([...contacts, response.data])
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${ id }`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList)
  }

  const updateContactHandler = async (contact) => {
    const response = await api.patch(`/contacts/${ contact.id }`, contact)
    //  console.log(response.data);
    const { id, name, email } = response.data
    setContacts(contacts.map((contact) => {
      return contact.id === id ? { ...response.data } : contact
    }))
  }

  const searchHandler = (searchTerm) => {
    // console.log(searchTerm);
    setSearchTerm(searchTerm)
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
      })
      // console.log(newContactList);
      setSearchResult(newContactList)
    }
    else {
      setSearchResult(contacts)
    }
  }

  useEffect(() => {
    const getAllContacts = async () => {
      const allcontacts = await retriveContacts()
      if (allcontacts) setContacts(allcontacts)
    }
    getAllContacts()
  }, [])


  return (
    <div className="ui container" >
      <Router>
        <Header />
        <Routes>

          <Route index element={<ContactList contacts={ searchTerm.length <1 ? contacts : searchResult} term={searchTerm} searchKeyword={searchHandler} />}></Route>
          <Route path='add-contact' element={<AddContact addContactHandler={addContactHandler} />}></Route>
          <Route path="delete-contact/:id" element={<DeleteContact deleteContactHandler={removeContactHandler} />}></Route>
          <Route path="edit-contact/:id" element={<EditContact editContactHandler={updateContactHandler} contacts={contacts} />}></Route>
          <Route path='contact/:id' element={<ContactDetail contacts={contacts} />}></Route>
          <Route path='*' element={<h1> page not found! </h1>}></Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App
