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
    Col,
    CardBody,
    UncontrolledTooltip
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
  import React from 'react'
  import { useState } from 'react';
  import { useEffect } from 'react';
  import axios from 'axios';
  import { Link } from "react-router-dom";
  import Esti from '../../assets/img/brand/esti.png';
  
  import * as html2pdf from 'html2pdf.js';
  
  
  const Facture = (props) => {
    const [getedt, setGetedt] = useState([]);
  const getDataEdt = () => {
    axios
    .post("http://localhost:4000/api/getFacture",{nom})
    .then((response) => {
      setGetedt(response.data);
      
    })
    .catch((err) => {
      console.log("Erreur : ", err);
    });
  };
  const nom= JSON.parse(localStorage.getItem("actual_user")).Nom || "Unknown"
  console.log(nom)

const [nif, setNif] = useState([])
const nifstate = ()=>{
  axios
  .post("http://localhost:4000/api/getNif",{nom})
    .then((response) => {
      setNif(response.data[0].Nif_stat);
      
    })
}
useEffect(() => {
  return nifstate();
}, []);

  useEffect(() => {
    return getDataEdt();
  }, []);
  
  const date = new Date();  // 2009-11-10
  const month = date.toLocaleString('default', { month: 'long' });
  console.log(month);
  
  const PDF =()=> {
    const element = document.getElementById('pdf');
    var opt = {
      /*  width:        522, */
       margin:       1,
       filename:     'Facture.pdf',
       image:        { type: 'jpeg', quality: 0.98 },
       html2canvas:  { scale: 2 },
       jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
     }; 
     html2pdf().set(opt).from(element).save(); 
  }
  if(nif == 1){
  var sal = 5000;
}else{
  var sal = 4750;
}
    return (
      <>
        <Header />
        {/* Page content */}

        <Container className="mt--7" fluid id="pdf">
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                 <Row>
                  <Col lg="12" xl="3">
                {/* <Card className="card-stats mb-4 mb-xl-0"> */}
                  {/* <CardBody> */}
                  <img  top="400px" width="100%"  height="130px"></img>
                  <img src={Esti} top="400px" width="90%"  height="110px"></img>
                  <Col lg="12"> 
              <h3 className="mb-0">Facture</h3>
              <h3 className="mb-0">Mois de : {month}</h3>
              <h3 className="mb-0">Nom: {nom} </h3>
              <h3 className="mb-0">Prenom:</h3>
              
              </Col>
                  {/* </CardBody> */}
                {/* </Card> */}
              </Col>
              
              </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                  <tr>
          
                  <th scope="col">Nom_Module</th>
                    <th scope="col">Code</th>
                    <th scope="col">Vh_Reel Effectué</th>
                    <th scope="col">Salaire brute</th>
                    <th scope="col">Salaire ttc</th>
                   
                
                 
                  
        </tr>
      </thead>
      <tbody>
      {getedt.length > 0 &&
                  getedt.map((value, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{value.Nom_Module}</th>
                          <th scope="row">{value.Code}</th>
                          <td className="text-primary">{value.Vh_Reel}</td>
                          <td scope="row">{5000 * value.Vh_Reel}Ariary</td>
                          <th scope="row">{sal * value.Vh_Reel}Ariary</th>
                          
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card>

            </div>
          </Row>
          
          
        </Container>
        <button type="submit" className="btn btn-success float-start my-2 mx-2 px-2 py-2"onClick={PDF}>Generer le pdf </button>

      </>
    );
  };
  
  export default Facture;
  