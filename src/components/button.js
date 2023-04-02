// importing styles
import classes from "../styles/btnStyle.module.css";


// Functional button component
function button(props) {
    // Functions controlling hover action for button
  function mouseOver(event) {
    event.target.style.backgroundColor = props.hoverColor;
  }

  function mouseOut(event) {
    event.target.style.backgroundColor = props.color;
  }


  return (
    // rendering button component with respective color and action received as props
    <div
      className={classes.btn}
      style={{ backgroundColor: props.color }}
      onClick={props.btnEvent}
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
    >
      {props.symbol}
    </div>
  );
}

export default button;
