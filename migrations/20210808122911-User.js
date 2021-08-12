'use strict';
const Sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {


      await queryInterface.sequelize.query(" CREATE TABLE  `users` ( `id` INT NOT NULL AUTO_INCREMENT ,  `email` VARCHAR(222) NOT NULL ,  `name` VARCHAR(200) NOT NULL ,  `created_at` DATETIME NOT NULL ,  `updated_at` DATETIME NOT NULL ,  `password` TEXT NOT NULL ,    PRIMARY KEY  (`id`)) ENGINE = InnoDB; ");

    await queryInterface.sequelize.query(" ALTER TABLE `users` CHANGE `created_at` `createdAt` DATETIME NOT NULL;  ALTER TABLE `users` CHANGE `updated_at` `updatedAt` DATETIME NOT NULL; ");




  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
