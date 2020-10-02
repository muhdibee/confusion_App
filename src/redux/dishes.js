import { DISHES } from '../shared/dishes';
import * as ActionTypes from './actionTypes';
import { Switch } from 'react-router-dom';


export const Dishes = (state = {isLoading: true, errmess:null, dishes:[]}, action) => {
    switch (action.type){
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, ermess: null, dishes: action.payload};
        case ActionTypes.DISHES_LOADING:
            return {...state,  isLoading: true, ermess: null, dishes: []};
            case ActionTypes.DISHES_FAILED:
                return {...state,  isLoading: false, ermess: action.payload};
                
            default: return state;
    };
}