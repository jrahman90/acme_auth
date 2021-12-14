const { syncAndSeed } = require("./db");
const app = require("./app");
const bcrypt = require("bcrypt");

const init = async () => {
  await syncAndSeed();
  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`listening on port ${port}`));
  const hashed = await bcrypt.hashed("password", 5);
  console.log(hashed);
};

init();
