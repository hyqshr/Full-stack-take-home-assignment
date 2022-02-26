import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {Form,Button,Row,Col} from 'react-bootstrap'
import axios from 'axios'
import MemberList from '../components/MemberList'
export default function HomeScreen() {

  const [data, setData] = useState({ hits: [] });
  const [memberCount,setMemberCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'http://localhost:8000/api/members/',
      );
      setData(result.data);
      setMemberCount(result.data.length)
    };
    fetchData();

  }, []);
  
  return (
    <div>
      <Row>
          <Col md={5}><h3>Team Management Tool</h3></Col>
          <Col md={6}><h1>HomeScreen</h1></Col>
          <Col md={1}>
            <Link to='/add' style={{ textDecoration: 'none' }}><h1>+</h1></Link>
          </Col>
      </Row>
      <Row >
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',fontSize:'20px'}}>
          You have {memberCount} team members
        </div> 
      </Row>

      <div>
          <Row>
            {Object.keys(data).map((key) => 
              (
                // console.log(data[key])
                <Link to='/edit'  state={{member:data[key]}} style={{ textDecoration: 'none' }} >
                  <MemberList member={data[key]} />
                </Link>
                ))
            }

      </Row>
      </div>
    </div>
  )
}
