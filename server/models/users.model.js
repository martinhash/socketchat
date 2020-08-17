class Users {
  constructor() {
    this.persons = [];
  }
  addPerson(id, name) {
    let person = { id, name };
    this.persons.push(person);
    return this.persons;
  }
  getPerson(id) {
    let person = this.persons.filter((person) => person.id === id)[0];
    return person;
  }
  getPersons() {
    return this.persons;
  }
  getPersonsByRoom(room) {
    return this.persons;
  }
  deletePerson(id) {
    personToDelete = this.getPerson(id);
    this.persons = this.persons.filter((person) => person.id !== id);
    return personToDelete;
  }
}

module.exports = { Users };
