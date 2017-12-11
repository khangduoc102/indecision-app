class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle=this.handleToggle.bind(this);
        this.state= {
            visibility: false
        }
    }

    handleToggle() {
        this.setState((prvSt) =>{
            return {
                visibility: !prvSt.visibility
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>{this.state.visibility ? 'Hide detail' : 'Show detail'}</button>
                {
                    (this.state.visibility) && (
                        <div>
                            <p>Show me the money</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

ReactDOM.render(<Toggle/>, document.getElementById('app'));
/*
let visibility = false;

const toggleIt= () => {
    visibility=!visibility;
    render();
};


const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleIt}>{!visibility ? 'Show details' : 'Hide details'}</button>
            {(visibility) && (
                <div>
                    <p>Show me the money</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

var appRoot= document.getElementById('app');
render();
*/