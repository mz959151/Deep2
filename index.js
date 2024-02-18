const express = require("express");
const app = express();


app.use(express.json());


const PORT = process.env.PORT || 2024;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
