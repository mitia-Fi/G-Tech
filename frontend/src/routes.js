/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Salle from "views/examples/Salle";
import Suivie from "views/examples/Suivi";
import Prof from "views/examples/Prof";
import Module from "views/examples/Module";
import ModuleAdd from "views/examples/ModuleAdd";
import Agenda from "views/examples/Agenda";
import Planing from "views/examples/Planning";
import Ex from "views/examples/Ex";
import Facture from "views/examples/Facture";
import Ajoutetud from "views/examples/Ajoutetud";
import Suivie1 from "views/examples/Suivi1";
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
 
  {
    path: "/user-profile",
    name: "Mon Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/Agenda",
    name: "Agenda",
    icon: "ni ni-calendar-grid-58 text-purple",
    component: Agenda,
    layout: "/admin"
  },
  {
    path: "/Planing",
    name: "Cahier de texte",
    icon: "ni ni-book-bookmark text-green",
    component: Planing,
    layout: "/admin"
  },
  {
    path: "/Ex",
    name: "Attestation",
    icon: "ni ni-paper-diploma text-pink",
    component: Ex,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Etudiants",
    icon: "ni ni-hat-3 text-pink",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/Salle",
    name: "Salle",
    icon: "ni ni-building text-blue",
    component: Salle,
    layout: "/admin"
  },
  {
    path: "/Suivie",
    name: "Suivie",
    icon: "ni ni-single-copy-04 text-orange",
    component: Suivie,
    layout: "/admin"
  },
  {
    path: "/Suivie1",
    name: "Suivie prof",
    icon: "ni ni-single-copy-04 text-orange",
    component: Suivie1,
    layout: "/admin"
  },
{
  path: "/Ajoutetud",
  name: "Ajout etudiants",
  icon: "ni ni-fat-add text-green",
  component: Ajoutetud,
  layout: "/admin"
},
  {
    path: "/Prof",
    name: "Gestion Prof",
    icon: "ni ni-collection text-red",
    component: Prof,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Ajouter Prof",
    icon: "ni ni-fat-add text-green",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/Module",
    name: "Gestion de Module",
    icon: "ni ni-book-bookmark text-yellow",
    component: Module,
    layout: "/admin"
  },
  {
    path: "/ModuleAdd",
    name: "Ajout de Module",
    icon: "ni ni-fat-add text-green",
    component: ModuleAdd,
    layout: "/admin"
  },
  {
    path: "/Facture",
    name: "Facture",
    icon: "ni ni-credit-card text-blue",
    component: Facture,
    layout: "/admin"
  },
  
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }
];
export default routes;
