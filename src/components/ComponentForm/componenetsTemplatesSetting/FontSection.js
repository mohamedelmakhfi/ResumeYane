import React from 'react';

const FontSection = ({ fonts, selectedFont, setSelectedFont, name, surname }) => {
  return (
    <div className="mb-3 d-flex col-md-12">
      <select
        id="fontSelect"
        className="form-select"
        value={selectedFont}
        onChange={(e) => setSelectedFont(e.target.value)}
      >
        {fonts.map((font, index) => (
          <option key={index} value={font} className="text-center">
            {font}
          </option>
        ))}
      </select>
      <div className="text-center col-md-3">
        <span className="input-group-text " style={{ fontFamily: selectedFont }}>
          {name} - {surname}
        </span>
      </div>
    </div>
  );
};

export default FontSection;
