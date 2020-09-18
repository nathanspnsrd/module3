import React from "react"
import CompletedMemes from "./CompletedMemes"

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [],
            completedMemes: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({allMemeImgs: memes})
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({topText: "", bottomText: ""})

        const randomIndex = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randomIndex].url
        this.setState({randomImg: randMemeImg})

        let newCompletedMeme = {topText: this.state.topText, bottomText: this.state.bottomText, randomImg: this.state.randomImg}
   
        this.setState(prevState => ({
            completedMemes: [...prevState.completedMemes, newCompletedMeme]
        }))
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                     <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
                <div className="meme">
                    {this.state.completedMemes.map(completedMeme => 
                        <CompletedMemes {...completedMeme} />         
                    )}
                </div>
            </div>
        )
    }
}

export default MemeGenerator