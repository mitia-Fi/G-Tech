

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
  import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
  

const Suivie = () => {
  const [suivie, setSuivie] = useState([]);
  const getDataSuivie = () => {
    axios
    .get('http://localhost:4000/api/suivi-cours')
    .then((response) => {
      setSuivie(response.data);
    })
    .catch((err) => {
      console.log("Erreur : ", err);
    });
  };
  

  useEffect(() => {
    return getDataSuivie();
  }, []);
  var vh = suivie.Vh
  var vhe = suivie.Vh_Eff
  if(vh =! vhe){
    var svi = "en cours"
  }else{
    var svi = "fini"
  }


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
                  <h3 className="mb-0">Suivie des cours</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                  <tr>
          
                  <th scope="col">Id</th>
                    <th scope="col">Module</th>
                    <th scope="col">Prof</th>
                    <th scope="col">Classe</th>
                    <th scope="col">VH</th>
                    <th scope="col">VH_Effectué</th>
                    <th scope="col">VH_Restant</th>
                    <th scope="col">Suivie</th>
                    
        </tr>
      </thead>
      <tbody>
      {suivie.length > 0 &&
       suivie.map((value, index) => {
       return (
              <tr key={index}>
                
                <th scope="row">{value.Id}</th>
                        <td className="text-primary">{value.Nom_Module}</td>
                        <td>{value.Nom_Prof}</td>
                        <td>{value.Classes_Etudiants}</td>
                        <td>{value.Vh}</td>
                        <td>{value.Vh_Eff}</td>
                        <td>{(value.Vh)-(value.Vh_Eff)}</td>
                        <td>{svi}</td>
                
                
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
  
  export default Suivie;
  