

class Todolist extends React.Component {
	constructor(){
		this.state = {
			id: 2
		}
		console.log(this.state.id);
		super();
		// this.state = {
		// 	todolist: [],
		// 	inputval: '',
		// 	id: 0
		// }
	}
	update(e){
		this.setState({
			inputval: e.target.value
		})
	}

	add(e){
		e.preventDefault()
		var obj = {content: this.state.inputval, id: this.state.id}
		var tmp = this.state.todolist
		tmp.push(obj)

		this.setState({
			todolist: tmp,
			inputval: '',
			id: this.state.id + 1
		})
	}

	del(id){
		for (var i = 0; i < this.state.todolist.length; i++) {
			if (this.state.todolist[i].id == id) {
				break;
			}
		}
		var tmp = this.state.todolist
		tmp.splice(i, 1)
		this.setState({
			todolist: tmp
		})
	}

	render(){
		return (
			<div>
				<form onSubmit={this.add.bind(this)}>
					<input type="text" onChange={this.update.bind(this)} value={this.state.inputval} />
				</form>

				{this.state.todolist.map((todo) => {
					return <Todo del={this.del.bind(this)} key={todo.id} index={todo.id} content={todo.content} />
				})}
			</div>	
		)
	}
}

class Todo extends React.Component {
	constructor(props){
		super(props)
	}

	del(){
		this.props.del(this.props.index)
	}

	up(){
		this.props.up(this.props.index)
	}

	showInput(){
		var element = this.refs.content
		this.refs.content.innerHTML = 'tototo'
		console.log( this.refs.content, element)
	}

	render() {
		return (
			<div id={this.props.index}>
				<button onClick={this.del.bind(this)}>del</button>
				<p ref="content" onClick={this.showInput.bind(this)}>{this.props.content}</p>
			</div>
		)
	}
}

ReactDOM.render(<Todolist />, document.getElementById('todo'));
