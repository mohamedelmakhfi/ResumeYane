import React from 'react';
import './styleTemplatessetting.css';

const FontSection = ({ fonts, selectedFont, setSelectedFont, name, surname }) => {
  return (
    <div className="mb-3 d-flex col-md-12 flexdirection">
      <select
        id="fontSelect"
        className="form-select textttt"
        value={selectedFont}
        onChange={(e) => setSelectedFont(e.target.value)}
      >
        {fonts.map((font, index) => (
          <option key={index} value={font} className="text-center textttt">
            {font}
          </option>
        ))}
      </select>
      <div className="text-center col-lg-4">
        <div className="bg-light p-2 textttt" style={{ fontFamily: selectedFont }}>
          {name} - {surname}
        </div>
      </div>
    </div>
  );
};

export default FontSection;
