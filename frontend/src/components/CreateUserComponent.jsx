import React, { Component } from 'react'
import UserService from '../services/UserService';

class CreateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailAddress: '',
            phoneNumber: '',
            jobTitle: '',
            company: '',
            profileLink: ''

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            UserService.getUserById(this.state.id).then( (res) =>{
                let user = res.data;
                this.setState({firstName: user.firstName,
                    lastName: user.lastName,
                    emailAddress : user.emailAddress,
                    phoneNumber : user.phoneNumber,
                    jobTitle : user.jobTitle,
                    company: user.company,
                    profileLink: user.profileLink
                });
            });
        }
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = {firstName: this.state.firstName, lastName: this.state.lastName, emailAddress: this.state.emailAddress, phoneNumber: this.state.phoneNumber,
        jobTitle: this.state.jobTitle, company: this.state.company, profileLink: this.state.profileLink};
        console.log('user => ' + JSON.stringify(user));

        // step 5
        if(this.state.id === '_add'){
            UserService.createUser(user).then(res =>{
                this.props.history.push('/users');
            });
        }else{
            UserService.updateUser(user, this.state.id).then( res => {
                this.props.history.push('/users');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add User</h3>
        }else{
            return <h3 className="text-center">Update User</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="e.g. Sarah" name="firstName" className="form-control"
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="e.g. White" name="lastName" className="form-control"
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Address: </label>
                                            <input placeholder="e.g. s.white@gmail.com" name="emailAddress" className="form-control"
                                                value={this.state.emailAddress} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone Number: </label>
                                            <input placeholder="International dialling codes not needed e.g. 01441 987 7657" name="phoneNumber" className="form-control"
                                                   value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Job Title: </label>
                                            <input placeholder="Job Title" name="jobTitle" className="form-control"
                                                   value={this.state.jobTitle} onChange={this.changeJobTitleHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Company: </label>
                                            <input placeholder="Company" name="company" className="form-control"
                                                   value={this.state.company} onChange={this.changeCompanyHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Profile Link: </label>
                                            <input placeholder="e.g. https://www.mysite.com/me-last-year.jpg" name="profileLink" className="form-control"
                                                   value={this.state.profileLink} onChange={this.changeProfileLinkHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateUser}>Save</button>
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

export default CreateUserComponent
