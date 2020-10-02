const { BUY_CAKE } = require("./cakeTypes");

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};
