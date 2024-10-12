const cart_model = require("../models/carts.model.js");
const utility = require("../utility/util.js");
var getcart=(req, res) => {
   // Validate request
   // console.log("method called")
   // var result=restaurant_model.mongodb_add_restaurant()
   // res.send(result)
   cart_model.mongodb_get_cart().then(
      function(carts){
         const objArr=carts
         objArr.forEach(o => {
            utility.renameKey(o, '_id', 'id');
         });
      res.send(carts)
   }),
      function(err){
         console.log(err);  
}};
var createcart=(req, res) =>{
   console.log("req.body"+req.body.id);
   if(!req.body.id){
      return res.status(400).send({
         message: "cart content can not be empty"
      });
      return;
   }
      const cart = {
         // _id: req.body.id,
         // p_name: req.body.p_name,
         // p_img_path: req.body.p_img_path,
         // p_price: req.body.p_price,
         // p_quantity: req.body.p_quantity,
         // p_total_cost: req.body.p_total_cost,
         // r_id:req.body.r_id,
         // d_id:req.body.d_id,
         // u_id:req.body.u_id,
         _id:req.body.id,
         user_id:req.body.user_id,
         productarr:req.body.productarr,
         total:req.body.total
      
      };
         cart_model.mongodb_add_cart(cart).then(data=>{
            console.log("contrller recieved :"+JSON.stringify(data))
             res.send(data);
         }).catch(err=>{
            res.status(500).send({
               message:err.message || "some error occured while creating the "
            });
         });
      
   }
   var updatecart=(req,res)=>{
      console.log(req.params.id)
      var cid=parseInt(req.params.id)
      if(!req.params){
         res.status(400).send({message: "content can not be empty!"});
         return;
      }
      const cart = {
         _id: req.body.user_id,
         user_id:req.body.user_id,
         productarr:req.body.productarr,
         total:req.body.total
      };
      cart_model.mongodb_update_cart(cart)
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
   var deletecart=(req,res)=>{
      console.log(req.params.id)
      var cid=parseInt(req.params.id)
      if(!req.params){
         res.status(400).send({message: "content can not be empty!"});
         return;
      }
      const cart = {
         _id: cid,
         user_id:req.body.user_id,
         productarr:req.body.productarr,
         total:req.body.total
      };
      cart_model.mongodb_delete_cart(cart)
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

   var getcartbyid=(req,res)=>{
      console.log(req.params.id)
      var cid=parseInt(req.params.id)
      if(!req.params){
         res.status(400).send({message: "content can not be empty!"});
         return;
      }
      const cart = {
         _id: cid,
         user_id:req.body.user_id,
         productarr:req.body.productarr,
         total:req.body.total
      };
      cart_model.mongodb_get_cart_byid(cart)
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
   


   


module.exports= {getcart,createcart,updatecart,deletecart,getcartbyid}

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

// module.exports = { getRestaurant, createRestuser