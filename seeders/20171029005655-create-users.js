'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@test.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Jane',
        last_name: 'Price',
        email: 'janeprice@test.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
