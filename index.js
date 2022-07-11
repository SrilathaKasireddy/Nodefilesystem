import  fs from 'fs';
import express from "express";
let today = new Date();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let filename = today.toString().replace(/ /g, "").replace(/:/g, "");
    let text = time;
    console.log(filename);

 const app = express();
 const PORT = process.env.PORT;


 app.get("/",function(request,response){
    response.send(filename+""+today)
})

 
app.get("/createfiles", function (request, response) {
   
    
   
        fs.writeFile(`./backup/${filename}.txt`, text, (err) =>
          console.log("Completed writing")
        );
        response.send(
          `File created  ${filename} and  ${text}`
        );
      }
    );
  ;
  


app.get("/readfiles",function(request,response){
    fs.readdir("./backup","utf-8",(err,data)=>{
        response.send("completed") 
        if(err){
            console.log(err);
         
           }
           else{
           console.log(data)}
          })
         

        })
        
   
        app.listen(PORT,()=>console.log(`server is started in${PORT}`));
