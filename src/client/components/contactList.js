import React from 'react';

class ContactList extends React.Component {

  renderContacts(){
    let contactlist = [];
    this.props.contacts.forEach(function (contact,i) {
              contactlist.push(
                <div className="contactElement" key={i}>
                  <a href={contact.url}>
                    <i className={contact.class}></i>
                  </a>
                </div>
              );
            });
    return contactlist;
  }

  render(){
    return(
      <div className="contactsRow">
        {this.renderContacts()}
      </div>
    );
  }
}

export default ContactList;
