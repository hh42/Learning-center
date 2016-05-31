class Todolist extends React.Component {
	constructor(){
		super();
		this.state = {
			inputval: '',
			id: 0,
			todolist: []
		}
	}
	update(e){
		this.setState({
			inputval: e.target.value
		})
	}
	add(e){
		e.preventDefault()
		var todolist = this.state.todolist;
		var obj = {inputval: this.state.inputval, id: this.state.id}
		todolist.push(obj);
		this.setState({
			todolist: todolist,
			inputval: '',
			id: this.state.id + 1
		})
	}
	del(id){
		for (var i = 0; i < this.state.todolist.length; i++){
			if (this.state.todolist[i].id == id){
				var todolist = this.state.todolist;
				todolist.splice(i, 1);
				this.setState({ todolist: todolist });
				break;
			}
		}
		
	}
	render(){
		return (
			<div>
				<form onSubmit={this.add.bind(this)}>
					<input id={this.props.id} onChange={this.update.bind(this)} add={this.update.bind(this)} value={this.state.inputval} />
				</form>
				{this.state.todolist.map((todo) => {
					return <Todo key={todo.id} update={this.update.bind(this)} del={this.del.bind(this)} add={this.add.bind(this)} id={todo.id} inputval={todo.inputval} />
				})}
			</div>
		)
	}
}

class Todo extends React.Component {
	constructor(props){
		super(props);
	}
	update(e){
		this.props.update(e);
	}
	del(id){
		this.props.del(id)
	}
	render(){
		return (
			<div>
				<button onClick={this.props.del.bind(this, this.props.id)}>del</button>
				<p>{this.props.inputval}</p>
			</div>
		)
	}
}

ReactDOM.render(<Todolist />, document.getElementById('todo'));