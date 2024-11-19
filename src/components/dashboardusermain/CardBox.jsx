import React from "react";
import useAuthStore from "../../store/Store";



const cardFooters = [
  "Current Month Working Days vs Late Login",
  "Leave Application Status",
  "Upcoming Public Holidays",
  "Total Leave Balance"
];

const CardBox = () => {
  const data = useAuthStore((state) => state.data) ;
console.log(data);
  return (
    <div className="row mt-5">
      {cardFooters.map((footer, index) => (
        <div className="box col-md-3" key={index}>
          <div className="card">
            <div className="card-body">
              <div className="work_log">
                {index === 0 && (
                  <>
                    <div className="work_day1">
                      <span>27</span>
                      <p className="mt-1">Working Days</p>
                    </div>
                    <div className="work_day1">
                      <span className="s1">5</span>
                      <p className="mt-1">Late Login</p>
                    </div>
                  </>
                )}
                {index === 1 && (
                  <>
                    <div className="work_day1">
                      <span>1</span>
                      <p className="mt-1">Applied</p>
                    </div>
                    <div className="work_day1">
                      <span className="s1">2</span>
                      <p className="mt-1">Taken</p>
                    </div>
                  </>
                )}
                {index === 2 && (
                  <>
                    <div className="work_day1">
                      <span className="s2">Date</span>
                      <p className="pr1 mt-3">11th-13th Oct</p>
                      <p className="pr1">1st Nov</p>
                    </div>
                    <div className="work_day1">
                      <span className="s2">Occasion</span>
                      <p className="pr2 mt-3">Ashtami</p>
                      <p className="pr2">Diwali</p>
                    </div>
                  </>
                )}
                {index === 3 && (
                  <>
                    
                    <div className="work_day1">
                      <span>5</span>
                      <p className="mt-1">PL</p>
                    </div>
                    <div className="work_day1">
                      <span>12</span>
                      <p className="mt-1">CL</p>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="ftr">
              <h6>{footer}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBox;
