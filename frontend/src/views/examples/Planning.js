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
// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import moment from 'moment'
import { data } from "jquery";
const Planing = () => {
  var d = new Date();
  var n = d.toLocaleTimeString();
  const [edt, setEdt] = useState([]);
  const [cls, setCls] = useState([]);
  const [modle, setModule] = useState([]);
  const [sta, setSta] = useState([]);
  const [ns, setNs] = useState([]);
  const getData = () => {
    axios
    .get('http://localhost:4000/api/getEdtNow')
    .then((response) => {
      setEdt(response.data);
      setModule(response.data[0].Nom_Module)
      setNs(response.data[0].Num_Salle)
      setCls(response.data[0].Classe_Etudiant)
     

      //setSta(response.data[0].Num_Salle)

      setSta(response.data[0].start)
    })
    .catch((err) => {
      console.log("Erreur : ", err);
    });
  };
  console.log(cls)
  console.log(modle)
  console.log(sta)
  console.log(ns)
  const cla = cls
  console.log(cla)

  let mod = modle 
   console.log(mod)
  useEffect(() => {
    return getData();
  }, []);

  const [etl1g2, setEtl1g2] = useState([]);
  
const getDataEtl1g2 = () => {
axios
  .post('http://localhost:4000/api/getclass',
  {cla,cls}
  )
  .then((response) => {
    setEtl1g2(response.data);
  })
  .catch((err) => {
  console.log("Erreur : ", err);
});
};
  

  useEffect(() => {
    return getDataEtl1g2();
  }, []);
  const [debu, setDebut] = useState();
  const debut = () =>{
   const deb= new Date().getHours()
   setDebut(deb)
  }
  console.log(debu)

const [fini, setFin] = useState();
const fin = () =>{
   const deb= new Date().getHours()
  setFin(deb)
  console.log(typeof(debu))
  let d = debu
  let f = fin
  let temps = 12 - d
  console.log(temps)
  let mod = modle
  let star =sta
  let starta = moment({star}).format("YYYY-MM-DD hh:mm:ss");
  console.log(starta)
  let cas = starta
axios
  .post("http://localhost:4000/api/updateTime",
  {temps,mod ,cas,star,ns}
  
  )
  }
  console.log(fini)

  
  return (
    
    <>
    <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Emploie du temps</h3><h4>{n}</h4>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                  <tr>
          
                  <th scope="col">Salle</th>
                    <th scope="col">Debut</th>
                    <th scope="col">Fin</th>
                    <th scope="col">Module</th>
                    <th scope="col">Classe</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                   
                    
        </tr>
      </thead>
      <tbody>
      {edt.length > 0 &&
       edt.map((value, index) => {
       return (
              <tr key={index}>
                
                <th scope="row">{value.Num_Salle}</th>
                        <td className="text-primary">{value.start}</td>
                        <td>{value.end}</td>
                        <td>{value.Nom_Module}</td>
                        <td>{value.Classe_Etudiant}</td>
                        <td><button type="submit" className="btn btn-success float-start my-2 mx-2 px-2 py-2" onClick={debut}>Debuter</button></td>
                        <td><button type="submit" className="btn btn-success float-start my-2 mx-2 px-2 py-2" onClick={fin}>Finir </button></td>
                        
                
                
              </tr>
            );
          })}
                  </tbody>
                </Table>
                
              </Card>
            </div>
          </Row>

          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Etudiants</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                  <tr>
          
                  <th scope="col">Numero</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prenom</th>
                    <th scope="col">Classe</th>
                    <th scope="col">Present</th>
                    <th scope="col">Abscent</th>
                   
                    
        </tr>
      </thead>
      <tbody>
      {etl1g2.length > 0 &&
       etl1g2.map((value, index) => {
       return (
              <tr key={index}>
                
                <th scope="row">{value.Num_Etudiant}</th>
                        <td className="text-primary">{value.Nom_Etudiant}</td>
                        <td>{value.Prenom_Etudiant}</td>
                        <td>{value.Classe_Etudiant}</td>
                        <td><input type="checkbox"/></td>
                        <td><input type="checkbox"/></td>
                        
                
                
              </tr>
            );
          })}
                  </tbody>
                </Table>
                
              </Card>
            </div>
          </Row>
          
                
        </Container>
      </>
    );
  };

export default Planing;
