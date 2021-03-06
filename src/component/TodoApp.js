
import React,{ Component } from 'react'

class TodoApp extends Component{
    constructor(props){
        super(props)
        this.state = {items: [], text: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render(){
        return(
            <div>
                <h3>TODO</h3>
                <TodoLst items={this.state.items}></TodoLst>
                <form onSubmit = {this.handleSubmit}>
                    <input onChange = {this.handleChange} value={this.state.text}/>
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        )
    }



    handleChange(e){
        console.log(e.target)
        this.setState({text: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        console.log(e.target)
        if(!this.state.text.length){
            return
        }

        const newItem = {
            text: this.state.text,
            id: Date.now()
        } 

        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ''
        }))

    }


}



class TodoLst extends Component{
    render(){
        return(
            <ul>
                {this.props.items.map(item => (<li key = {item.id}> {item.text}</li>))}
            </ul>
        )
    }
}


export default TodoApp