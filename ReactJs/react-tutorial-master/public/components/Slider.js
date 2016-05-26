
// class Slider extends React.Component {
// 	constructor(){
// 		// super function work like setInitialState of previews ES version */
// 		super();
// 		this.state = {
// 			num: 0,
// 		}
// 		// bind update function to Slider element */
// 		this.update = this.update.bind(this)
// 	}
// 	update(e){
// 		this.setState({
// 			// find DOM element with 'input' reference in the element of this with 'num' reference then get its 'input' ref's value */
// 			num: ReactDOM.findDOMNode(this.refs.num.refs.input).value,
// 		})
// 	}
// 	render(){
// 		return (
// 			<div>
// 				<NumInput
// 					ref ="num"
// 					min = {0}
// 					max = {100}
// 					step = {1}
// 					// use '+' to convert string state to number */
// 					val = {+this.state.num}
// 					type = "range"
// 					label = "Num"
// 					update ={this.update}
// 				/>
// 			</div>	
// 		)
// 	}
// }

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

// ReactDOM.render( <Slider />, document.getElementById('targetId'));
export default {
  Component: ReactComponent
  // ...
}






