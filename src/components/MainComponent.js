import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import {DISHES} from '../shared/dishes';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail  from './DishdetailComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotion:PROMOTIONS,
      leaders:LEADERS
    };
  }

  render() {
    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
              promotion={this.state.promotion.filter((promo)=>promo.featured)[0]}
              leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.state.dishes.filter((dish) =>dish.id === parseInt(match.params.dishId, 10))[0]} 
        comments={this.state.comments.filter((comment) =>comment.dishId === parseInt(match.params.dishId, 10))} />
      );
    };

    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path ='/home' component= {HomePage } />
          <Route path ='/about' component= {() => <About leaders={this.state.leaders}/> } />
          <Route exact path ='/menu' component= {() => <Menu dishes={this.state.dishes}/> } />
          <Route path ='/menu/:dishId' component= {DishWithId } />
          <Route exact path ='/contactus' component= {Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
      );  
  } 
}

export default Main; 
