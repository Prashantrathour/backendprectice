

const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
console.log(token=="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByYXNoYW50QGdtYWlsLmNvbSIsImlhdCI6MTY4NTE4ODEwM")
  if (token) {
    if(token=="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByYXNoYW50QGdtYWlsLmNvbSIsImlhdCI6MTY4NTE4ODEwM"){
      next();

    }else{
      res.status(404).send({ error: "please enter valid  token" });
    }
  } else {
    res.status(404).send({ error: "please enter token" });
  }
};
module.exports = auth;
