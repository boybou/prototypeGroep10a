import { combineReducers } from 'redux';
import AanvullijstReducer from './reducer_aanvullijst'
import ActiveAanvullijst from './reducer_active_aanvullijst';

const rootReducer = combineReducers({
    aanvullijsten: AanvullijstReducer,
    activeAanvullijst: ActiveAanvullijst
});

export default rootReducer;
