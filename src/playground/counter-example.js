class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne= this.handleAddOne.bind(this);
        this.handleMinusOne= this.handleMinusOne.bind(this);
        this.handleReset= this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    
    
    componentDidMount(){
        const count = parseInt(localStorage.getItem("count"), 10);
        this.setState(() => ({count}));
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevState.count != this.state.count){
            localStorage.setItem("count", this.state.count);
        }
        
    }

    handleAddOne() {
        //    this.state.count = this.state.count +1;
        //    console.log(this.state); mope, use this method:
        this.setState((prevState) => {
            return {
                count: prevState.count +1 
            };
        });
    }
    
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        });
    }
    
    handleReset() {
        
        this.setState((prevState) => {
            return {
                count: 0
            }
        });

    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}



ReactDOM.render(<Counter />, document.getElementById('app'));
    /*
    let count=0;
    
    const addOne = () => {
        count++;
        render();
    };
    
    const minusOne = () => {
        count--;
        render();
    };
    
    const reset = () => {
        count=0;
        render();
    };
    
    
    var appRoot= document.getElementById('app');
    
    
    
    const render = () => {
        const template2 = (
            <div>
                <h1>Count: {count}</h1>
                <button onClick={addOne} className="button">+1</button>
                <button onClick={minusOne} className="button">-1</button>
                <button onClick={reset} className="button">reset</button>
            </div>
        )
        
        ReactDOM.render(template2, appRoot);
    };
    
    render();
    */