import React, { useState, useEffect } from 'react'
import './styles.css'
import Form from './Form';
import List from './List';

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Fikret",
            phone_number: "12345"
        },
        {
            fullname: "Damla",
            phone_number: "6422534"
        },
        {
            fullname: "Messi",
            phone_number: "95124"
        },
    ]);

    useEffect(() => {
    console.log(contacts)
    }, [contacts])
    return (
        <div className='container'>
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form setContacts={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts;