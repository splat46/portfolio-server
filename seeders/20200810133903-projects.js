"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "projects",
      [
        {
          imgUrl:
            "https://wonenindestad.nl/application/files/7615/7824/8003/Logo_wonen-in-de-stad.nl.svg",
          title: "Wonen in de Stad",
          description:
            "Wonenindestad.nl the home rental and rental platform of the Netherlands is one of my ongoing projects that is quickly launched!",
          domain: "https://www.wonenindestad.nl",
          attribute: ["Responsive design", "Corporate identity"],
          color: "8a8a8a",
          fontFam: "Montserrat",
          pagLayout: 5,
          highlight: [
            "Rental platform for tenants and landlords",
            "Easy apply and respond system",
            "User dashboard for properties and messages",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("projects", null, {});
  },
};
