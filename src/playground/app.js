class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }

    componentDidMount() {   //instance of the class
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if(options){
                this.setState(() => ({ options}));
            }       
        } catch(e) {
            // do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {   //instance of the class
        if(prevState.options.length != this.state.options.length){
            const json= JSON.stringify(this.state.options);
            localStorage.setItem('options', json);

        }
    }

    compoentWillUnmouted() {
        console.log("Component will unmounted!");
    }

    handleDeleteOptions() {
        this.setState(() => ({options: [] }))
    }

    handleDeleteOption(optionToDelete) {
        this.setState((prevState) =>({options: prevState.options.filter((option) => option!== optionToDelete)}))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);    
    }

    handleAddOption(option){
        if(!option) {
            return 'Enter valid value!';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option is already exists'
        }
        this.setState((prevState) => ( {options: prevState.options.concat([option])}))

    }
    render() {
        return (
            <div>
                <Header/>
                <Action
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />
                <Options 
                    options= {this.state.options}
                    handleDeleteOptions= {this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>Welcome to an app!</h2>
        </div>
    );
}

Header.defaultProps = {
    title: "Indecision App"
}
/*
class Header extends React.Component {
    render(){
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>Welcome to an app!</h2>
            </div>
        );
    }
}
*/

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >Options
            </button>
        </div>
    );
};

/*
class Action extends React.Component {
    render(){
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >Options
                </button>
            </div>
        );
    }
}
*/


const Options = (props) => {
    return (              
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
            <p>{props.options.length}</p>
            {props.options.length === 0 && <p>Please add an option</p>}
            {props.options.map((option) => (
                <Option
                key= {option} 
                name={option}
                handleDeleteOption={props.handleDeleteOption} 
                />
            ))
            }
        </div>    
    );
};

/*
class Options extends React.Component {
    render() {
        let options=this.props.options;
        return (              
            <div>
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                <p>{options.length}</p>
                {options.map((option) => <Option key= {option} name={option} />)}
            </div>    
        );
    }
}
*/

const Option = (props) => {
    return (
        <p>{props.name}<button onClick={ (e) => {props.handleDeleteOption(props.name)}}>Remove</button></p>
    );
}

/*
class Option extends React.Component {
    render() {
        return (
            <p>{this.props.name}</p>
        );
    }
}
*/

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({error}));

        if(!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
        <div>
        {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
        </div>    
        );
    }
}

/*
const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age:</p>
        </div>
    );
};
*/
ReactDOM.render(<IndecisionApp options={["One", "Two"]}/>, document.getElementById('app'));