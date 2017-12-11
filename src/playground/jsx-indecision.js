console.log("App.js is running!");

// JSX
// dependencies PS C:\Users\HoangS0\react\indecision-app> yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2^C
const app={
    title: 'Indecision App',
    options: []
}
const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value='';
        render();
    }
};

const showOptions = () => {

};

const removeAllOptions = () =>{
    app.options=[];
    render();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(option);
}

const render = () => {
    let template = (
        <div>
            <h1>{app.title.toUpperCase()}</h1>
            <p>{(app.subtitle) ? app.subtitle : null}</p>
            <button disabled={app.options.length==0} onClick={makeDecision}> What should I do </button>
            <button onClick={removeAllOptions}>Remove All</button>
            <p>{app.options.length}</p>
            <ol>
            {   
                app.options.map((option) => {
                    return  <p key={option}>{option}</p>;
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
        );
    ReactDOM.render(template, appRoot);
}
var appRoot= document.getElementById('app');

render();

