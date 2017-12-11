import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOptions from './AddOptions';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    componentDidMount= () => {   //instance of the class
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

    componentDidUpdate= (prevProps, prevState) => {   //instance of the class
        if(prevState.options.length != this.state.options.length){
            const json= JSON.stringify(this.state.options);
            localStorage.setItem('options', json);

        }
    }

    compoentWillUnmouted= () => {
        console.log("Component will unmounted!");
    }

    handleDeleteOptions= () =>{
        this.setState(() => ({options: [] }))
    }

    handleDeleteOption = (optionToDelete) => {
        this.setState((prevState) =>({options: prevState.options.filter((option) => option!== optionToDelete)}))
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        //alert(this.state.options[randomNum]);
        this.setState(() => ({selectedOption: this.state.options[randomNum]}));    
    }

    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid value!';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option is already exists'
        }
        this.setState((prevState) => ( {options: prevState.options.concat([option])}))

    }

    handleCloseModal = (selectedOption) => {
        this.setState(() => ({selectedOption: undefined}))
    }

    render() {
        return (
            <div className="background">
                <Header/>
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options= {this.state.options}
                            handleDeleteOptions= {this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOptions 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                selectedOption={this.state.selectedOption}
                handleCloseModal={this.handleCloseModal}
                />
            </div>
        );
    }
}

export default IndecisionApp;