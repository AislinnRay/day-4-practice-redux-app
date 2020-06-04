import React, {Component} from 'react';
import {connect} from 'react-redux'

class Dashboard extends Component {
    //console.log({'from dashboard now: ', this.props})
    render(){
        return(
            <div>Dashboard Component</div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(Dashboard);