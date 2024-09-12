

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Select,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/Header.js";
import GoogleLogin from 'react-google-login';
import { useState } from 'react';
import axios from 'axios'
import {gapi} from 'gapi-script'

import { useEffect } from 'react';

const Agenda = () => {
    
  const clientId="";
    useEffect(() => {
      //  gapi.laod("client:auth2", () => {
      // gapi.auth2.init({clientId:clientId})
   //  })
  }, []) 

  const responseGoogle = response => {
    console.log(response);
    const {code} = response 
    axios
      .post('http://localhost:4000/api/create-tokens', {code}) 
      .then(response => {
        console.log(response.data)
        setSignesIn(true)
      })
      // .catch(error => console.log(error.message))
    }
  const responseError = error => {
    console.log(error);
  }

  const handleSubmit =(e) =>{
    
    e.preventDefault()
    axios.all([
    axios
      .post('http://localhost:4000/api/create-events', {
      summary,
      description, 
      to,
      location,
      startDateTime, 
      endDateTime,
      duree,
      prof})
    .then(response => {
       console.log(response)
   })
   .catch(error => console.log(error.response.data))
  ,
  
])
    }
    
  const [summary, setSummary] = useState('')

  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [startDateTime, setStartDateTime] = useState('')
  const [endDateTime, setEndDateTime] = useState('')
  const [signedIn, setSignesIn] = useState(false)
  const [duree, setDuree] = useState('')
  const [prof, setProf] = useState('')
const [to, setTo] = useState('L1G1')
const hak =() =>{
  setTo(document.getElementById('to').value);
}  
console.log(to)

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
       
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
              <GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseError}
    cookiePolicy={'single_host_origin'}
    responseType='code'
    accessType='offline'
    scope='openid email https://www.googleapis.com/auth/calendar'
    />
              
                </Row>
            </Card>
          </Col>
          
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
            <Form onSubmit={handleSubmit}>
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Plannification D'Emploie du Temps </h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button type="submit"
                      className="btn btn-success float-start my-2 mx-2 px-2 py-2"
                    >
                      Creer l'evenement
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
               
                  <h6 className="heading-small text-muted mb-4">
Plannification emploi du temps
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                    <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Summary
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="Summary"
                            type="text"
                            name="summary" 
                            id="summary" 
                            value={summary} 
                            onChange={e => setSummary(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            To
                          </label>
                          {/* <Input
                            className="form-control-alternative"
                            placeholder=""
                            type="email"
                            name="to" id="to"
                             value={to} 
                             onChange={e => setTo(e.target.value)}
                          /> */}
                          <select id="to" onChange={hak}>
                            <option value="L1G1">L1G1</option>
                            <option value="L1G2">L1G2</option>
                            <option value="L2IDEV">L2IDEV</option>
                            <option value="L2RSI">L2RSI</option>
                            </select>
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
                           Location
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="Location"
                            type="number"
                            name="location" id="location" 
                            value={location} 
                            onChange={e => setLocation(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                           Prof
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="Prof"
                            type="text"
                            name="prof" id="prof" 
                            value={prof} 
                            onChange={e => setProf(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
Planning timing
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                    <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                      <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Debut du cours
                          </label>
                          <Input
                            className="form-control-alternative"
                            type="datetime-local"
                             name="startDateTime" 
                             id="startDateTime" 
                             value={startDateTime} 
                            onChange={e => setStartDateTime(e.target.value)} 
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Fin du cours
                          </label>
                          <Input
                            className="form-control-alternative"
                            type="datetime-local" 
                            name="endDateTime" 
                            id="endDateTime"
                            value={endDateTime} 
                            onChange={e => setEndDateTime(e.target.value)}
                           
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Duree
                          </label>
                          <Input
                            className="form-control-alternative"
                            type="number" 
                            name="duree" 
                            id="duree" 
                            value={duree} 
                            onChange={e => setDuree(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">Description du cours</h6>
                  <div className="pl-lg-4">
                  <FormGroup>
                      <label>Description</label>
                      <Input
                        className="form-control-alternative"
                        rows="4"
                        type="textarea"
                        name="description" 
                        id="description" 
                        value={description} 
                        onChange={e => setDescription(e.target.value)}
                      />
                    </FormGroup>
                  </div>
               
              </CardBody>
              </Form>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
};

export default Agenda;
