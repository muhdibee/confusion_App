import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import {Link} from 'react-router-dom';

    function RenderMenuItem ({dish}) {
        return (
            <Card>
            <Link to = {`/menu/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
          </Card>

        );
    }


    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return (
                <div  className="col-5 col-md-4 m-1" key= {dish.id}>
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
                );
        });

        return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to = "/home">Home</Link> </BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr></hr>
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
        );

    }


export default Menu;