import { Alert } from 'bootstrap';
import React from 'react';
import { Redirect } from 'react-router-dom';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Container,
    Row,
    Col
  } from 'reactstrap';
import { useAuth } from '../Proteced';

function Login() {

    const authContext = useAuth();

    // console.log('test', authContext);

    const [username, setUsername]=React.useState("");
    const [password, setPassword]=React.useState("");
    const submit=()=>{
        if(!username.trim()){
            alert("username is required")
            return
        }
        if(!password.trim()){
            alert("password is required")
            return
        }

        if(username!=="idris" && password!=="12345"){
            alert("username or password is wrong")
            return
        }

        authContext.setIsAuth(true)

    }


    return (
        <Container>
            <Row className='justify-content-center'>
                <Col md={6}>
                    <div className="Col md-8">
                <h2>Sign In</h2>
                {/* <Form className="form" > */}
                    <FormGroup>
                    <Label for="exampleEmail">Username</Label>
                    <Input
                       // name="email"
                        id="exampleEmail"
                        placeholder="UserName"
                        value={username}
                        onChange={e=>{
                            setUsername(e.target.value)
                        }}
                    />
                    </FormGroup>
                    <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password"
                        //name="password"
                        id="examplePassword"
                        placeholder="********"
                        value={password}
                        onChange={e=>{
                            setPassword(e.target.value)
                        }}
                    />
                    </FormGroup>
                <Button onClick={submit}>Submit</Button>
                {/* </Form> */}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Login