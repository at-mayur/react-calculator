
import classes from "../styles/displayStyle.module.css";

function display(props){
    return (
        <div className={classes.display}>
            <textarea className={classes.text} defaultValue={ props.query }></textarea>
        </div>
    );
}

export default display;