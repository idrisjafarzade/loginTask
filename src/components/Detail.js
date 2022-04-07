import axios from 'axios';
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Col, Row, Container} from 'reactstrap';
import { useParams } from 'react-router-dom';
import config from '../config';

function Detail() {
  let { id } = useParams();
 
  const [data, setData]=React.useState()
  React.useEffect(() => {
    if(id)
      axios.get(config.BASE_URL+`blogs/${id}`).then(res=>{
        console.log(res.data);
        if(res.status===200){
          setData(res.data)
        }
  })
}, [])
    return (
      <Container>
        <Row className='justify-content-center text-center mt-5'>
          <Col md={8} key={data?.id}>
            <Card>
              <CardImg top width="100%" height="450px" src={data?.avatar}  />
              <CardBody>
                  <CardTitle>{data?.name}</CardTitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
       </Container>
  )
}

export default Detail;