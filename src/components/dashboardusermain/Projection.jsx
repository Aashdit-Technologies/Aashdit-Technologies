import React from "react";
import { MdDescription } from "react-icons/md";

const Projection = () => {
  return (
    <>
      <div className="row mt-4">
        <div className="Projection">
          <div className="card">
            <div className="card-body">
              <ul>
                <li>
                  <a href="#" className="proj">
                    <MdDescription className="des" />
                    Monthly Projection
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projection;
