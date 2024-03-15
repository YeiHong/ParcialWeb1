import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import banner from './banner.svg';
import {Link} from 'react-router-dom'

function Login (){

    const [formValues, setFormValues] = useState({user:"", password:""});

    const handleUserChange = ((e) => {
        setFormValues({...formValues, user: e.target.value})
      });
     
    const handlePasswordChange = ((e) => {
        setFormValues({...formValues, password: e.target.value})
      });
    
    const clickSubmit = (() => {
        if (formValues.user==="admin" && formValues.password==="pass" ) {
          alert(JSON.stringify(formValues));
        } else {
          alert("Error de autenticación. Revise sus credenciales");
        }
    });

    return(
    <div>
        <h2>TuSegundazo.com</h2>
        <img src={banner} alt="banner" />
        <div>
            <h3>Inicio de sesión</h3>
            <Form>
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type='user' value={formValues.user} onChange={handleUserChange}></Form.Control>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type='password' value={formValues.password} onChange={handlePasswordChange}></Form.Control>
            </Form>
            <Link to={'/cars'}>
            <Button variant="primary" onClick={clickSubmit}>Ingresar</Button>
            </Link>
            <Button variant="danger">Cancelar</Button>
        </div>
        <p>Contact us: +57 3102105253 - info@tusegundazo.com - @tusegundazo</p>
    </div>
    );
}

export default Login;