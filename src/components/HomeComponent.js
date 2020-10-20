import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';


const Rendercard = ({item, isLoading, errMess}) => {
    if (isLoading){
        return (
            <Loading/>
        )
    }
    else if (errMess){
        return(
            <h4>{errMess}</h4>
        )
    }
    else
        return(
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name}/>
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
                    <Rendercard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}  />
                </div>
                <div className="col-12 col-md m-1">
                    {/* <Rendercard item={props.promotion} isLoading={props.promosLoading} errMess={props.promosErrMess} /> */}
                    <Card>
                        <CardImg src='http://localhost:3001/images/buffet.png' alt='Buffet'/>
                        <CardBody>
                            <CardTitle><strong>Buffet</strong></CardTitle>
                            {/* {item.designation ? <CardSubtitle><strong>{item.designation}</strong></CardSubtitle> : null} */}
                            <CardText>Buffet</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md m-1">
                    <Rendercard item={props.leader}/>
                </div>
            </div>
        </div>
    );
}

export default Home;