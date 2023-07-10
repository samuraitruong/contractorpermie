"use client";

import { useState, useEffect, ChangeEvent } from "react";

const CalculationForm = () => {
  const [standardSalary, setStandardSalary] = useState(70000);
  const [packageSalary, setPackageSalary] = useState(76650);
  const [contractRate, setContractRate] = useState(337.67);
  const [daysWorked, setDaysWorked] = useState(5);
  const [weekdaysYear, setWeekdaysYear] = useState(261);
  const [publicHolidays, setPublicHolidays] = useState(10);
  const [annualLeave, setAnnualLeave] = useState(20);
  const [sickLeave, setSickLeave] = useState(5);
  const [netDaysWorked, setNetDaysWorked] = useState(0);

  useEffect(() => {
    const calculateNetDaysWorked = () => {
      const totalLeave = annualLeave + sickLeave;
      const totalDays = weekdaysYear - publicHolidays - totalLeave;
      const netDays = (totalDays / 5) * daysWorked;
      setNetDaysWorked(netDays);
    };

    calculateNetDaysWorked();
  }, [daysWorked, weekdaysYear, publicHolidays, annualLeave, sickLeave]);

  const handleStandardSalaryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newStandardSalary = Number(e.target.value);
    setStandardSalary(newStandardSalary);
    setPackageSalary(newStandardSalary * 1.095);
    setContractRate((newStandardSalary * 1.095) / netDaysWorked);
  };

  const handlePackageSalaryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPackageSalary = Number(e.target.value);
    setPackageSalary(newPackageSalary);
    setStandardSalary(newPackageSalary / 1.095);
    setContractRate(newPackageSalary / 1.095 / netDaysWorked);
  };

  const handleNetworkDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setNetDaysWorked(+newValue);
    const newContractRate = packageSalary / newValue;
    setContractRate(newContractRate);
  };

  const handleContractRateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newContractRate = Number(e.target.value);
    setContractRate(newContractRate);
    setPackageSalary(newContractRate * netDaysWorked);
    setStandardSalary((newContractRate * netDaysWorked) / 1.095);
  };

  return (
    <div className="flex justify-center">
      <div className="w-1/2 p-2">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Type in the number you have
        </h3>
        <div className="border border-gray-300 p-2">
          <div className="">
            <label className="block mb-2">Standard annual salary</label>
            <input
              className="border border-gray-300 p-2 w-full"
              type="number"
              value={standardSalary}
              onChange={handleStandardSalaryChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Package annual salary</label>
            <input
              className="border border-gray-300 p-2 w-full"
              type="number"
              value={packageSalary}
              onChange={handlePackageSalaryChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">
              Daily contract rate (inc superannuation)
            </label>
            <input
              className="border border-gray-300 p-2 w-full"
              type="number"
              value={contractRate}
              onChange={handleContractRateChange}
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 sm:w-1/2 mb-4 p-2">
        <h3 className="text-xl font-semibold mb-4 text-center">Assumptions</h3>
        <div className="border border-gray-300 p-2">
          <div className="mb-2">
            <label className="block mb-1">Days worked per week</label>
            <input
              className="border border-gray-300 p-1 w-full"
              type="number"
              value={daysWorked}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDaysWorked(Number(e.target.value))
              }
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Weekdays in year</label>
            <input
              className="border border-gray-300 p-1 w-full"
              type="number"
              value={weekdaysYear}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setWeekdaysYear(Number(e.target.value))
              }
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Public holidays</label>
            <input
              className="border border-gray-300 p-1 w-full"
              type="number"
              value={publicHolidays}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPublicHolidays(Number(e.target.value))
              }
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Annual leave</label>
            <input
              className="border border-gray-300 p-1 w-full"
              type="number"
              value={annualLeave}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAnnualLeave(Number(e.target.value))
              }
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Sick leave</label>
            <input
              className="border border-gray-300 p-1 w-full"
              type="number"
              value={sickLeave}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSickLeave(Number(e.target.value))
              }
            />
          </div>
          <div className="w-full">
            <label className="block mb-2">Net days worked</label>
            <input
              className="border border-gray-300 p-2 w-full"
              type="text"
              value={netDaysWorked}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleNetworkDateChange(e)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculationForm;
