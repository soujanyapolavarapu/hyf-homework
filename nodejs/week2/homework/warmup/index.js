const express = require("express");
const app = express();
const numbersRouter= express.Router();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

numbersRouter.get("/add", (request, response) => {
   const addition= Number(request.query.first) + Number(request.query.second);
   response.send('result is ' + addition);
  });

  numbersRouter.get("/multiply/:first/:second", (request, response) => {
    const multiplication= Number(request.params.first) * Number(request.params.second);
    response.send('result is ' + multiplication);
   });


app.use("/numbers" , numbersRouter);
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
