const { json } = require("express")
const { MongoClient } = require("mongodb")


function mongodb_get_user(){
    //Mongodb connection 
    //code to insertOne data
    //return success
    console.log("connected to Mongodb and getting users")
    return new Promise((resolve,reject)=>{
        var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
        console.log("connected to mongodb")
        var myDB=conn.db();
        var coll=myDB.collection("users");
        var users=coll.find().toArray()
    resolve( users)
    })
    }
function mongodb_add_user(user){
    //Mongodb connection 
    //code to insertOne data
    //return success
    console.log("connected to Mongodb and creating a user")
    return new Promise((resolve,reject)=>{
        try{
        var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
        console.log("connected to mongodb")
        var myDB=conn.db();
        var coll=myDB.collection("users");
        console.log("collection");
        coll.insertOne(user).then(function(result){
            console.log("insertOne result:" +JSON.stringify(result));
            resolve(result);
        })
    }
    catch(error){

    }
    finally{

    }
        
    //     var restaurants=coll.find().toArray()
    // return{'id':1,'r_name':'test restaurant'}
    })}
    function mongodb_update_user(user){
        console.log("connected to mongodb and creating a user")
        return new Promise((resolve,reject)=>{
            try{
                var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
        console.log("connected to mongodb")
        var myDB=conn.db();
        var coll=myDB.collection("users");
       const filter={_id:user._id};
       coll.replaceOne(filter,user).then (function (result)
        {
        console.log("replaceOne result:"+JSON.stringify(result));
        resolve (result);
        })
            }
    catch(error){

    }
    finally{

    }
}
 )
}
function mongodb_delete_user(user){
    console.log("connected to mongodb and creating a user")
    return new Promise((resolve,reject)=>{
        try{
            var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
    console.log("connected to mongodb")
    var myDB=conn.db();
    var coll=myDB.collection("users");
   const filter={_id:user._id};
   coll.deleteOne(filter,user).then (function (result)
    {
    console.log("replaceOne result:"+JSON.stringify(result));
    resolve (result);
    })
        }
catch(error){

}
finally{

}
}
)
}
function mongodb_get_user_byid(user){
    console.log("connected to mongodb and getting a user by id")
    return new Promise((resolve,reject)=>{
        try{
            var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
    console.log("connected to mongodb")
    var myDB=conn.db();
    var coll=myDB.collection("users");
   const filter={_id:user._id};
   coll.findOne(filter,user).then (function (result)
    {
    console.log("findOne result:"+JSON.stringify(result));
    resolve (result);
    })
        }
catch(error){

}
finally{

}
}
)
} 
    module.exports={mongodb_add_user,mongodb_get_user,mongodb_update_user,mongodb_delete_user,mongodb_get_user_byid}
