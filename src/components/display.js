// import styles for display component
import classes from "../styles/displayStyle.module.css";

// Functional display component
function display(props){
    return (
        <div className={classes.display}>
            {/* Setting default value with expression received from props */}
            <textarea className={classes.text} defaultValue={ props.query }></textarea>
        </div>
    );
}

export default display;