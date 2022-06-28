import React from "react";
import PropTypes from "prop-types";

const Process = ({ process }) => (
  <div key={process.id} class="row mt-4">
    <div class="col m-0 row justify-content-center">
      <div class="card h-100 w-50 border border-dark">
        <div class="card-body pb-0">
          <div class="row mb-2">
            <div class="col">
              <h2>PROCESO {process.id}</h2>
              <p>Resultado: {process.result}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Process.propTypes = {
  process: PropTypes.object,
};

export default Process;
