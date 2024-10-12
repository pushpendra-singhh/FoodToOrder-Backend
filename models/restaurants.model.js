const { json } = require("express")
const { MongoClient } = require("mongodb")

function mongodb_get_restaurant(){
    //Mongodb connection 
    //code to insertOne data
    //return success
    console.log("connected to Mongodb and creating a restaurant")
    return new Promise((resolve,reject)=>{
        var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
        console.log("connected to mongodb")
        var myDB=conn.db();
        var coll=myDB.collection("restaurants");
        var restaurants=coll.find().toArray()
    resolve( restaurants)
    })
    }
function mongodb_add_restaurant(restaurant){
    //Mongodb connection 
    //code to insertOne data
    //return success
    console.log("connected to Mongodb and creating a restaurant")
    return new Promise((resolve,reject)=>{
        try{
        var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
        console.log("connected to mongodb")
        var myDB=conn.db();
        var coll=myDB.collection("restaurants");
        console.log("collection");
        coll.insertOne(restaurant).then(function(result){
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
    function mongodb_update_restaurant(restaurant){
        console.log("connected to mongodb and creating a restaurant")
        return new Promise((resolve,reject)=>{
            try{
                var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
        console.log("connected to mongodb")
        var myDB=conn.db();
        var coll=myDB.collection("restaurants");
       const filter={_id:restaurant._id};
       coll.replaceOne(filter,restaurant).then (function (result)
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
function mongodb_delete_restaurant(restaurant){
    console.log("connected to mongodb and creating a restaurant")
    return new Promise((resolve,reject)=>{
        try{
            var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
    console.log("connected to mongodb")
    var myDB=conn.db();
    var coll=myDB.collection("restaurants");
   const filter={_id:restaurant._id};
   coll.deleteOne(filter,restaurant).then (function (result)
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
function mongodb_get_restaurant_byid(restaurant){
    console.log("connected to mongodb and getting a restaurant")
    return new Promise((resolve,reject)=>{
        try{
            var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
    console.log("connected to mongodb")
    var myDB=conn.db();
    var coll=myDB.collection("restaurants");
   const filter={_id:restaurant._id};
   coll.findOne(filter,restaurant).then (function (result)
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
    module.exports={mongodb_add_restaurant,mongodb_get_restaurant,mongodb_update_restaurant,mongodb_delete_restaurant,mongodb_get_restaurant_byid}
