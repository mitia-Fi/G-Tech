

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


const Prof = () => {
  const delete_function = (id) => {
    axios
      .post(`http://localhost:4000/api/GestionProf/supprimer/${id}`)
      .then((_) => {
        getData();
      });
  };
  const [profData, setProfData] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:4000/api/GestionProf/list")
      .then((response) => {
        setProfData(response.data);
      })
      .catch((err) => {
        console.log("Erreur : ", err);
      });
  };

  useEffect(() => 
      getData()
  ,[]);


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
                <h3 className="mb-0">Profs</h3>
               
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                <tr>
        
                <th scope="col">ID</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Anciente</th>
                  <th scope="col">Actions</th>
               
                  <th>
                 <Link to="Maps" className="btn btn-success float-start my-2 mx-2 px-2 py-2">Ajouter</Link> </th>
      </tr>
    </thead>
    <tbody>
    {profData.length > 0 &&
                  profData.map((value, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{value.id}</th>
                        <th scope="row">{value.Nom}</th>
                        <td className="text-primary">{value.Email}</td>
                        <th scope="row">{value.contact}</th>
                        <td>{`${(2022 - value.Debut) ? (`${2022 - value.Debut} ans`) : "Recent"} `}</td>
                        <td>
                          <button className="btn btn-info text-light mx-3">
                            Modifier
                          </button>
                          <button
                            onClick={() => delete_function(value.id)}
                            className="btn btn-danger"
                          >
                            Supprimer
                          </button>
                        </td>
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

export default Prof;
