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
  //import { ToastContainer, toast } from 'react-toastify';
  //import 'react-toastify/dist/ReactToastify.css';
  // reactstrap components
  //import { Card, Container, Row } from "reactstrap";
  
  // core components
  import Header from "components/Headers/Header.js";
  
  const Ajoutetud = () => {
    const [Nom,setNom] = useState("");
    const [Mail,setMail] = useState("");
    const [Prenom,setPrenom] = useState("");
    const [AnneScolaire,setAnneScolaire] = useState("");
    const [Classes_Etudiants, setClasses_Etudiants]= useState("")
   
    const ajouter = () => {
      axios.post("http://localhost:4000/api/Etud/ajouter",[
        Nom,Mail,Prenom,AnneScolaire,Classes_Etudiants
      ])
    //.then(_=>{
    //     toast.success("Enregistrer avec succes!", {
    //       position: "bottom-center",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //       onClose : function(){
    //         //navigate('/home/Module')
    //       },})
    //       .catch()
    // });
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
                    Ajouter un etudiant
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Nom Etudiant
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
                              Prenom Etudiant
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="Prof"
                              type="text"
                              onChange={(e)=> setPrenom(e.target.value)} 
                              name="Prof"
                            />
                          </FormGroup>
                        </Col>
  
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Mail
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-username"
                              placeholder="Volume horraire"
                              type="text"
                              onChange={(e)=> setMail(e.target.value)} 
                              name="Vh"
                            />
                          </FormGroup>
                        </Col>
  
  
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Annee_Scolaire
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="Annee_Scolaire"
                              type="number"
                              onChange={(e)=> setAnneScolaire(e.target.value)} 
                              name="Annee_Scolaire"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Classe
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="Annee_Scolaire"
                              type="text"
                              onChange={(e)=> setClasses_Etudiants(e.target.value)} 
                              name="Annee_Scolaire"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                            <button className="btn btn-success my-4 " onClick={()=> ajouter()}>Ajouter</button>

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
  
  export default Ajoutetud;