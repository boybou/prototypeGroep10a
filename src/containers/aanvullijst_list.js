import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectAanvullijst} from '../actions/index';
import { bindActionCreators } from 'redux';

class AanvullijstList extends Component{
    constructor(props){
        super(props);

        this.state = {}
    }
    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
    renderList(){
        return this.props.aanvullijsten.map(aanvullijst => {
            return (
                <li
                    key={aanvullijst.operatieKamer}
                    onClick={() =>this.props.selectAanvullijst(aanvullijst)}
                    className="avlist list-group-item">
                    Operatie kamer: {aanvullijst.operatieKamer}
                </li>
            )
        })
    }
}

function mapStateToProps(state){
    return{
        aanvullijsten: state.aanvullijsten
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectAanvullijst: selectAanvullijst}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(AanvullijstList);