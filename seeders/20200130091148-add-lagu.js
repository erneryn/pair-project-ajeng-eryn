'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
   return queryInterface.bulkInsert('Songs', [
     {
      title: 'Wonderwall',
      genre: 'pop',
      artist: 'Oasis',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      title: 'Adu Rayu',
      genre: 'pop',
      artist: 'Tulus Dkk',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      title: 'Always',
      genre: 'rock',
      artist: 'Bon Jovi',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      title: 'Desember',
      genre: 'acoustic',
      artist: 'Efek Rumah Kaca',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      title: 'Resah',
      genre: 'acoustic',
      artist: 'Payung Teduh',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      title: 'Bojoku Galak',
      genre: 'dangdut',
      artist: 'Via Vallen',
      createdAt: new Date(),
      updatedAt: new Date()
     },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Songs', null, {});
  }
};
