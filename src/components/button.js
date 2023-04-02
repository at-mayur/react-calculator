import classes from "../styles/btnStyle.module.css";

function button(props) {
  function mouseOver(event) {
    event.target.style.backgroundColor = props.hoverColor;
  }

  function mouseOut(event) {
    event.target.style.backgroundColor = props.color;
  }

  return (
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
