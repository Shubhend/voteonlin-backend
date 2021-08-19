'use strict';
const Sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {


      await queryInterface.sequelize.query(" CREATE TABLE  `votingline` ( `id` INT NOT NULL AUTO_INCREMENT ,  `usersId` INT NOT NULL ,  `title` VARCHAR(222) NOT NULL ,  `description` TEXT NOT NULL ,  `createdAt` DATETIME NOT NULL ,  `updatedAt` DATETIME NOT NULL ,    PRIMARY KEY  (`id`)) ENGINE = InnoDB;");




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
