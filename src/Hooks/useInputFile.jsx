import React, { useState } from "react";

const useInputFile = (defaultValue) => {
  const [fieldValue, setFieldValue] = useState(defaultValue);

  const handelInputChange = (e) => {
    setFieldValue(e.target.value);
  };
  return [fieldValue, handelInputChange];
};

export default useInputFile;
