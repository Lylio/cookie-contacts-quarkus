import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    getYear() {
        return new Date().getFullYear();
    }

    render() {
        return (
            <div className="footer-parent">
                <footer className = "footer">
                    <span className="copyright">©{this.getYear()} <a href="https://www.linkedin.com/in/lylechristine/">LYLE CHRISTINE</a></span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
