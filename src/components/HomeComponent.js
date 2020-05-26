import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';

const Rendercard = ({item}) => {
    return(
        <Card>
            <CardImg src={item.image} alt={item.name}/>
            <CardBody>
                <CardTitle><strong>{item.name}</strong></CardTitle>
                    {item.designation ? <CardSubtitle><strong>{item.designation}</strong></CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <Rendercard item={props.dishe}/>
                </div>
                <div className="col-12 col-md m-1">
                    <Rendercard item={props.promotion}/>
                </div>
                <div className="col-12 col-md m-1">
                    <Rendercard item={props.leader}/>
                </div>
            </div>
        </div>
    );
}

export default Home;