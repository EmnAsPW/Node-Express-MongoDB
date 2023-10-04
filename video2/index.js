const fs =require('fs');

fs.writeFile('demo1.txt', "this is simple text", (err)=>{
    if(err){
      console.log("err");
    }else{
        console.log("successful");
    }
});