import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [employees, setEmployees] = useState(0);
  const [clients, setClients] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const employeeInterval = setInterval(() => {
      setEmployees((prev) => {
        if (prev >= 400) {
          clearInterval(employeeInterval);
          return 400;
        }
        return prev + 1;
      });
    }, 1);

    const clientInterval = setInterval(() => {
      setClients((prev) => {
        if (prev >= 1500) {
          clearInterval(clientInterval);
          return 1500;
        }
        return prev + 4;
      });
    }, 1);

    const yearsInterval = setInterval(() => {
      setYears((prev) => {
        if (prev >= 10) {
          clearInterval(yearsInterval);
          return 10;
        }
        return prev + 1;
      });
    }, 180);

    return () => {
      clearInterval(employeeInterval);
      clearInterval(clientInterval);
      clearInterval(yearsInterval);
    };
  }, []);

  return (
    <div className="counter-container">
      <div className="counter-item" style={{ '--order': 1 }}>
        <span className="number">{employees}</span>
        <span className="label">Employees</span>
      </div>
      <div className="counter-item" style={{ '--order': 2 }}>
        <span className="number">{clients}</span>
        <span className="label">Clients</span>
      </div>
      <div className="counter-item" style={{ '--order': 3 }}>
        <span className="number">{years}</span>
        <span className="label">Years of industry experience</span>
      </div>
    </div>
  );
};

export default Counter;