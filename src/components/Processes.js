import React, { useState } from "react";
import PropTypes from "prop-types";
import View from "views/Processes";
import { useGet } from "seed/api";
import { Loading } from "seed/helpers";

function Processes() {
  const [evenProcesses, setEvenProcesses] = useState(true);

  const handleClickEven = (event) => {
    setEvenProcesses(true);
  };

  const handleClickOdd = (event) => {
    setEvenProcesses(false);
  };

  const reqProcesses = useGet("/processes");
  if (reqProcesses.loading) return <Loading />;
  if (reqProcesses.error) return "Error";
  const data = reqProcesses.data;

  return (
    <View
      processes={data}
      evenProcesses={evenProcesses}
      handleClickEven={handleClickEven}
      handleClickOdd={handleClickOdd}
    />
  );
}

Processes.propTypes = {};

export default Processes;
