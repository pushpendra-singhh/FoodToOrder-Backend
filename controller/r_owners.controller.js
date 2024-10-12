const r_owner_model = require("../models/r_owners.model.js");
const utility = require("../utility/util.js");
var getr_owner=(req, res) => {
   // Validate request
   // console.log("method called")
   // var result=restaurant_model.mongodb_add_restaurant()
   // res.send(result)
   r_owner_model.mongodb_get_r_owner().then(
      function(r_owners){
         const objArr=r_owners
         objArr.forEach(o => {
            utility.renameKey(o, '_id', 'id');
         });
      res.send(r_owners)
   }),
      function(err){
         console.log(err);  
}};
var creater_owner=(req, res) =>{
   if(!req.body.id){
      return res.status(400).send({
         message: "r_owner content can not be empty"
      });
      return;
   }
      const r_owner = {
         _id: req.body.id,
        
         restaurant_ids:req.body.restaurant_ids,
         
      };
         r_owner_model.mongodb_add_r_owner(r_owner).then(data=>{
            console.log("contrller recieved :"+JSON.stringify(data))
             res.send(data);
         }).catch(err=>{
            res.status(500).send({
               message:err.message || "some error occured while creating the "
            });
         });
      
   }
   var updater_owner=(req,res)=>{
      console.log(req.params.id)
      var roid=parseInt(req.params.id)
      if(!req.params){
         res.status(400).send({message: "content can not be empty!"});
         return;
      }
      const r_owner = {
         _id: roid,
        
         restaurant_ids:req.body.restaurant_ids,
      };
      r_owner_model.mongodb_update_r_owner(r_owner)
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
   var deleter_owner=(req,res)=>{
      console.log(req.params.id)
      var roid=parseInt(req.params.id)
      if(!req.params){
         res.status(400).send({message: "content can not be empty!"});
         return;
      }
      const r_owner = {
         _id: roid,
        
         restaurant_ids:req.body.restaurant_ids,
      };
      r_owner_model.mongodb_delete_r_owner(r_owner)
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

   var getr_ownerbyid=(req,res)=>{
      console.log(req.params.id)
      var roid=parseInt(req.params.id)
      if(!req.params){
         res.status(400).send({message: "content can not be empty!"});
         return;
      }
      const r_owner = {
         _id: roid,
       
         restaurant_ids:req.body.restaurant_ids,
      };
      r_owner_model.mongodb_get_r_owner_byid(r_owner)
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
   


   


module.exports= {getr_owner,creater_owner,updater_owner,deleter_owner,getr_ownerbyid}

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