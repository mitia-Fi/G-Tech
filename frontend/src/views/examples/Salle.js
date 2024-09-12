

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
  

const Salle = () => {
const [salle, setSalle] = useState([]);
const getDataSalle = () => {
    axios
    .get("http://localhost:4000/api/salle")
    .then((response) => {
    setSalle(response.data);
    })
    .catch((err) => {
    console.log("Erreur : ", err);
    });
    };
  
useEffect(() => {
return getDataSalle();
}, []);


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
                  <h3 className="mb-0">Gestion de Salle Esti</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                  <tr>
          
                  <th scope="col">Numero</th>
                    <th scope="col">Etat</th>
                    <th scope="col">Classe</th>
                    <th scope="col">Module</th>
                    <th scope="col">Prof</th>
                    <th scope="col" />
        </tr>
      </thead>
      <tbody>
        {salle.length > 0 &&
          salle.map((value, index) => {
            return (
              <tr key={index}>
                
                <th scope="row" >{value.Num_Salle}</th>
                <th>{value.Etat_salle}</th>
                <th>{value.Classe_Etudiant}</th>
                <th>{value.Nom_Module}</th>
                <th>{value.Nom_Prof}</th>
                
                
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
  
  export default Salle;
  