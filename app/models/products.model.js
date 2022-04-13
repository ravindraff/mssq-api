module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define("items", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price:{
          type: Sequelize.FLOAT
      },
      
    });
  
    return Products;
  };