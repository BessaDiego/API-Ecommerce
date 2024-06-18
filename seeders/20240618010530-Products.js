'use strict';

const products = require('../models/products');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Camisa',
        description: 'Polo',
        price: '100.00',
        categoriesId: '1',
        createdAt: new Date (),
        updatedAt: new Date ()
      }
    ], {});
}, 

  async down (queryInterface, Sequelize) {
    await queryInterface.buldDelete(Products,{name: 'Camisa'}, {})
  }
};
