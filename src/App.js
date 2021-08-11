import { connect } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Container from './components/Container';
import './App.css';

function App({ contactsLength }) {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contactsLength > 1 && <Filter />}

      {contactsLength > 0 ? (
        <ContactList />
      ) : (
        <p>Currently your phonebook has no contacts. Please add them.</p>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  contactsLength: state.contacts.items.length,
});

export default connect(mapStateToProps)(App);
