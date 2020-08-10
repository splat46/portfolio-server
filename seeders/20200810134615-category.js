"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Website",
          createdAt: new Date(),
          updatedAt: new Date(),
          projectId: 1,
        },
        {
          name: "Graphic design",
          createdAt: new Date(),
          updatedAt: new Date(),
          projectId: 1,
        },
        {
          name: "DTP",
          createdAt: new Date(),
          updatedAt: new Date(),
          projectId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
