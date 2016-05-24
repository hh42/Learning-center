class Slider extends React.Component {
	constructor(){
		super();
		this.state = {
			red: 0,
			green: 0,
			blue: 0
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
		})
	}
	render(){

		var divStyle = {
		  backgroundColor: 'rgb('')',
		};

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
			</div>	
		)
	}
}

class NumInput extends React.Component {
	render(){
		let label = this.props.label !== '' ? <label>{this.props.label} - {this.props.val}</label> : ''
		return (
			<div>
				<input 
					ref= "input" 
					type = {this.props.type}
					min = {this.props.min}
					max = {this.props.max}
					step = {this.props.step}
					defaultValue = {this.props.val}
					/* call update function passed as props in Slider */
					onChange={this.props.update}
				/>
				{label}
			</div>
		);
	}
}

/* Component prototype */
NumInput.propTypes = {
	min: React.PropTypes.number,
	max: React.PropTypes.number,
	step: React.PropTypes.number,
	val: React.PropTypes.number,
	label: React.PropTypes.string,
	update: React.PropTypes.func.isRequired,
	type: React.PropTypes.oneOf(['number', 'range']),
}

/* Default values */
NumInput.defaultProps = {
	min: 0,
	max: 0,
	step: 1,
	val: 0,
	label: '',
	type: 'range'
}

ReactDOM.render(
  <Slider />,
  document.getElementById('slider')
);


// var divStyle = {
// 	r: ReactDOM.findDOMNode(document.getElementById('red-slider')).value,
// 	g: ReactDOM.findDOMNode(document.getElementById('green-slider')).value,
// 	b: ReactDOM.findDOMNode(document.getElementById('blue-slider')).value,
// }








