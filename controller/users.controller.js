const user_model = require("../models/users.model.js");
const utility = require("../utility/util.js");
const {hash_code,decrypt_code}=require("../utility/util.js");
const {getjwt,verifyjwt}=require("../jsw_token.js");
var getuser=(req, res) => {
   // Validate request
   // console.log("method called")
   // var result=restaurant_model.mongodb_add_restaurant()
   // res.send(result)
   user_model.mongodb_get_user().then(
      function(users){
         const objArr=users
        
         objArr.forEach(o => {
            utility.renameKey(o, '_id', 'id');
            let passwordd=decrypt_code(o.password);
            o.password=passwordd;
         });
      res.send(users)
   }),
      function(err){
         console.log(err);  
}};
var getuserjwt=(req, res) => {
   res.send(getjwt(req.params.id));
};
var verifyuserjwt=(req, res) => {
   console.log(verifyjwt(req.params.id));
   res.send({"msg":"done"});
};
   
var createuser=(req, res) => {
  
   if(!req.body.first_name){
      return res.status(400).send({
         message: "user content can not be empty"
      });
      return;
   }
   if(!req.body.password){
      return res.status(400).send({
         message: "user password can not be empty"
      });
      return;
   }
   let hash_password=hash_code(req.body.password);
   
      const user = {
         _id: req.body.id,
         first_name: req.body.first_name,
         middle_name: req.body.middle_name,
         last_name: req.body.last_name,
         email: req.body.email,
         // a: req.body.a,
         // password: req.body.password,
         password:hash_password,
         // user_id: req.body.user_id,
         dob: req.body.dob,
         mobile: req.body.mobile,
         address: req.body.address,
         role: req.body.role

      };
         user_model.mongodb_add_user(user).then(data=>{
            
            console.log("contrller recieved :"+JSON.stringify(data))
             res.send(data);
         }).catch(err=>{
            res.status(500).send({
               message:err.message || "some error occured while creating the "
            });
         });
      
   }
   var updateuser=(req,res)=>{
      console.log(req.params.id)
      var rid=parseInt(req.params.id)
      if(!req.params){
         res.status(400).send({message: "content can not be empty!"});
         return;
      }
      let hash_password=hash_code(req.body.password);
      const user = {
        _id: req.body.id,
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password:hash_password,
        // a: req.body.a,
      //   password: req.body.password,
        // user_id: req.body.user_id,
        dob: req.body.dob,
        mobile: req.body.mobile,
        address: req.body.address,
        role: req.body.role
      };
      user_model.mongodb_update_user(user)
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
   var deleteuser=(req,res)=>{
      console.log(req.params.id)
      var uid=parseInt(req.params.id)
      if(!req.params){
         res.status(400).send({message: "content can not be empty!"});
         return;
      }
      const user = {
        _id: uid,
         first_name: req.body.first_name,
         middle_name: req.body.middle_name,
         last_name: req.body.last_name,
         email: req.body.email,
         // a: req.body.a,
         password: req.body.password,
         // user_id: req.body.user_id,
         dob: req.body.dob,
         mobile: req.body.mobile,
         address: req.body.address,
         role: req.body.role
      };
      user_model.mongodb_delete_user(user)
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

   var getuserbyid=(req,res)=>{
      console.log(req.params.id)
      var uid=parseInt(req.params.id)
      if(!req.params){
         res.status(400).send({message: "content can not be empty!"});
         return;
      }
      
      const user = {
        _id: uid,
         first_name: req.body.first_name,
         middle_name: req.body.middle_name,
         last_name: req.body.last_name,
         email: req.body.email,
         // a: req.body.a,

         password: req.body.password,
         user_id: req.body.user_id,
         dob: req.body.dob,
         mobile: req.body.mobile,
         address: req.body.address,
         role: req.body.role
      };
      user_model.mongodb_get_user_byid(user)
      .then(data=>{
         let passwordd=decrypt_code(data.password);
         data.password=passwordd;
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
   


   


module.exports= {getuser,createuser,updateuser,deleteuser,getuserbyid,getuserjwt,verifyuserjwt}

  // function(users){
      //    
      //    });
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