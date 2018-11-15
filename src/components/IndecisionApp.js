import React from 'react';
import AddOptions from './AddOptions';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';


class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
    // constructor(props){
    //   super(props);
    //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //   this.handlePick = this.handlePick.bind(this);
    //   this.handleAddOption = this.handleAddOption.bind(this);
    //   this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //   this.state = {
    //     options: props.options //['Thing One', 'Thing Two', 'Thing Four']
    //   };
      
    // }
    handlePick = () => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      // alert(option);
      this.setState(() => ({
        selectedOption: option
      }));

    };

    selectedOptionCleared = () =>{
      this.setState((prevState)=>({
        selectedOption:!prevState
      }));
    }
  
    handleAddOption = (option) => {
      if (!option) {
        return 'Enter valid value to add item';
      }else if (this.state.options.indexOf(option) > -1){
        return 'This option already exists.';
      }
  
      this.setState( (prevState) => ({ options: prevState.options.concat(option) }));
    };
  
    handleDeleteOptions = () => {
      this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option)
      }));
    };
  
  // // // Lifecycle Component // // //
  
    componentDidMount(){
      console.log('fetching data');
      try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json,'options');
  
        if (options) {
          this.setState(() =>( { options }) );
        }
        
      } catch (e) {
        // Do nothing at all
      }
      
    }
  
    componentDidUpdate(prevProps, prevState){
      console.log('saving data');
      console.log(this.props, this.state);
      console.log(prevProps, prevState);
      if (prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
    componentWillUnmount(){
      console.log('componentWillUnmount!');
    }
  
    render(){
      
      const subtitle = 'Write down something to do.';
      // const options = ['Thing One', 'Thing Two', 'Thing Four'];
  
      return(
        <div className="container">
        <Header subtitle={subtitle} />
        <Action 
            hasOptions={this.state.options.length > 0} 
            handlePick={this.handlePick}
            />
        <div className="widget">
          
          <Options 
            options={this.state.options} 
            handleDeleteOptions={this.handleDeleteOptions} 
            handleDeleteOption = {this.handleDeleteOption}
            />
            <AddOptions 
              handleAddOption={this.handleAddOption} />
        </div>
        
        

        <OptionModal 
        selectedOption={this.state.selectedOption} 
        selectedOptionCleared = {this.selectedOptionCleared}
        />

        </div>
        
      );
    }
  }
  IndecisionApp.defaultProps = {
    options: []
  };

export default IndecisionApp;


