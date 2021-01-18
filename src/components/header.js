import React from 'react';
import weatherimg from '../imgs/weather.png';
import {
    Button, 
    Form, 
    FormGroup, 
    Input,
    Container
  } from 'reactstrap';
import {ModalDev, ModalAbout} from './modals';  
import 'bootstrap/dist/css/bootstrap.css';

const Header = ({formHandler, state, setState, error}) => {
    const aboutModal = () => {
        setShowModalAbout(true);
        setShowModalDev(false);
      }
      const devModal = () => {
        setShowModalDev(true);
        setShowModalAbout(false);
    }
    const [showModalDev, setShowModalDev] = React.useState(false);
    const [showModalAbout, setShowModalAbout] = React.useState(false);
    
  return (
    <>
      <div className="topnav">
        <header>
          <img src={weatherimg} alt="weatherimg" />
          Weather informer
        </header>
        <nav>
        <span onClick={aboutModal}>About App</span>
        <span onClick={devModal}>About Developer</span>
        </nav>
      </div>
      {showModalDev && <ModalDev setShowModalDev={setShowModalDev} showModalDev={showModalDev}/>}
      {showModalAbout && <ModalAbout setShowModalAbout={setShowModalAbout} showModalAbout={showModalAbout}/>}
      <Container>
      <Form onSubmit={formHandler}>
        <FormGroup style={{marginTop: '20px'}}>
        <Input 
        type="text" 
        value={state} 
        onChange={e => setState(e.target.value)}
        placeholder="Search weather..."
        autoFocus />
        </FormGroup>
        {error && <p style={{color:'red'}}>Enter any city or country.</p>}
        <Button color="info" className="btn btn-secondary" type="submit">Search</Button>
      </Form>
      </Container>
    </>
  )
}

export default Header;
