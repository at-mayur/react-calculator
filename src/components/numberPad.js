import classes from "../styles/numberPadStyle.module.css";

import Button from "./button";


function numberPad(props){
    return (
        <div className={ classes.keys }>
            <Button symbol={"AC"} color={ "rgba(175, 129, 2, 0.8)" } hoverColor={ "rgba(236, 150, 1, 0.8)" } btnEvent={ props.clearScreen } />
            <Button symbol={"+/-"} color={ "rgba(161, 102, 191, 0.8)" } hoverColor={ "rgba(141, 34, 177, 0.8)" } btnEvent={ props.plusMinus } />
            <Button symbol={"%"} color={ "rgba(161, 102, 191, 0.8)" } hoverColor={ "rgba(141, 34, 177, 0.8)" } btnEvent={ props.buildQuery } />
            <Button symbol={"/"} color={ "rgba(161, 102, 191, 0.8)" } hoverColor={ "rgba(141, 34, 177, 0.8)" } btnEvent={ props.buildQuery } />

            <Button symbol={"9"} color={ "rgba(58, 43, 65, 0.8)" } hoverColor={ "rgba(141, 34, 177, 0.8)" } btnEvent={ props.buildQuery } />
            <Button symbol={"8"} color={ "rgba(58, 43, 65, 0.8)" } hoverColor={ "rgba(141, 34, 177, 0.8)" } btnEvent={ props.buildQuery } />
            <Button symbol={"7"} color={ "rgba(58, 43, 65, 0.8)" } hoverColor={ "rgba(141, 34, 177, 0.8)" } btnEvent={ props.buildQuery } />
            <Button symbol={"*"} color={ "rgba(161, 102, 191, 0.8)" } hoverColor={ "rgba(141, 34, 177, 0.8)" } btnEvent={ props.buildQuery } />

            <Button symbol={"6"} color={ "rgba(58, 43, 65, 0.8)" } hoverColor={ "rgba(141, 34, 177, 0.8)" } btnEvent={ props.buildQuery } />
            <Button symbol={"5"} color={ "rgba(58, 43, 65, 0.8)" } hoverColor={ "rgba(141, 34, 177, 0.8)" } btnEvent={ props.buildQuery } />
            <Button symbol={"4"} color={ "rgba(58, 43, 65, 0.8)" } hoverColor={ "rgba(141, 34, 177, 0.8)" } btnEvent={ props.buildQuery } />
            <Button symbol={"+"} color={ "rgba(161, 102, 191, 0.8)" } hoverColor={ "rgba(141, 34, 177, 0.8)" } btnEvent={ props.buildQuery } />

            <Button symbol={"3"} color={ "rgba(58, 43, 65, 0.8)" } hoverColor={ "rgba(141, 34, 177, 0.8)" } btnEvent={ props.buildQuery } />
            <Button symbol={"2"} color={ "rgba(58, 43, 65, 0.8)" } hoverColor={ "rgba(141, 34, 177, 0.8)" } btnEvent={ props.buildQuery } />
            <Button symbol={"1"} color={ "rgba(58, 43, 65, 0.8)" } hoverColor={ "rgba(141, 34, 177, 0.8)" } btnEvent={ props.buildQuery } />
            <Button symbol={"-"} color={ "rgba(161, 102, 191, 0.8)" } hoverColor={ "rgba(141, 34, 177, 0.8)" } btnEvent={ props.buildQuery } />

            <Button symbol={"0"} color={ "rgba(58, 43, 65, 0.8)" } hoverColor={ "rgba(141, 34, 177, 0.8)" } btnEvent={ props.buildQuery } />
            <Button symbol={"."} color={ "rgba(58, 43, 65, 0.8)" } hoverColor={ "rgba(141, 34, 177, 0.8)" } btnEvent={ props.buildQuery } />
            <Button symbol={"<="} color={ "rgba(58, 43, 65, 0.8)" } hoverColor={ "rgba(141, 34, 177, 0.8)" } btnEvent={ props.backSpace } />
            <Button symbol={"="} color={ "rgba(148, 48, 197, 0.8)" } hoverColor={ "rgba(141, 34, 177, 0.8)" } btnEvent={ props.equalPress } />
        </div>
    );
}

export default numberPad;