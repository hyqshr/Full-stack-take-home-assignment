import React from 'react'
import Image from 'react-bootstrap/Image'
import {Card,Button,Row,Col, Container} from 'react-bootstrap'
import Figure from 'react-bootstrap/Figure'
import {Text, View } from "react-native";
export default function MemberList({member}) {
  return (
    <Container className='py-3'>
        <Row>
            <Col md={2}>
                    <Figure.Image
                        width={180}
                        height={180}
                        src="profileImagePlaceHolder.jpg"
                    />
            </Col>
            
            <Col>
                <Card >

                    <Card.Body>
                        <Card.Title><h3>{member.first_name} {member.last_name}  {member.is_admin ? <a>(admin)</a> : null}</h3></Card.Title>
                        
                        <Card.Text>
                            {<p>{member.phone_number}</p>}
                            {<h5>{member.email}</h5>}
                            {<h3>_________________________________________________</h3>}

                        </Card.Text>
                    </Card.Body>

                </Card>
            </Col>

        </Row>
    </Container>

  )
}
