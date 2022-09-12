
import IpDistribution from '../components/IpDistribution/IpDistribution';
import Geographcal from '../components/Geographcal/Geographcal';
import RTT from '../components/RTT/RTT';
import ClientDistribuition from '../components/Distribution/Distribution';

import { useEffect, useState } from 'react';
import styled from "styled-components";
import { Container, Row, Col, Card } from 'react-bootstrap';






function Dashboard() {
    const countries = require("i18n-iso-countries");
    countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

    const [clientDistributionData, setClientDistributionData] = useState([])
    const [rttDistributionData, setRTTDistributionData] = useState([])
    const [ipDistributionData, setIPDistributionData] = useState([])
    const [geoDistributionData, setGeoDistributionData] = useState([])

    const getData = async () => {
        const response = await fetch('http://localhost:8000/api/client-distribution');
        const responseData = await response.json();
        const arr = Object.keys(responseData).map(item => [item, responseData[item]]);
        const arr2 = [['Client', 'Number']].concat(arr);
        console.log(arr2);
        setClientDistributionData(arr2);
    }

    const getRTT = async () => {
        const response = await fetch('http://localhost:8000/api/rtt-distribution');
        const responseRTTData = await response.json();
        const arr = Object.keys(responseRTTData).map(item => [item, responseRTTData[item]]);
        const arr2 = [['RTT ranges (seconds)', 'Number of nodes']].concat(arr);
        setRTTDistributionData(arr2);
    }

    const getIP = async () => {
        const response = await fetch('http://localhost:8000/api/ip-distribution');
        const responseIPData = await response.json();
        const arr = Object.keys(responseIPData).map(item => [item, responseIPData[item]]);
        const arr2 = [['Nodes', 'Hours per Day']].concat(arr);
        setIPDistributionData(arr2);
    }

    const getGeo = async () => {
        const response = await fetch('http://localhost:8000/api/geo-distribution');
        const responseGeoData = await response.json();
        const arr = Object.keys(responseGeoData).map(item => [countries.alpha3ToAlpha2(item), responseGeoData[item]]);
        const arr2 = [['Country', 'Nodes']].concat(arr);
        setGeoDistributionData(arr2);
    }


    useEffect(() => {
        getData();
        getRTT();
        getIP();
        getGeo();
    }, []);


    return (
        <Section>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Beacon Chain Client Diversity</Card.Title>
                                <ClientDistribuition data={clientDistributionData} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Beacon Chain RTT Distribution</Card.Title>
                                <RTT data={rttDistributionData} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>The distribution of shared IPs among nodes</Card.Title>
                                <IpDistribution data={ipDistributionData} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Geographical distribution</Card.Title>
                                <Geographcal data={geoDistributionData} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Section>

    );
}

const Section = styled.section`
    .card {
        margin-top: 1em;
        border-radius: 1em;
        border: 0;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
`;





export default Dashboard;