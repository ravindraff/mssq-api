module.exports = (sequelize, Sequelize) => {
    const Materials = sequelize.define("materials", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Materials;
  };
  