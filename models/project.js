"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  project.init(
    {
      imgUrl: { type: DataTypes.STRING, allowNull: false },
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      domain: { type: DataTypes.STRING },
      attribute: { type: DataTypes.STRING },
      color: { type: DataTypes.INTEGER },
      fontFam: { type: DataTypes.INTEGER },
      pagLayout: { type: DataTypes.INTEGER },
      highlight: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "project",
    }
  );
  project.associate = function (models) {
    project.hasMany(models.category);
  };
  return project;
};
