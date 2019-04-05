var person = {

  firstName: 'Khurram',
  lastName:  'Virani',

  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }

}

module.exports = person;