class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state={
            visibility:true,
            
        } 
    }
    handleToggleVisibility(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility,
            };
        });
        console.log(this.state);

    }
    render(){
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
                {(this.state.visibility ? 'Hide detail' :'Show Details')}
            </button>
            </div>
        );
    }
    
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const appRoot = document.getElementById('app');

// let visible = false;
// const onToggle = ()=>{
//     visible =! visible;
//     render();
// }

// const render = () =>{
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>            
//             <button onClick={onToggle}>
//                 {(visible ? 'Hide detail' :'Show Details')}
//             </button>
//             {
//                 (visible)&&(
//                     <div>
//                         <p>These are some information.</p>
//                     </div>
//                 )
//             }
//         </div>
//     );
//     ReactDOM.render(template,appRoot);
// }

// render();