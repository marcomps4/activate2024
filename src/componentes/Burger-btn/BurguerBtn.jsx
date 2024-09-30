import '../Burger-btn/Burguer.css';


const Burguer = (props) => {
  
    return (
        <div onClick={props.handleClick} className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }
  
  export default Burguer