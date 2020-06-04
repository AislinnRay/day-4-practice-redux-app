import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../redux/reducer';

class Dashboard extends Component {

    componentDidMount(){
        this.props.getUser();
    }

    //console.log({'from dashboard now: ', this.props})
    render(){
        return(
            <div>Dashboard Component</div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getUser})(Dashboard);