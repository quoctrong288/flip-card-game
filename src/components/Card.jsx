import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFlipped: false
        };
        this.number = props.number;
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        if (!this.state.isFlipped) {
            let canFlip = this.props.onClickHandle(this);
            if (canFlip) {
                this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
            }
        }
    }

    getColor() {
        return 'gray'
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <div className ="card" onClick={this.handleClick} style={{backgroundColor: 'gray'}}>
                    <div className="front">
                    </div>
                </div>
        
                <div className ="card" onClick={this.handleClick} style={{backgroundColor: 'orange'}}>
                    <div className="back">
                        <div className="number" style={{zIndex: 1}}>
                            {this.number}
                        </div>
                    </div>
                </div>
            </ReactCardFlip>
          )
    }
}

export default Card;