class Counter extends React.Component {
  constructor(props){
    super(props);
    this.HandleAddOne = this.HandleAddOne.bind(this)  ;
    this.HandleMinusOne = this.HandleMinusOne.bind(this);
    this.HandleReset = this.HandleReset.bind(this);
    this.state = {
      count:0,
      name:'Sharon'
    };
  }
  
  componentDidMount(){
    console.log('fetching data');

    try {
      const stringCount = localStorage.getItem('count');
      const count = parseInt(stringCount, 10); // 10 代表十進位

      if (!isNaN(count)) {
        this.setState(() => ( { count }));
      }

    }catch(e){

    }
    
  }
  componentDidUpdate(prevState){
    console.log('saving data');   
    if (prevState.count !== this.state.count) {
      const json = JSON.stringify(this.state.count);
      localStorage.setItem('count', json);
    }
    
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  HandleAddOne(){
    this.setState((prevState)=>{
      return {
        count: prevState.count +1
      };
    });
  }
  HandleMinusOne(){
    this.setState((prevState)=>{
      return{
        count: prevState.count -1
      }
    });
  }
  HandleReset(){
    this.setState(()=>{
      return{
        count: 0
      };
    });
  }
  render(){
    
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.HandleAddOne}>+1</button>
        <button onClick={this.HandleMinusOne}>-1</button>
        <button onClick={this.HandleReset}>Reset</button>
      </div>
    );
  }
}



ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = ()=>{
//   count = count + 1;
//   renderCounterApp();
// };
// const minusOne = ()=>{
//   count--;
//   renderCounterApp();
// };
// const reset = ()=>{
//   count=0;
//   renderCounterApp();
// }

// var appRoot = document.getElementById('app');
// const renderCounterApp = ()=>{
//   const templatetwo =( <div>
//   <h1>{count}</h1>
//   <button onClick={addOne}>+1</button>
//   <button onClick={minusOne}>-1</button>
//   <button onClick={reset}>Reset</button>
// </div>);
// ReactDOM.render(templatetwo, appRoot);
// }
// renderCounterApp();