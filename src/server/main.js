import express from "express";
import ViteExpress from "vite-express";
import session from 'express-session';

const app = express();
const port = '8000'

app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: false
}))

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.config({printViteDevServerHost: true})

ViteExpress.listen(app, 8000, () =>
  console.log(`Server is listening on port http://localhost:${port}`),
);
