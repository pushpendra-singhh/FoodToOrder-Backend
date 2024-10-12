const { json } = require("express")
const { MongoClient } = require("mongodb")

function mongodb_get_r_owner(){
    //Mongodb connection 
    //code to insertOne data
    //return success
    console.log("connected to Mongodb and creating a r_owner")
    return new Promise((resolve,reject)=>{
        var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
        console.log("connected to mongodb")
        var myDB=conn.db();
        var coll=myDB.collection("r_owners");
        var r_owners=coll.find().toArray()
    resolve( r_owners)
    })
    }
function mongodb_add_r_owner(r_owner){
    //Mongodb connection 
    //code to insertOne data
    //return success
    console.log("connected to Mongodb and creating a r_owner")
    return new Promise((resolve,reject)=>{
        try{
        var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
        console.log("connected to mongodb")
        var myDB=conn.db();
        var coll=myDB.collection("r_owners");
        console.log("collection");
        coll.insertOne(r_owner).then(function(result){
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
    function mongodb_update_r_owner(r_owner){
        console.log("connected to mongodb and creating a r_owner")
        return new Promise((resolve,reject)=>{
            try{
                var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
        console.log("connected to mongodb")
        var myDB=conn.db();
        var coll=myDB.collection("r_owners");
       const filter={_id:r_owner._id};
       coll.replaceOne(filter,r_owner).then (function (result)
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
function mongodb_delete_r_owner(r_owner){
    console.log("connected to mongodb and creating a r_owner")
    return new Promise((resolve,reject)=>{
        try{
            var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
    console.log("connected to mongodb")
    var myDB=conn.db();
    var coll=myDB.collection("r_owners");
   const filter={_id:r_owner._id};
   coll.deleteOne(filter,r_owner).then (function (result)
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
function mongodb_get_r_owner_byid(r_owner){
    console.log("connected to mongodb and getting a r_owner")
    return new Promise((resolve,reject)=>{
        try{
            var conn=new MongoClient("mongodb://127.0.0.1:27017/foodtoorder")
    console.log("connected to mongodb")
    var myDB=conn.db();
    var coll=myDB.collection("r_owners");
   const filter={_id:r_owner._id};
   coll.findOne(filter,r_owner).then (function (result)
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
    module.exports={mongodb_add_r_owner,mongodb_get_r_owner,mongodb_update_r_owner,mongodb_delete_r_owner,mongodb_get_r_owner_byid}
