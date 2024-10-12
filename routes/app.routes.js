// module.exports = app => {
//   const restaurants = require("../controller/restaurants.controller");
//   const users=require("../controller/users.controller");

//   var router = require("express").Router();

//   // Create a new Restaurant
//   router.get("/", restaurants.getRestaurant);
//   router.post("/", restaurants.createRestaurant);
//   router.put("/:id",restaurants.updateRestaurant);
//   router.delete("/:id",restaurants.deleteRestaurant);
//   router.get("/:id",restaurants.getRestaurantbyid)
//   app.use("/restaurants", router);
//   //create a new User
//   router.get("/", users.getuser);
//   router.post("/", users.createuser);
//   router.put("/:id",users.updateuser);
//   router.delete("/:id",users.deleteuser);
//   router.get("/:id",users.getuserbyid)
//   //router.post("/restaurants", restaurants.createRestaurant);
 
//   app.use("/users", router);
// }

module.exports = app => {
  const restaurants = require("../controller/restaurants.controller");
  const users = require("../controller/users.controller");
  const carts=require("../controller/carts.controller");
  const orders=require("../controller/orders.controller");
  const r_owners=require("../controller/r_owners.controller");

  const restaurantRouter = require("express").Router();
  const userRouter = require("express").Router();
  const cartRouter =require("express").Router();
  const orderRouter =require("express").Router();
  const r_ownerRouter =require("express").Router();

  // Define routes for restaurants controller
  restaurantRouter.get("/", restaurants.getRestaurant);
  restaurantRouter.post("/", restaurants.createRestaurant);
  restaurantRouter.put("/:id", restaurants.updateRestaurant);
  restaurantRouter.delete("/:id", restaurants.deleteRestaurant);
  restaurantRouter.get("/:id", restaurants.getRestaurantbyid);

  // Define routes for users controller
  userRouter.get("/", users.getuser);
userRouter.post("/", users.createuser);
userRouter.put("/:id", users.updateuser);
userRouter.delete("/:id", users.deleteuser);
userRouter.get("/jwt/:id", users.getuserjwt);
userRouter.get("/:id", users.getuserbyid);
userRouter.get("/verify/:id", users.verifyuserjwt);


   // Define routes for carts controller
 cartRouter.get("/", carts.getcart);
 cartRouter.post("/", carts.createcart);
 cartRouter.put("/:id", carts.updatecart);
 cartRouter.delete("/:id", carts.deletecart);
 cartRouter.get("/:id", carts.getcartbyid);

 // Define routes for orders controller
 orderRouter.get("/", orders.getorder);
 orderRouter.post("/", orders.createorder);
 orderRouter.put("/:id", orders.updateorder);
 orderRouter.delete("/:id", orders.deleteorder);
 orderRouter.get("/:id", orders.getorderbyid);

  // Define routes for r_owners controller
  r_ownerRouter.get("/", r_owners.getr_owner);
  r_ownerRouter.post("/", r_owners.creater_owner);
  r_ownerRouter.put("/:id", r_owners.updater_owner);
  r_ownerRouter.delete("/:id", r_owners.deleter_owner);
  r_ownerRouter.get("/:id", r_owners.getr_ownerbyid);

  // Mount routers on different paths
  app.use("/restaurants", restaurantRouter);
  app.use("/users", userRouter);
  app.use("/carts", cartRouter);
  app.use("/orders", orderRouter);
  app.use("/r_owners", r_ownerRouter);
  
}
