const express = require("express");
const app = express();
const router = express.Router();

app.use("/calculator" ,router);
router.use(express.urlencoded({extended:true}));

//app.get("/", (req, res) => res.send("nodejs week3 homework"));

router.get("/multiply", (request, response) => {
    try {
      const values = Object.values(request.query).flat();
      const multipleValues = values.reduce((accumulator,currentValue)=> accumulator * currentValue);
      response.send(` Your result is ${multipleValues}`);
    } catch (error) {
      throw error;
    }
  });

router.get("/add", (request, response) => {
    try {
      const values = Object.values(request.query).flat();
     const addValues =values.reduce((accumulator,currentValue)=> parseInt(accumulator + currentValue));
      response.send(` Your result is ${addValues}`);
    } catch (error) {
      throw error;
    }
  }); 

  router.get("/subtraction" , (request,response)=>{
    try{
        const values = Object.values(request.query).flat();
       const subValues =values.reduce((accumulator,currentValue)=> parseInt(accumulator - parseInt(currentValue)));
        response.send(` Your result is ${subValues}`);
    }
    catch(error){
      throw(error);
    }
  });
//{}

router.post("/multiply" , (request,response)=>{
  try{
    
      let numOne = Number(request.body.firstParam);
      let numTwo = Number(request.body.secondParam);
      const multiplication = numOne * numTwo;
      response.send(` Your result is ${multiplication}`);
  }
  catch(error){
    throw(error);
  }

});

router.post("/division" , (request,response)=>{
  try{
      const values = Object.values(request.body).flat();
     const subValues =values.reduce((accumulator,currentValue)=> parseInt(accumulator / parseInt(currentValue)));
      response.send(` Your result is ${subValues}`);
  }
  catch(error){
    throw(error);
  }
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));


