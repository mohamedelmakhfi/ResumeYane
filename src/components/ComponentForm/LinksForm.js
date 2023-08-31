// LinksForm.js
import React from 'react';
import { getIconClass, platforms } from '../../data/Datatemp';


const platform = platforms ;
const getIconClas = getIconClass ;

const LinksForm = ({ links, setLinks}) => {

  const addLink = () => {
    setLinks([...links, { platform: '', url: '' }]);
  };

  const removeLink = () => {
    if (links.length > 0) {
      setLinks(links.slice(0, links.length - 1));
    }
  };

  const handleLinkChange = (index, field, value) => {
    setLinks(prevLinks => {
      const newLinks = [...prevLinks];
      newLinks[index][field] = value;
      return newLinks;
    });
  };
  return (
    <div className="row mt-9 p-3">
      <div className="d-flex justify-content-between m-2 align-items-center difcolor btnhov experience">
        <span>Links</span>
        <span className="border px-2 difcolor btnhov add-experience" onClick={addLink}>
          <i className="fa fa-plus"></i>
        </span>
        <span className="border px-2 difcolor btnhov add-experience" onClick={removeLink}>
          <i className="fa fa-minus"></i>
        </span>
      </div>
      <br />
      {links.map((link, index) => (
        <div className="col-md-6" key={index}>
          <label className="labels">Link {index + 1}</label>
          <div className="d-flex align-items-center link-input-group">
            <select
              className="form-control platform-select"
              value={link.platform}
              onChange={(e) => handleLinkChange(index, 'platform', e.target.value)}>
              <option value="">Select Platform</option>
              {platform.map((platform, platformIndex) => (
                <option key={platformIndex} value={platform}>
                  {platform}
                </option>
              ))}
            </select>
            <i className={`${getIconClas(link.platform)} icon-large`}></i>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="URL"
            value={link.url}
            onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default LinksForm;
