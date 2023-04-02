// importing styles
import classes from "../styles/numberPadStyle.module.css";

// importing button component
import Button from "./button";

// Functional NumberPad component
function numberPad(props) {
  return (
    // render all buttons and passing respective symbol, color, color on hover and action for button as props
    <div className={classes.keys}>
      <Button
        symbol={"AC"}
        color={"rgba(175, 129, 2, 0.8)"}
        hoverColor={"rgba(236, 150, 1, 0.8)"}
        btnEvent={props.clearScreen}
      />
      <Button
        symbol={"+/-"}
        color={"rgba(161, 102, 191, 0.8)"}
        hoverColor={"rgba(141, 34, 177, 0.8)"}
        btnEvent={props.plusMinus}
      />
      <Button
        symbol={"%"}
        color={"rgba(161, 102, 191, 0.8)"}
        hoverColor={"rgba(141, 34, 177, 0.8)"}
        btnEvent={props.buildQuery}
      />
      <Button
        symbol={"/"}
        color={"rgba(161, 102, 191, 0.8)"}
        hoverColor={"rgba(141, 34, 177, 0.8)"}
        btnEvent={props.buildQuery}
      />

      <Button
        symbol={"9"}
        color={"rgba(58, 43, 65, 0.8)"}
        hoverColor={"rgba(141, 34, 177, 0.8)"}
        btnEvent={props.buildQuery}
      />
      <Button
        symbol={"8"}
        color={"rgba(58, 43, 65, 0.8)"}
        hoverColor={"rgba(141, 34, 177, 0.8)"}
        btnEvent={props.buildQuery}
      />
      <Button
        symbol={"7"}
        color={"rgba(58, 43, 65, 0.8)"}
        hoverColor={"rgba(141, 34, 177, 0.8)"}
        btnEvent={props.buildQuery}
      />
      <Button
        symbol={"*"}
        color={"rgba(161, 102, 191, 0.8)"}
        hoverColor={"rgba(141, 34, 177, 0.8)"}
        btnEvent={props.buildQuery}
      />

      <Button
        symbol={"6"}
        color={"rgba(58, 43, 65, 0.8)"}
        hoverColor={"rgba(141, 34, 177, 0.8)"}
        btnEvent={props.buildQuery}
      />
      <Button
        symbol={"5"}
        color={"rgba(58, 43, 65, 0.8)"}
        hoverColor={"rgba(141, 34, 177, 0.8)"}
        btnEvent={props.buildQuery}
      />
      <Button
        symbol={"4"}
        color={"rgba(58, 43, 65, 0.8)"}
        hoverColor={"rgba(141, 34, 177, 0.8)"}
        btnEvent={props.buildQuery}
      />
      <Button
        symbol={"+"}
        color={"rgba(161, 102, 191, 0.8)"}
        hoverColor={"rgba(141, 34, 177, 0.8)"}
        btnEvent={props.buildQuery}
      />

      <Button
        symbol={"3"}
        color={"rgba(58, 43, 65, 0.8)"}
        hoverColor={"rgba(141, 34, 177, 0.8)"}
        btnEvent={props.buildQuery}
      />
      <Button
        symbol={"2"}
        color={"rgba(58, 43, 65, 0.8)"}
        hoverColor={"rgba(141, 34, 177, 0.8)"}
        btnEvent={props.buildQuery}
      />
      <Button
        symbol={"1"}
        color={"rgba(58, 43, 65, 0.8)"}
        hoverColor={"rgba(141, 34, 177, 0.8)"}
        btnEvent={props.buildQuery}
      />
      <Button
        symbol={"-"}
        color={"rgba(161, 102, 191, 0.8)"}
        hoverColor={"rgba(141, 34, 177, 0.8)"}
        btnEvent={props.buildQuery}
      />

      <Button
        symbol={"0"}
        color={"rgba(58, 43, 65, 0.8)"}
        hoverColor={"rgba(141, 34, 177, 0.8)"}
        btnEvent={props.buildQuery}
      />
      <Button
        symbol={"."}
        color={"rgba(58, 43, 65, 0.8)"}
        hoverColor={"rgba(141, 34, 177, 0.8)"}
        btnEvent={props.buildQuery}
      />
      <Button
        symbol={"<="}
        color={"rgba(58, 43, 65, 0.8)"}
        hoverColor={"rgba(141, 34, 177, 0.8)"}
        btnEvent={props.backSpace}
      />
      <Button
        symbol={"="}
        color={"rgba(148, 48, 197, 0.8)"}
        hoverColor={"rgba(141, 34, 177, 0.8)"}
        btnEvent={props.equalPress}
      />
    </div>
  );
}

export default numberPad;
