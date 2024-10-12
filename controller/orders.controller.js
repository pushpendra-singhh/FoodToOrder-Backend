const order_model = require("../models/orders.model.js");
const utility = require("../utility/util.js");
var getorder=(req, res) => {
   // Validate request
   // console.log("method called")
   // var result=restaurant_model.mongodb_add_restaurant()
   // res.send(result)
   order_model.mongodb_get_order().then(
      function(orders){
         const objArr=orders
         objArr.forEach(o => {
            utility.renameKey(o, '_id', 'id');
         });
      res.send(orders)
   }),
      function(err){
         console.log(err);  
}};
var createorder=(req, res) =>{
   if(!req.body. restaurant_id){
      return res.status(400).send({
         message: "order content can not be empty"
      });
      return;
   }
      const order = {
         _id: req.body.id,
         restaurant_id: req.body.restaurant_id,
         order_date: req.body.order_date,
         dishes_names: req.body.dishes_names,
         num_of_dishes: req.body.num_of_dishes,
         user_id: req.body.user_id,
         total_order:req.body.total_order,
         payment_mode:req.body.payment_mode

      
      };
         order_model.mongodb_add_order(order).then(data=>{
            console.log("contrller recieved :"+JSON.stringify(data))
             res.send(data);
         }).catch(err=>{
            res.status(500).send({
               message:err.message || "some error occured while creating the "
            });
         });
      
   }
   var updateorder=(req,res)=>{
      console.log(req.params.id)
      var oid=parseInt(req.params.id)
      if(!req.params){
         res.status(400).send({message: "content can not be empty!"});
         return;
      }
      const order = {
         _id: oid,
         restaurant_id: req.body.restaurant_id,
         order_date: req.body.order_date,
         dishes_names: req.body.dishes_names,
         num_of_dishes: req.body.num_of_dishes,
         user_id: req.body.user_id,
         total_order:req.body.total_order,
         payment_mode:req.body.payment_mode
      };
      order_model.mongodb_update_order(order)
      .then(data=>{
         console.log("controller update recieved:"+JSON.stringify(data))
         res.send(data);
      })
      .catch(err=>{
         res.status(500).send({
            message:
            err.message ||"some error occured while creting the "
         });
      });

   }
   var deleteorder=(req,res)=>{
      console.log(req.params.id)
      var oid=parseInt(req.params.id)
      if(!req.params){
         res.status(400).send({message: "content can not be empty!"});
         return;
      }
      const order = {
         _id: oid,
         restaurant_id: req.body.restaurant_id,
         order_date: req.body.order_date,
         dishes_names: req.body.dishes_names,
         num_of_dishes: req.body.num_of_dishes,
         user_id: req.body.user_id,
         total_order:req.body.total_order,
         payment_mode:req.body.payment_mode
      };
      order_model.mongodb_delete_order(order)
      .then(data=>{
         console.log("controller update recieved:"+JSON.stringify(data))
         res.send(data);
      })
      .catch(err=>{
         res.status(500).send({
            message:
            err.message ||"some error occured while creting the "
         });
      });

   }

   var getorderbyid=(req,res)=>{
      console.log(req.params.id)
      var oid=parseInt(req.params.id)
      if(!req.params){
         res.status(400).send({message: "content can not be empty!"});
         return;
      }
      const order = {
         _id: oid,
         restaurant_id: req.body.restaurant_id,
         order_date: req.body.order_date,
         dishes_names: req.body.dishes_names,
         num_of_dishes: req.body.num_of_dishes,
         user_id: req.body.user_id,
         total_order:req.body.total_order,
         payment_mode:req.body.payment_mode
      };
      order_model.mongodb_get_order_byid(order)
      .then(data=>{
         console.log("controller update recieved:"+JSON.stringify(data))
         res.send(data);
      })
      .catch(err=>{
         res.status(500).send({
            message:
            err.message ||"some error occured while creting the "
         });
      });

   }
   


   


module.exports= {getorder,createorder,updateorder,deleteorder,getorderbyid}

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
//       r_orderes: req.body.r_orderes,
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

// module.exports = { getRestaurant, createRestuser