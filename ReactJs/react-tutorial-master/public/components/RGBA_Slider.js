
class Slider extends React.Component {
	constructor(){
		super();
		this.state = {
			red: 0,
			green: 0,
			blue: 0,
			opacity: 1,
		}
		/* bind update function to Slider element */
		this.update = this.update.bind(this)
	}
	update(e){
		this.setState({
			/* find DOM element with 'input' reference in the element of this with 'red' reference then get its 'input' ref's value */
			red: ReactDOM.findDOMNode(this.refs.red.refs.input).value,
			green: ReactDOM.findDOMNode(this.refs.green.refs.input).value,
			blue: ReactDOM.findDOMNode(this.refs.blue.refs.input).value,
			opacity: ReactDOM.findDOMNode(this.refs.opacity.refs.input).value,
		})
	}
	render(){

		var divStyle = {
		  backgroundColor: (
				"rgba(".concat(this.state.red).
				concat(", ").
				concat(this.state.green).
				concat(", ").
				concat(this.state.blue).
				concat(", ").
				concat(this.state.opacity).
				concat(")")
		  	)
		}

		return (
			<div style={divStyle}>
				<NumInput
					ref ="red"
					min = {0}
					max = {255}
					step = {1}
					/* use '+' to convert string state to number */
					val = {+this.state.red}
					type = "range"
					label = "Red"
					update ={this.update}
				/>
				<NumInput 
					ref ="green"
					min = {0}
					max = {255}
					step = {1}
					val = {+this.state.green}
					type = "range"
					label = "Green"
					update ={this.update}
				/>
				<NumInput 
					ref ="blue"
					min = {0}
					max = {255}
					step = {1}
					val = {+this.state.blue}
					type = "range"
					label = "Blue"
					update ={this.update}
				/>
				<NumInput 
					ref ="opacity"
					min = {0}
					max = {1}
					step = {0.1}
					val = {+this.state.opacity}
					type = "range"
					label = "Opacity"
					update ={this.update}
				/>
			</div>	
		)
	}
}

ReactDOM.render( <Slider />, document.getElementById('slider'));







