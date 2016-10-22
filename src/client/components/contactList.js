import React from 'react';

class ContactList extends React.Component {

  renderContacts(){
    let contactlist = [];
    this.props.contacts.forEach(contact => {
                contactlist.push(
                  <div className="contactElement">
                    <a href={contact.url}>
                      <i className={contact.class}></i>
                    </a>
                  </div>
                );
    });
    return contactlist;
  }

  render(){
    {console.log(this.props)};
    return(
      <div className="contactsRow">
        {this.renderContacts()}
      </div>
    );
  }
}

export default ContactList;
