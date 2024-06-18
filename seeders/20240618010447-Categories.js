'use strict';

const categories = require('../models/');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Camisa',
        description: 'Polo',
        createdAt: new Date (),
        updatedAt: new Date ()
      }
    ], {});
}, 

  async down (queryInterface, Sequelize) {
    await queryInterface.buldDelete(Categories,{description: 'Polo'}, {})
  }
};
