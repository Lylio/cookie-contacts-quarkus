import React, { Component } from 'react'
import UserService from '../services/UserService'

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View User Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label><b>First Name:&nbsp; </b></label>
                            <div>{ this.state.user.firstName }</div>
                        </div>
                        <div className = "row">
                            <label><b>Last Name:&nbsp; </b></label>
                            <div> { this.state.user.lastName }</div>
                        </div>
                        <div className = "row">
                            <label><b>Email Address:&nbsp; </b></label>
                            <div> { this.state.user.emailAddress }</div>
                        </div>
                        <div className = "row">
                            <label><b>Phone Number:&nbsp; </b></label>
                            <div> { this.state.user.phoneNumber }</div>
                        </div>
                        <div className = "row">
                            <label><b>Job Title:&nbsp; </b></label>
                            <div> { this.state.user.jobTitle }</div>
                        </div>
                        <div className = "row">
                            <label><b>Company:&nbsp; </b></label>
                            <div> { this.state.user.company }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewUserComponent
