import React from "react"
import "./Badge.css"

class Badge extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favoriteFood: "",
            about: "",
            button: "hidden",
            badges: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
        if(this.state.firstName && this.state.lastName && this.state.email && this.state.birthPlace && this.state.phone && this.state.favoriteFood && this.state.about) {
            this.setState.button = "submitButton"
        }
    }
    
    handleSubmit(event) {
        event.preventDefault()
        this.setState.button = "hidden"
        let newBadge = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, birthPlace: this.state.birthPlace, phone: this.state.phone, favoriteFood: this.state.favoriteFood, about: this.state.about}
        this.setState({firstName: "", lastName: "", email:"", birthPlace:"", phone:"", favoriteFood:"", about:""})
        this.setState(prevState => ({
            badges: [...prevState.badges, newBadge]
        }))
    }

    render() {
        return (
            <div className="container">
                <h1>Please fill in the form and press Submit!</h1>
                <div className="formSection">
                    <form className="form">
                        <div className="inputRow">
                            <input 
                                type="text"
                                value={this.state.firstName}
                                name="firstName"
                                placeholder="First Name"
                                className="input"
                                onChange={this.handleChange}
                            />
                                <input 
                                type="text"
                                value={this.state.lastName}
                                name="lastName"
                                placeholder="Last Name"
                                className="input"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="inputRow">
                            <input 
                                type="text"
                                value={this.state.email}
                                name="email"
                                placeholder="Email"
                                className="input"
                                onChange={this.handleChange}
                            />
                                <input 
                                type="text"
                                value={this.state.birthPlace}
                                name="birthPlace"
                                placeholder="Place of Birth"
                                className="input"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="inputRow">
                            <input 
                                type="tel"
                                value={this.state.phone}
                                name="phone"
                                placeholder="Phone Number"
                                className="input"
                                onChange={this.handleChange}
                            />
                                <input 
                                type="text"
                                value={this.state.favoriteFood}
                                name="favoriteFood"
                                placeholder="Favorite Food"
                                className="input"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="inputRow">
                            <input 
                                type="text"
                                value={this.state.about}
                                name="about"
                                placeholder="Tell us about yourself!"
                                className="input"
                                className="about"
                                onChange={this.handleChange}
                            />
                        </div>
                        <input
                            type="submit"
                            className={this.state.button}
                            onClick={this.handleSubmit}
                        />
                    </form>
                </div>
                <div className="submitedForms">
                    <h1>Completed Forms</h1>
                    {this.state.badges.map(badge =>
                        <div className="completedBadge">
                            <div>
                                <span>
                                    Name: {badge.firstName} {badge.lastName}
                                </span>
                                <span>
                                    Phone: {badge.phone}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Place of Birth: {badge.birthPlace}
                                </span>
                                <span>
                                    Favorite Food: {badge.favoriteFood}
                                </span>
                            </div>

                            <div>
                                Email: {badge.email}
                            </div>
                            <div>
                                About: {badge.about}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Badge