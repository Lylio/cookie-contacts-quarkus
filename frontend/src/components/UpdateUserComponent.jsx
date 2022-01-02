import React, { Component } from 'react'
import UserService from '../services/UserService';

class UpdateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            phoneNumber:'',
            emailAddress: '',
            jobTitle: '',
            company: '',
            profileLink: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changePhoneNumber = this.changePhoneNumber.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( (res) =>{
            let user = res.data;
            this.setState({firstName: user.firstName,
                lastName: user.lastName,
                emailAddress : user.emailAddress
            });
        });
    }

    updateUser = (e) => {
        e.preventDefault();
        let user = {firstName: this.state.firstName, lastName: this.state.lastName, emailAddress: this.state.emailAddress, jobTitle: this.state.jobTitle};
        console.log('user => ' + JSON.stringify(user));
        console.log('id => ' + JSON.stringify(this.state.id));
        UserService.updateUser(user, this.state.id).then( res => {
            this.props.history.push('/users');
        });
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailAddress: event.target.value});
    }

    changePhoneNumberHandler= (event) => {
        this.setState({phoneNumber: event.target.value});
    }

    changeJobTitleHandler= (event) => {
        this.setState({jobTitle: event.target.value});
    }

    changeCompanyHandler= (event) => {
        this.setState({company: event.target.value});
    }

    changeProfileLinkHandler= (event) => {
        this.setState({profileLink: event.target.value});
    }

    cancel(){
        this.props.history.push('/users');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update User</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control"
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Butt: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control"
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Address: </label>
                                            <input placeholder="Email Address" name="emailAddress" className="form-control"
                                                value={this.state.emailAddress} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone Number: </label>
                                            <input placeholder="Phone Number" name="phoneNumber" className="form-control"
                                                   value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Company: </label>
                                            <input placeholder="Company" name="Company" className="form-control"
                                                   value={this.state.company} onChange={this.changeCompanyHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Profile Link: </label>
                                            <input placeholder="Profile Link" name="profileLink" className="form-control"
                                                   value={this.state.profileLink} onChange={this.changeProfileLinkHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateUser}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateUserComponent
