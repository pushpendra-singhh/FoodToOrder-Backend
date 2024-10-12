const { json } = require("express")
const { MongoClient } = require("mongodb")

function mongodb_get_order(){
    //Mongodb connection 
    //code to insertOne data
    //return success
    console.log("connected to Mongodb and creating a order")
    return new Promise((resolve,reject)=>{
        var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
        console.log("connected to mongodb")
        var myDB=conn.db();
        var coll=myDB.collection("orders");
        var orders=coll.find().toArray()
    resolve( orders)
    })
    }
function mongodb_add_order(order){
    //Mongodb connection 
    //code to insertOne data
    //return success
    console.log("connected to Mongodb and creating a order")
    return new Promise((resolve,reject)=>{
        try{
        var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
        console.log("connected to mongodb")
        var myDB=conn.db();
        var coll=myDB.collection("orders");
        console.log("collection");
        coll.insertOne(order).then(function(result){
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
    function mongodb_update_order(order){
        console.log("connected to mongodb and creating a order")
        return new Promise((resolve,reject)=>{
            try{
                var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
        console.log("connected to mongodb")
        var myDB=conn.db();
        var coll=myDB.collection("orders");
       const filter={_id:order._id};
       coll.replaceOne(filter,order).then (function (result)
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
function mongodb_delete_order(order){
    console.log("connected to mongodb and creating a order")
    return new Promise((resolve,reject)=>{
        try{
            var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
    console.log("connected to mongodb")
    var myDB=conn.db();
    var coll=myDB.collection("orders");
   const filter={_id:order._id};
   coll.deleteOne(filter,order).then (function (result)
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
function mongodb_get_order_byid(order){
    console.log("connected to mongodb and getting a order")
    return new Promise((resolve,reject)=>{
        try{
            var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
    console.log("connected to mongodb")
    var myDB=conn.db();
    var coll=myDB.collection("orders");
   const filter={_id:order._id};
   coll.findOne(filter,order).then (function (result)
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
    module.exports={mongodb_add_order,mongodb_get_order,mongodb_update_order,mongodb_delete_order,mongodb_get_order_byid}
