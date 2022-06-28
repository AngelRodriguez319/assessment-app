import React from "react";
import PropTypes from "prop-types";
import Process from "components/Process";

const Processes = ({
  processes,
  evenProcesses,
  handleClickEven,
  handleClickOdd,
}) => (
  <div class="container mt-5" style={{ overflow: "scroll", height: "90%" }}>
    <div class="row justify-content-center mt-5 mb-5">
      <div class="row w-50">
        <div class="col w-50">
          <button
            class={
              evenProcesses
                ? "btn btn-block btn-lg btn-light border border-dark active"
                : "btn btn-block btn-lg btn-light border border-dark"
            }
            onClick={handleClickEven}
          >
            RESULTADOS PARES
          </button>
        </div>
        <div class="col w-50">
          <button
            class={
              !evenProcesses
                ? "btn btn-block btn-lg btn-light border border-dark active"
                : "btn btn-block btn-lg btn-light border border-dark"
            }
            onClick={handleClickOdd}
          >
            RESULTADOS NONES
          </button>
        </div>
      </div>
    </div>

    {evenProcesses &&
      processes.map((process) => process.id % 2 == 0 && Process(process))}

    {!evenProcesses &&
      processes.map((process) => process.id % 2 != 0 && Process(process))}
  </div>
);

Processes.propTypes = {
  processes: PropTypes.array,
  evenProcesses: PropTypes.bool,
  handleClickEven: PropTypes.func,
  handleClickOdd: PropTypes.func,
};

export default Processes;
