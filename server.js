require("dotenv").config();
const jsonServer = require("json-server")
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
server.use(middlewares)
const allowAccessFromAnywhere = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    next();
}
server.use(allowAccessFromAnywhere)
const router = jsonServer.router("db.json")
server.use(router)
const PORT = process.env.PORT || 5005;
server.listen(PORT, () =>{
    console.log(`Server online, puerto: ${PORT}`)
    console.log(`Acceso local en http://localhost:${PORT}`)
})