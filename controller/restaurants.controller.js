const restaurant_model = require("../models/restaurants.model.js");
const utility = require("../utility/util.js");
var getRestaurant=(req, res) => {
   // Validate request
   // console.log("method called")
   // var result=restaurant_model.mongodb_add_restaurant()
   // res.send(result)
   restaurant_model.mongodb_get_restaurant().then(
      function(restaurants){
         const objArr=restaurants
         objArr.forEach(o => {
            utility.renameKey(o, '_id', 'id');
         });
      res.send(restaurants)
   }),
      function(err){
         console.log(err);  
}};
var createRestaurant=(req, res) => {
   if(!req.body.r_Name){
      return res.status(400).send({
         message: "Restaurant content can not be empty"
      });
      return;
   }
      const restaurant = {
         _id: req.body.id,
         r_Name: req.body.r_Name,
         r_Img_Path: req.body.r_Img_Path,
         // a: req.body.a,
         r_Addresses: req.body.r_Addresses,
         // user_id: req.body.user_id,
         r_Dishes: req.body.r_Dishes,
         category_id: req.body.category_id
      };
         restaurant_model.mongodb_add_restaurant(restaurant).then(data=>{
            console.log("contrller recieved :"+JSON.stringify(data))
             res.send(data);
         }).catch(err=>{
            res.status(500).send({
               message:err.message || "some error occured while creating the restaurant"
            });
         });
      
   }
   var updateRestaurant=(req,res)=>{
      console.log(req.params.id)
      var rid=parseInt(req.params.id)
      if(!req.params){
         res.status(400).send({message: "content can not be empty!"});
         return;
      }
      const restaurant = {
         _id: rid,
         r_Name: req.body.r_Name,
         r_Img_Path: req.body.r_Img_Path,
         // a: req.body.a,
         r_Addresses: req.body.r_Addresses,
         // user_id: req.body.user_id,
         r_Dishes: req.body.r_Dishes,
         category_id: req.body.category_id
      };
      restaurant_model.mongodb_update_restaurant(restaurant)
      .then(data=>{
         console.log("controller update recieved:"+JSON.stringify(data))
         res.send(data);
      })
      .catch(err=>{
         res.status(500).send({
            message:
            err.message ||"some error occured while creting the restaurant"
         });
      });

   }
   var deleteRestaurant=(req,res)=>{
      console.log(req.params.id)
      var rid=parseInt(req.params.id)
      if(!req.params){
         res.status(400).send({message: "content can not be empty!"});
         return;
      }
      const restaurant = {
         _id: rid,
         r_Name: req.body.r_Name,
         r_Img_Path: req.body.r_Img_Path,
         // a: req.body.a,
         r_Addresses: req.body.r_Addresses,
         // user_id: req.body.user_id,
         r_Dishes: req.body.r_Dishes,
         category_id: req.body.category_id
      };
      restaurant_model.mongodb_delete_restaurant(restaurant)
      .then(data=>{
         console.log("controller update recieved:"+JSON.stringify(data))
         res.send(data);
      })
      .catch(err=>{
         res.status(500).send({
            message:
            err.message ||"some error occured while creting the restaurant"
         });
      });

   }

   var getRestaurantbyid=(req,res)=>{
      console.log(req.params.id)
      var rid=parseInt(req.params.id)
      if(!req.params){
         res.status(400).send({message: "content can not be empty!"});
         return;
      }
      const restaurant = {
         _id: rid,
         r_Name: req.body.r_Name,
         r_Img_Path: req.body.r_Img_Path,
         // a: req.body.a,
         r_Addresses: req.body.r_Addresses,
         // user_id: req.body.user_id,
         r_Dishes: req.body.r_Dishes,
         category_id: req.body.category_id
      };
      restaurant_model.mongodb_get_restaurant_byid(restaurant)
      .then(data=>{
         console.log("controller update recieved:"+JSON.stringify(data))
         res.send(data);
      })
      .catch(err=>{
         res.status(500).send({
            message:
            err.message ||"some error occured while creting the restaurant"
         });
      });

   }


   


module.exports= {getRestaurant,createRestaurant,updateRestaurant,deleteRestaurant,getRestaurantbyid}

// const restaurant_model = require("../models/restaurants.model.js");
// const utility = require("../utility/util.js");

// var getRestaurant = (req, res) => {
//    restaurant_model.mongodb_get_restaurant().then(
//       function(restaurants) {
//          const objArr = restaurants;
//          objArr.forEach(o => {
//             utility.renameKey(o, '_id', 'id');
//          });
//          res.send(restaurants);
//       },
//       function(err) {
//          console.log(err);
//       }
//    );
// };

// var createRestaurant = (req, res) => {
//    console.log("method called");
//    if (!req.body) {
//       return res.status(400).send({
//          message: "Restaurant content can not be empty"
//       });
//    }
//    const restaurant = {
//       _id: req.body.id,
//       r_Name: req.body.r_Name,
//       r_Img_Path: req.body.r_Img_Path,
//       // a: req.body.a,
//       r_Addresses: req.body.r_Addresses,
//       // user_id: req.body.user_id,
//       r_Dishes: req.body.r_Dishes,
//       category_id: req.body.category_id
//    };
//    restaurant_model.mongodb_add_restaurant(restaurant)
//       .then(data => {
//          console.log("controller received: " + JSON.stringify(data));
//          res.send(data);
//       })
//       .catch(err => {
//          res.status(500).send({
//             message: err.message || "Some error occurred while creating the restaurant"
//          });
//       });
// };

// module.exports = { getRestaurant, createRestaurant };
