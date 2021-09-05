'use strict';
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('people',
      Array.from({ length: 50 }).map((d, i) =>
      ({
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        age: Math.floor(Math.random() * 70),
        gender: (Math.floor((Math.random() * 10)) % 2 === 1)? 'M': 'F',
        country: faker.address.country(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
      ), {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
