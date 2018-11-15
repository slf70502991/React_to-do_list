class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options //['Thing One', 'Thing Two', 'Thing Four']
    };
    
  }
  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option){
    if (!option) {
      return 'Enter valid value to add item';
    }else if (this.state.options.indexOf(option) > -1){
      return 'This option already exists.';
    }

    this.setState( (prevState) => ({ options: prevState.options.concat(option) }));
  }

  handleDeleteOptions(){
    // this.setState(()=>{
    //   return{
    //     options:[]
    //   };
    // });

    this.setState(() => ({ options: [] }));
  }

  // handleDeleteOption(optionToRemove){
  //   this.setState((prevState) => ({
  //     options: prevState.options.filter((option) => {
  //       return optionToRemove !== option
  //     })
  //   }));
  // }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

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
      <div>
      <Header subtitle={subtitle} />
      <Action 
        hasOptions={this.state.options.length > 0} 
        handlePick={this.handlePick}
        />
      <Options 
        options={this.state.options} 
        handleDeleteOptions={this.handleDeleteOptions} 
        handleDeleteOption = {this.handleDeleteOption}
        />
      <AddOptions 
      handleAddOption={this.handleAddOption} />
      </div>
      
    );
  }
}
IndecisionApp.defaultProps = {
  options: []
};

const Header = (props)=>{
  return(
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title:'Some default props'
};

// class Header extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Action = (props)=>{
  return (
    <div>
        <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
          What should I do?
        </button>
      </div>
  );
};

// class Action extends React.Component {
//   // handlePick(){
//   //   alert('handlePick');
//   // }
//   render(){
//     return(
//       <div>
//         <button 
//         onClick={this.props.handlePick}
//         disabled={!this.props.hasOptions}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

const Options = (props)=>{
  return(
    <div>
      
      <button onClick={props.handleDeleteOptions}>Remove All Options</button> 
      { props.options.length === 0 && <p>Please add some option to get started.</p>}
      {
        props.options.map((option) => <Option 
        key={option} 
        optionText={option} 
        handleDeleteOption={props.handleDeleteOption}
        />)
      }
             
    </div>
  );
}

// class Options extends React.Component {
//   // constructor(props){
//   //   super(props);
//   //   this.removeAll.bind = this.removeAll.bind(this);
//   // }
//   // removeAll(){
//   //   console.log(this.props.options);
//   // }
//   render(){
//     return(
//       <div>
        
//         <button onClick={this.props.handleDeleteOptions}>Remove All Options</button> 
//         <Option />
//         {
//           this.props.options.map((option) => <Option key={option} optionText={option} />)
//         }
               
//       </div>
//     );
//   }
// }

const Option = (props)=>{
  return(
    <div>
    <ul>
      <li>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
      </li>
    </ul>
      
    </div>
  );
}

// class Option extends React.Component {
//   render(){
//     return(
//       <div>
//         <ul>
//           {this.props.optionText}
//         </ul>
//       </div>
//     );
//   }
// }

// 1. Setup the form with text input and submit button
// 2. Wire up onSubmit
// 3. handleAppOption -> fetched the value typed -> if value, then alert

class AddOptions extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e){
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    
    this.setState(()=>{
      return {error: error}
    });

    if (!error) {
      e.target.elements.option.value = ''; //如果沒有 error，則清空 input 裡面的值
    }
  }
  render(){
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp options={['First Props', 'Second Props', 'Third Props']} />, document.getElementById('app'));

