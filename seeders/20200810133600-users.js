"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "User1",
          lastName: "Demo",
          password: "needtobehashed",
          phone: "+3160000000",
          email: "user1@test.com",
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "User2",
          lastName: "Demo",
          password: "needtobehashed",
          phone: "",
          email: "user2@test.com",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "User3",
          lastName: "Demo",
          password: "needtobehashed",
          phone: "",
          email: "user3@test.com",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
