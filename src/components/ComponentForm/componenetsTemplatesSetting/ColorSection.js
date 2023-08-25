import React from 'react';

const ColorSection = ({ id, label, color, setColor }) => {
  return (
    <div className="col mb-2">
      <label htmlFor={id} className="form-label textttt">
        {label}
      </label>
      <input
        type="color"
        id={id}
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="form-select "
      />
    </div>
  );
};

export default ColorSection;
