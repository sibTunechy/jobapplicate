import React, { useState } from 'react';
import millify from 'millify';
import {Typography, Row, Col, Statistic, Card, Input} from 'antd';
import icon from './image/ballu.jpg';
import './App.css'
import { useGetFootballQuery } from './services/footballApi';
import Football from './football';

const {Title} = Typography;   // Title destrcutured from Typography

function App() {

  const { data, isFetching } = useGetFootballQuery();      // created a hook `useGetFootballQuery` to make api request
  
  if(isFetching) return 'Loading...'

  console.log(data);


  return (
    <>
      <div className='main'>
        <div className='header-image'>
          <img className='photo-icon' src={icon} alt='football'/>
        </div>
        <Title level={2} className='heading'>All Competitions</Title>
        <Row>
          <Col span={12}><Statistic title='Championship' value='5'/></Col>
          <Col span={12}><Statistic title='Premier League' value='5'/></Col>
          <Col span={12}><Statistic title='Champions League' value='5'/></Col>
          <Col span={12}><Statistic title='European Championship' value='5'/></Col>
          <Col span={12}><Statistic title='Ligue 1' value='5'/></Col>
          <Col span={12}><Statistic title='Bundesliga' value='5'/></Col>
          <Col span={12}><Statistic title='Seria A' value='5'/></Col>
          <Col span={12}><Statistic title='Eredivisie' value='5'/></Col>
          <Col span={12}><Statistic title='Primera Liga' value='5'/></Col>
          <Col span={12}><Statistic title='Primera Division' value='5'/></Col>
        </Row>  
      </div>

      {/* <div className='heading-container'>
          <Title level={1} className='heading-title'>All Competitions</Title>
          <Football/>
      </div> */}
   </>
  );
}

export default App;
