import React, {Component} from "react";

class Box extends Component{
	render() {
		let style
		if (this.props.gender==='female'){
			style={border: "3px solid yellow"};
		}
		else {
			style={border: "3px solid blue"};
		}
		return(
            <div className="new" style={style}>
                <img src={this.props.taswira} />
				<p>{this.props.name}</p>
				<p>{this.props.des1}</p>
				<p>{this.props.des2}</p>
				<p>{this.props.gender}</p>
			</div>
        );
	}
}

export default Box;