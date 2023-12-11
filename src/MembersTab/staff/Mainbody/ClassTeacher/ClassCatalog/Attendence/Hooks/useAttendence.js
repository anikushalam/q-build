import { useState } from "react";

const useAttendence = () => {
  const [totalData, setTotalData] = useState([1, 2, 3, 4, 5, 6]);
  const [presentData, setPresentData] = useState([1, 3, 4, 6]);
  const [absentData, setAbsentData] = useState([2, 5]);

  const handlePresent = (id) => {
    const item = totalData[id];
    const itemIndex = absentData.indexOf(item);
    if (itemIndex > -1) {
      absentData.splice(itemIndex, 1);
    }

    setPresentData((prev) => [...prev, item]);
  };

  const handleAbsent = (id) => {
    const item = totalData[id];
    const itemIndex = presentData.indexOf(item);
    if (itemIndex > -1) {
      presentData.splice(itemIndex, 1);
    }
    setAbsentData((prev) => [...prev, item]);
  };

  return {
    totalData,
    presentData,
    absentData,
    handlePresent,
    handleAbsent,
  };
};

export default useAttendence;
