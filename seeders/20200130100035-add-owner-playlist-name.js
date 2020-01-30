'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('UserPlaylists', [
        {
        PlaylistId: 2,
        SongId:3,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        PlaylistId: 2,
        SongId:1,
        createdAt: new Date(),
        updatedAt: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('UserPlaylists', null, {});
  }
};
