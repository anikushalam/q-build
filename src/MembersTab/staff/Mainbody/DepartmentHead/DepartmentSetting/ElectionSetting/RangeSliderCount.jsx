import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 1,
    label: "1 day",
  },
  {
    value: 2,
    label: "2 day",
  },
  {
    value: 3,
    label: "3 day",
  },
  {
    value: 4,
    label: "4 day",
  },
  {
    value: 5,
    label: "5 day",
  },
  {
    value: 6,
    label: "6 day",
  },
  {
    value: 7,
    label: "7 day",
  },
  {
    value: 8,
    label: "8 day",
  },
  {
    value: 9,
    label: "9 day",
  },
  {
    value: 10,
    label: "10 day",
  },
];

function onShowValue(value) {
  return `${value} day`;
}

export default function RangeSliderCount({
  onUpdateElectionDate,
  name,
  value,
}) {
  return (
    <Box sx={{ width: 670 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={1}
        getAriaValueText={onShowValue}
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
        max={10}
        onChange={onUpdateElectionDate}
        name={name}
        value={value}
      />
    </Box>
  );
}
