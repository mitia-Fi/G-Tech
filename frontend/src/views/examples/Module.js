

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


const Module = () => {
  const [module,setModule] = useState([]);
  

  const getData = () => {
    axios.get("http://localhost:4000/api/Module").then(response=>{
      setModule(response.data.data);
      
  }).catch(err=>{
    console.log("Impossible de recuperer les modules");
  });
};

  useEffect(() => {
    return getData()
  }, []);

  const delete_function = (Id) =>{
    axios.post(`http://localhost:4000/api/Module/delete/${Id}`).then(response => {
      getData();
      console.log("Message : ",response);
    }).catch(err=>{
      console.log("Impossibe de supprimer ce module");
    })
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
                <h3 className="mb-0">Profs</h3>
               
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                <tr>
        
                <th scope="col">ID</th>
                  <th scope="col">Nom_Module</th>
                  <th scope="col">Prof</th>
                  {/* <th scope="col">Code</th> */}
                  <th scope="col">Credit</th>
                  <th scope="col">Volume_Horaire</th>
                  <th scope="col">Anne Scolaire</th>
                  <th scope="col">Action</th>
                  <th>
                  <Link to="ModuleAdd" className="btn btn-success float-start my-2 mx-2 px-2 py-2">Ajouter</Link> 
                  </th>
                 
      </tr>
    </thead>
    <tbody>
    {module.length > 0 &&
                  module.map((value, index) => {
                    return (
                      <tr key={index}>
                          <td scope="row">{value.Id}</td>
                        <td scope="row">{value.Nom_Module}</td>
                        <td className="text-primary">{value.Nom_Prof}</td>
                        {/* <td>{value.Code}</td> */}
                        <td>{value.Credit}</td>
                        <td>{value.Vh}</td>
                        <td>{value.Annee_Scolaire}</td>
                        <td style={{display:"flex",flex : 1}}>
                          <button className="btn btn-info text-light mx-1">
                            Modifier
                          </button>
                          <button
                            onClick={() => delete_function(value.Id)}
                            className="btn btn-danger mx-0"
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

export default Module;
