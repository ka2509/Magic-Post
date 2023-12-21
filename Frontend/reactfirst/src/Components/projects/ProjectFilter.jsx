import React, { useState } from 'react';

const ProjectFilter = ({ select, selectOptions }) => {
  const [selectedOption, setSelectedOption] = useState(''); // Manage selected option state

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    // Emit the filter event with the selected value
  };

  return (
    <select
      value={selectedOption} // Bind value to state
      onChange={handleChange}
      name={select}
      id={select}
      className="form-select"
    >
      <option value class="text-sm sm:text-md">All Projects</option>
      {selectOptions.map((option) => (
        <option key={option} value={option} className="sm:text-md">
          {option}
        </option>
      ))}
    </select>
  );
};

export default ProjectFilter;