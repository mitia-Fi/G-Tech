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
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/Header.js";

import React,{useState} from "react";
import axios from "axios";
// reactstrap components
//import { Card, Container, Row } from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

const Maps = () => {
  const [Nom,setNom] = useState("");
    const [Contact,setContact] = useState("");
    const [Email,setEmail] = useState("");
    //const [Module,setModule] = useState("");
    const [Password,setPassword] = useState("");

  const ajouter = async() => {
        axios.post("http://localhost:4000/api/GestionProf/ajouter",
            [Nom,Contact,Email,Password]
        ).then( _ =>{
            //navigate("Prof");
            alert("asdas")
        }).catch(err=>{
            alert("Impossible d'enregistrer ces informations")
        })
        //navigate("/home/gestioProf");
  } 
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
        
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Ajouter un prof
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Nom
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-username"
                            placeholder="Nom"
                            type="text"
                            onChange={(e)=> setNom(e.target.value)} 
                            name="Nom"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="Votre Email"
                            type="email"
                            onChange={(e)=> setEmail(e.target.value)} 
                            name="Email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                           Contact
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-first-name"
                            placeholder="Contact"
                            type="text"
                            name="Contact"
                            onChange={(e)=> setContact(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Mot de pass
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-last-name"
                            placeholder="Mot de pass"
                            type="password"
                            onChange={(e)=> setPassword(e.target.value)}
                            name="Password"
                          />
                          <Row>
                            <Col lg="6">
                            <button className="btn btn-success my-4 " onClick={()=> ajouter()}>Ajouter</button>

                            </Col>
                          </Row>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  
                   </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Maps;
