
var user={
    name:'Sharon Lin',
    age:26,
    location:'NY'
  }
  
  const app = {
    title:'Indecision',
    subtitle:'to-do-list',
    options:['one','two'],  
  }
  
  function getLocation(location){
    if(location){
      return <p>Location:{user.location}</p>;
    }
  }
  
  const fullName = 'Sharon Lin';
  let firstName;
  const getFirstName = fullName.split(' ')[0];
  // function getFirstName(name){  
  //   if(name){
  //     return firstName;
  //   }
  // }
  
  const onFormSubmit = (e)=>{
    e.preventDefault(); // 防止每次畫面重新整理
    const option= e.target.elements.option.value;
    if(option){
      app.options.push(option);
      e.target.elements.option.value = '';
      submitRenderApp();
    }  
  }
  
  const removeOptions = (e) =>{
    e.preventDefault();
    app.options=[];
    submitRenderApp();
  }
  
  const onMakeDecision = ()=>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
  }
  
  const numbers = [55,56,57];
  
  var appRoot = document.getElementById('app');
  
  const submitRenderApp = ()=>{
    const template = (<div>
        <h1>{app.title ? app.title : 'Unknown'}</h1>
        {(app.subtitle && app.subtitle.length >=0) && <h3>{app.subtitle}</h3>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'Np options'}</p>
        <p>{app.options +' '}</p>
        {
          /*[<p key='1'>a</p>,<p key="2">b</p>,<p key="3">c</p>]*/
        }
        <ol>
          {
            app.options.map((option)=><li key={option}>{option}</li>)
          } 
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
          <button onClick={removeOptions}>Remove All</button>
        </form>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        
        
      </div>);
      ReactDOM.render(template, appRoot);
  }
  submitRenderApp();
  
  
  
  
  
  
  
  
  
    
    
    