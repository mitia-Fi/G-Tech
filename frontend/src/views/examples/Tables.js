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
import { Link } from "react-router-dom";

const Tables = () => {

  const [etl1g1, setEtl1g1] = useState([]);
  const getDataEtl1g1 = () => {
    axios
    .get('http://localhost:4000/api/lgun')
    .then((response) => {
      setEtl1g1(response.data);
    })
    .catch((err) => {
      console.log("Erreur : ", err);
    });
  };
  

  useEffect(() => {
    return getDataEtl1g1();
  }, []);

  const [etl1g2, setEtl1g2] = useState([]);
  const getDataEtl1g2 = () => {
    axios
    .get('http://localhost:4000/api/lgdeux')
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

  return (
    
    <>
    <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col"><Link to="Ajoutetud" className="btn btn-success float-start my-2 mx-2 px-2 py-2">Ajouter</Link> 

              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Etudiants L1G1</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                  <tr>
          
                  <th scope="col">Numero</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prenom</th>
                    <th scope="col">Mail</th>
                    <th scope="col">Classe</th>
                    <th scope="col">Annee_Scolaire</th>
                    
                   
                    
        </tr>
      </thead>
      <tbody>
      {etl1g1.length > 0 &&
       etl1g1.map((value, index) => {
       return (
              <tr key={index}>
                
                <th scope="row">{value.Num_Etudiant}</th>
                        <td className="text-primary">{value.Nom_Etudiant}</td>
                        <td>{value.Prenom_Etudiant}</td>
                        <td>{value.Mail_Etudiant}</td>
                        <td>{value.Classe_Etudiant}</td>
                        <td>{value.Anne_Scolaire}</td>
                        
                
                
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
                  <h3 className="mb-0">Etudiants L1G2</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                  <tr>
          
                  <th scope="col">Numero</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prenom</th>
                    <th scope="col">Mail</th>
                    <th scope="col">Classe</th>
                    <th scope="col">Annee_Scolaire</th>
                   
                    
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
                        <td>{value.Mail_Etudiant}</td>
                        <td>{value.Classe_Etudiant}</td>
                        <td>{value.Anne_Scolaire}</td>
                        
                
                
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

export default Tables;
