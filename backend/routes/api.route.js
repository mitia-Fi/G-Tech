const router = require('express').Router();
const { query } = require('express');
const mysql = require("mysql");
const {google} = require('googleapis')
const sendmail = require('sendmail')();

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"", //your db name
    port: //your mysql port
  });

//gestion salle
router.get('/salle', async (req, res, next) => {
  db.query("SELECT * FROM `Salle`",
  (err,data) => {
    if(err){
        console.log("Impossible de recuperer les donnees");
    }else{
        res.send(data)
    }
  })
});
router.get('/suivi-cours', async (req, res, next) => {
    db.query("SELECT * FROM `Module`",
    (err,data) => {
      if(err){
          console.log("Impossible de recuperer les donnees");
      }else{
          res.send(data)
      }
    })
  });
//g1
router.get("/lgun",async (req, res, next)=>{
    db.query("SELECT * FROM Etudiant WHERE Classe_Etudiant='L1G1' ",
        (err,data) => {
            if(err){console.log("Impossible de recuperer les donnees");}else{res.send(data)}
          })
});
router.get("/lgdeux",async (req, res, next)=>{
    db.query("SELECT * FROM Etudiant WHERE Classe_Etudiant='L1G2' ",
        (err,data) => {
            if(err){console.log("Impossible de recuperer les donnees");}else{res.send(data)}
          })
});

//gestion suivi du cours
router.get('/suivi-cours', async (req, res, next) => {
    db.query("SELECT * FROM `Module`",
    (err,data) => {
      if(err){
          console.log("Impossible de recuperer les donnees");
      }else{
          res.send(data)
      }
    })
  });
router.get("/GestionProf/list",(req,res)=>{
    db.query(`SELECT * FROM Login WHERE status = 0`,
    (err,data)=>{
        if(err){
            console.log("Impossible de recuperer les donnees");
        }else{
            res.send(data)
        }
    })
});
router.post("/GestionProf/supprimer/:id",(req,res)=>{
  const id = req.params["id"];
  console.log(id)
  db.query(
      `DELETE FROM Login WHERE id=${id}`,
      (err,success) => {
          if(err){
              console.log("Impossible de suppprimer l'id"+id);
          }else{
              res.send({
                  message : "Les informations ont bien ete supprimer"
              })
          }
      }
  )
})
router.post("/GestionProf/ajouter",(req,res)=>{
  const params = req.body;
  console.log(params)
  db.query(`INSERT INTO Login (Nom,contact,Debut,Email,Password,status) VALUES(?,?,?,?,?,0)`
,[params[0],params[1],new Date().getFullYear(),params[2],params[3]],
      (err,_) => {
          if(err){
              console.log("Impossible d'enregidtrer,",err);
          }else{
              console.log("success");
          }
      }
  )
});

router.get("/Module",(req,res)=>{
  db.query(
      `SELECT * FROM Module
      `,
      (err,values) => {
          if(err){
              console.log("Impossible d'enregidtrer,",err);
          }else{
              console.log("success to get module");
              res.send({
                  data  : values
              })
          }
      }
  )
});
router.post("/Module/delete/:Id",(req,res)=>{
  const params = req.params;
  db.query(
      `DELETE FROM Module WHERE ID=${params.Id}
      `,
      (err,values) => {
          if(err){
              console.log("Impossible de supprimer ce module,",err);
          }else{
              console.log("success to delete");
              res.send({
                  message : "Success to delete module"
              })
          }
      }
  )
});
router.post("/Module/supprimer/:Num_Etudiant",(req,res)=>{
    const params = req.params;
    db.query(
        `DELETE FROM Et WHERE ID=${params.Num_Etudiant}
        `,
        (err,values) => {
            if(err){
                console.log("Impossible de supprimer ce module,",err);
            }else{
                console.log("success to delete");
                res.send({
                    message : "Success to delete module"
                })
            }
        }
    )
  });
router.post("/Module/ajouter",(req,res)=>{
    const params = req.body;
    console.log(params[6])
    var hey = params[6]
    db.query(
        `INSERT INTO Module(Code, Nom_Module, Nom_Prof, Annee_Scolaire, Credit, Vh, Vh_Restant, Vh_Reel, suivie, Classes_Etudiants, Vh_Eff) 
        VALUES (?,?,?,?,?,?,?,'0','En cours','${hey}','0')
        `,[params[2],params[0],params[1],params[5],params[3],params[4],params[4],'0',"En cours",{hey},'0'],
        (err,_) => {
            if(err){
                console.log("Impossible d'enregidtrer,",err);
            }else{
                console.log("success");
            }
        }
    )
});
router.post("/Etud/ajouter",(req,res)=>{
    const params = req.body;
    db.query(
        `INSERT INTO Etudiant(Nom_Etudiant, Prenom_Etudiant, Mail_Etudiant, Classe_Etudiant, Anne_Scolaire)
         VALUES (?,?,?,?,?)
        `,[params[0],params[1],params[2],params[4],params[3]],
        (err,_) => {
            if(err){
                console.log("Impossible d'enregidtrer,",err);
            }else{
                console.log("success");
            }
        }
    )
});
router.post("/login",(req,res)=>{
    const params = req.body;
    console.log(params)
    db.query(`SELECT * FROM Login WHERE Email LIKE '${params[0]}' AND Password LIKE '${params[1]}'`,(err,result)=>{
        if(err){
            console.log("Une erreur s'est produit dans le login :",err);
        }else{
            if(result.length == 1){
                res.send({
                    profile : result,
                    message : "Login Successfully !"
                })
            }else{
                res.send({
                    message : "Check your Email and Password"
                })
            }
        }
    })
})
router.post("/getNif", async (req,res,next) =>{
    const nom = req.body.nom
    console.log(nom)
    db.query(`SELECT * FROM Prof WHERE Nom_Prof = '${nom}' `,
      (err,data) => {
        if(err){
            console.log("Impossible de recuperer les donnees");
        }else{
            res.send(data)
        }
})
})
router.post("/getFacture", async (req, res, next) => {
    const date = new Date().getDate()
    console.log(date)
    const nom = req.body.nom
    console.log(nom)
    if(date == 28){
      db.query(`SELECT * FROM Module WHERE Nom_Prof = '${nom}' `,
      (err,data) => {
        if(err){
            console.log("Impossible de recuperer les donnees");
        }else{
            res.send(data)
        }
      })
    
    }else{
        console.log('ATTENDRE LE 25e DU MOIS')
      }
    });
router.post("/getEdt", async (req, res, next) => {
const jour = new Date().toLocaleString('en-us', {weekday: 'long'})
var d = new Date();
d.setDate(d.getDate() - 5);
const j = d.toLocaleString()
const nom = req.body.nom
console.log(jour)
if(jour == 'Friday'){
db.query(`SELECT * FROM Edt WHERE start <='${j}' AND Nom_Prof='${nom}' `,
(err,data) => {
    if(err){
        console.log("Impossible de recuperer les donnees");
    }else{
        res.send(data)
    }
})}else{
    console.log('Attendre Samedi pour l attestation')
}
});
router.post("/updateTime",(req,res,next)=>{
const mod=req.body.mod
const temps = req.body.temps
const cas =req.body.star
const ns = req.body.ns
console.log(mod)
console.log(temps)
console.log(cas)
console.log(ns)

const reel = db.query(`SELECT Vh_Reel FROM Module WHERE Nom_Module='${mod}'`,
(err,res)=>{
if(err){
console.log('ts mety')
}
console.log(res)
var string=JSON.stringify(res);
var json =  JSON.parse(string);
var hor = json[0].Vh_Reel
console.log(hor)
next();
const okay = hor + temps
console.log(okay)
const ok = db.query(`UPDATE Module SET Vh_Reel= '${okay}'`)
const ko = db.query(`UPDATE Salle SET Etat_salle='libre',Classe_Etudiant='0',Nom_Module='0',Nom_Prof='0' WHERE Num_Salle = '${ns}'`)
  
      //const edt = db.query(`UPDATE Edt SET duree='${hor}' WHERE Nom_Module='${mod}' AND start='${cas}'`)
    })
  })
const GOOGLE_CLIENT_ID = '' //your google client id
const GOOGLE_CLIENT_SECRET =''//your google client secret
const oauth2client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  'http://localhost:3000'
)
const REFRESH_TOKEN = ''//your refresh token
 

router.post("/create-tokens", async(req, res, next) =>{
  try {
    const { code } = req.body
    const {tokens} =await oauth2client.getToken(code)
    
    res.send(tokens)
  } catch (error) {
    next(error)
  }
})

router.post('/create-events', async(req, res, next) => {
  
const {summary,description,to,prof,duree, location, startDateTime, endDateTime} = req.body
console.log(to)
db.query(`SELECT Mail_Etudiant FROM Etudiant WHERE Classe_Etudiant='${to}'` ,async (req,res,err)=>{
    if(err){
        console.log('erreur')
      }
      console.log(res)
      var string=JSON.stringify(res);
      console.log(string)
      var json =  JSON.parse(string);
      var hor = json[0].Mail_Etudiant
      console.log(hor)

oauth2client.setCredentials({refresh_token: REFRESH_TOKEN})
const calendar = google.calendar('v3')
const response = calendar.events.insert({
    auth: oauth2client,
    calendarId:'primary',
    requestBody: {
    summary:summary,
    description:description,
    location:location, 
    colorId: '7',
    start:{
        dateTime: new Date(startDateTime)
    },
    end: {
        dateTime: new Date(endDateTime)
    },
    attendees:[
        {email: ''}//your email here
    ]
    }
})
const SENDGRID_API_KEY= ''//YOUR SENDGRID API KEY
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(SENDGRID_API_KEY)
const msg = {
    to: '', // Change to your recipient
    from: '', // Change to your verified sender
    subject: summary,
    text:description,
    html: description,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })

})



var sqlEdt = `INSERT INTO Edt ( Num_Salle, Classe_Etudiant, Nom_Module, Nom_Prof, start, end,duree) VALUES ('${location}','${to}','${summary}','${prof}','${startDateTime}','${endDateTime}','${+duree}')`;
db.query(sqlEdt) ;
const numsalle = req.body.location
var numero =JSON.stringify(numsalle);
const classetud = req.body.to
var classe =JSON.stringify(classetud);
const nommod = req.body.summary
var modulenom =JSON.stringify(nommod);
const profnom = req.body.prof
var profnoms =JSON.stringify(profnom)
var sqlSalle = `UPDATE Salle SET Etat_salle='Occupé',Classe_Etudiant=${classe},Nom_Module=${modulenom},Nom_Prof=${profnoms} WHERE Num_Salle=${numero}`
db.query(sqlSalle);
var horaire = db.query(`SELECT Vh_Eff FROM Module WHERE Nom_Module = '${req.body.summary}'`,(err,res)=>{
}) 

//vheffectuer
var module = req.body.summary
var horaire = db.query(`SELECT Vh_Eff FROM Module WHERE Nom_Module = '${req.body.summary}'`,(err,res)=>{
if(err){
console.log('erreur')
}
console.log(res)
var string=JSON.stringify(res);
var json =  JSON.parse(string);
var hor = json[0].Vh_Eff
console.log(hor)
next();
var json1 =req.body.duree
var hor1 =  JSON.parse(json1);
var vh = hor + hor1
console.log(vh)
var vhe =db.query(`UPDATE Module SET Vh_Eff= ${vh} WHERE Nom_Module = '${req.body.summary}'`)
var h = db.query(`SELECT Vh FROM Module WHERE Nom_Module = '${req.body.summary}'`,(err,res)=>{
var string=JSON.stringify(res);
var json =  JSON.parse(string);
var hr = json[0].Vh
const a = hr - vh
var vhe =db.query(`UPDATE Module SET Vh_Restant= ${a} WHERE Nom_Module = '${req.body.summary}'`)
})
})
})

router.get('/getEdtNow', async (req, res, next) => {
  const date = new Date().toISOString().slice(0, 10)
  console.log(date)
    // console.log(year)
  db.query(`SELECT * FROM Edt WHERE start LIKE '${date}%'`,
  (err,data) => {
    if(err){
        console.log("Impossible de recuperer les donnees");
    }else{
        res.send(data)
    }
    })
  });
router.post('/getclass', async (req, res, next) => {
const cla = req.body.cla
console.log(cla)
//onsole.log(cls)
db.query(`SELECT * FROM Etudiant WHERE Classe_Etudiant='${cla}'`,
(err,data) => {
if(err){
    console.log("Impossible de recuperer les donnees");
}else{
    res.send(data)


}
})
});

module.exports = router;
