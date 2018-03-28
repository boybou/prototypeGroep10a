import React, { Component } from 'react'
import { connect} from 'react-redux';

class AanvullijstDetail extends Component{
    constructor(props){
        super(props);

        this.state = {progress: 0}
    }

    render(){
        if(!this.props.aanvullijst){
            return <div>kies een aanvullijst om te verwerken.</div>
        }
        //{((this.state.progress/this.state.totaal)*100)}
        let totaal = 0;
        this.props.aanvullijst.materiaal.map(materiaal => {
            totaal += materiaal.aantal;
        });
        let barpercnt = ((this.state.progress/totaal)*100);
        console.log(totaal);
        console.log(barpercnt);


        return(
            <div className="container col-sm-6">
                <h2 className="">OK:{this.props.aanvullijst.operatieKamer}</h2>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '' +barpercnt +'%'}} aria-valuenow={barpercnt} aria-valuemin="0" aria-valuemax="100"/>
                </div>
                <ul className="list-group">

                    {this.props.aanvullijst.materiaal.map(materiaal => {
                        return (
                            <li key={materiaal.materiaalNaam} className="list-group-item">
                                <p>materiaal: {materiaal.materiaalNaam} kast: {materiaal.kast} lade: {materiaal.lade} aantal: {materiaal.aantal}</p>
                                <input type="submit" value="klaar?" onClick={() => {
                                    this.addProgress(materiaal.aantal);

                                }} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }

    addProgress(aantal){
        this.setState({progress: this.state.progress+aantal});
    }
}

function mapStateToProps(state){
    return {
        aanvullijst: state.activeAanvullijst
    }
}

export default connect(mapStateToProps)(AanvullijstDetail)