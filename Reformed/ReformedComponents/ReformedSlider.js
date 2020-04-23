import React, { useCallback, useContext } from "react";
import { ReformedContext } from "../Reformed";
import { Typography, Slider } from "@material-ui/core";

const ReformedSlider = ({
  label,
  val,
  input,
  config = { step: 1, max: 100, min: 0 }
}) => {
  const { data, setData } = useContext(ReformedContext);
  const handleChange = useCallback(
    (_, newVal) => setData({ ...data, [input]: newVal }),
    [data, setData, input]
  );

  return (
    <div className="textFieldWrap">
      <Typography gutterBottom>{label}</Typography>
      <Slider
        defaultValue={0}
        valueLabelDisplay="auto"
        id="continuous-slider"
        name={input}
        label={label}
        value={val}
        onChange={handleChange}
        // marks
        min={config.min}
        max={config.max}
        step={config.step}
      />
    </div>
  );
};

export default ReformedSlider;
