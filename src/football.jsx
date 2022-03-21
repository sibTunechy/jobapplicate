import React, { useState } from 'react'
import millify from 'millify';
import { Card, Row, Col, Input} from 'antd';
import { useGetFootballQuery } from './services/footballApi';

const Football = () => {
  const { data: leagueList, isFetching } = useGetFootballQuery();        // data is renamed as leagueList
  const [ leagues, setLeagues ] = useState(leagueList?.data?.competitions)

  console.log(leagueList)

  return ( 
  <>
    <Row gutter={[32, 32]} className='league-cards'> 
        {leagues.map((teams) => (
          <Col xs={24}>
          
          </Col>
        ))}
    </Row>
  </>
    
  )
}

export default Football;