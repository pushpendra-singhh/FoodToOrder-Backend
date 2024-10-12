const { json } = require("express")
const { MongoClient } = require("mongodb")

function mongodb_get_cart(){
    //Mongodb connection 
    //code to insertOne data
    //return success
    console.log("connected to Mongodb and getting carts")
    return new Promise((resolve,reject)=>{
        var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
        console.log("connected to mongodb")
        var myDB=conn.db();
        var coll=myDB.collection("carts");
        var carts=coll.find().toArray()
    resolve( carts)
    })
    }
function mongodb_add_cart(cart){
    //Mongodb connection 
    //code to insertOne data
    //return success
    console.log("connected to Mongodb and creating a cart")
    return new Promise((resolve,reject)=>{
        try{
        var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
        console.log("connected to mongodb")
        var myDB=conn.db();
        var coll=myDB.collection("carts");
        console.log("collection");
        coll.insertOne(cart).then(function(result){
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
    function mongodb_update_cart(cart){
        console.log("connected to mongodb and creating a cart")
        return new Promise((resolve,reject)=>{
            try{
                var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
        console.log("connected to mongodb")
        var myDB=conn.db();
        var coll=myDB.collection("carts");
       const filter={_id:cart._id};
       coll.replaceOne(filter,cart).then (function (result)
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
function mongodb_delete_cart(cart){
    console.log("connected to mongodb and creating a cart")
    return new Promise((resolve,reject)=>{
        try{
            var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
    console.log("connected to mongodb")
    var myDB=conn.db();
    var coll=myDB.collection("carts");
   const filter={_id:cart._id};
   coll.deleteOne(filter,cart).then (function (result)
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
function mongodb_get_cart_byid(cart){
    console.log("connected to mongodb and getting a cart by id")
    return new Promise((resolve,reject)=>{
        try{
            var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
    console.log("connected to mongodb")
    var myDB=conn.db();
    var coll=myDB.collection("carts");
   const filter={_id:cart._id};
   coll.findOne(filter,cart).then (function (result)
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
    module.exports={mongodb_add_cart,mongodb_get_cart,mongodb_update_cart,mongodb_delete_cart,mongodb_get_cart_byid}
