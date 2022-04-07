import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, Row, Container } from 'reactstrap';
  import { useHistory } from "react-router";
  import  { CardsServices } from '../Cards'


function Blogs() {
    const history=useHistory();
  const [state,setState]=React.useState([]);
  React.useEffect(() => {
    CardsServices.getAllBlogs().then(({data})=>{
     setState(data);
    })
  }, []);
  return (
    <Container className='mt-5 text-center'>
        <Row>
      {state?.map(({id, name, avatar })=>(
       <Col md={4} key={id}>
       <Card>
         <CardImg top width="100%" height="250px"src={avatar}  />
         <CardBody>
           <CardTitle>{name}</CardTitle>
           <CardSubtitle>Card subtitle</CardSubtitle>
           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
           <Button className='btn btn-success' onClick={()=>history.push(`/detail/${id}`)}>
               Go to details
           </Button>
           
         </CardBody>
       </Card>
       </Col>
          ))}
         </Row>
      </Container>
  )
}

export default Blogs