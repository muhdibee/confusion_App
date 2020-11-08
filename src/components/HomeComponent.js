import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';

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
            <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)'}}>
                    <Card>
                        <CardImg src={baseUrl + item.image} alt={item.name}/>
                        <CardBody>
                            <CardTitle><strong>{item.name}</strong></CardTitle>
                                {item.designation ? <CardSubtitle><strong>{item.designation}</strong></CardSubtitle> : null}
                            <CardText>{item.description}</CardText>
                        </CardBody>
                    </Card>
            </FadeTransform>  
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
                     <Rendercard item={props.promotion} isLoading={props.promosLoading} errMess={props.promosErrMess} /> 
                </div>
                <div className="col-12 col-md m-1">
                    <Rendercard item={props.leaders} isLoading={props.leadersLoading} errMess={props.leadersErrMess}/> 
                </div>
            </div>
        </div>
    );
}

export default Home;