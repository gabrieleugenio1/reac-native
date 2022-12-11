const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app =  express();
const models = require('./models');
let user = models.User;

app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(express.json());

let PORT = process.env.PORT || 3000;

app.post('/create', async (req,res) => {
  let email = req.body.email;
  let password = req.body.password;
  let salt = bcrypt.genSaltSync(10);
  let senhaCriptografada = bcrypt.hashSync(password, salt);
  let response = await user.create({
  email: email,
  password: senhaCriptografada    
  });
  console.log(response);
  res.send(response);  

});

app.post('/login', async (req, res) =>{
    let email = req.body.email;
    let password = req.body.password;
    await user.findOne({where: {email:email}}).then( usuario =>{
    if (usuario != undefined) {
        if (bcrypt.compareSync(password, usuario.password)) {
          res.send(usuario)
        } else {
            res.send(JSON.stringify("Error"));
        };
      } else {
        res.send(JSON.stringify("Error"));
      };
    }
   );
});


app.listen(PORT, ()=>{ console.log("Aplicação rodando na porta " + PORT);});