// CertificatesForm.js
import React from 'react';
import { popularCertificateCompanies } from '../../data/Datatemp';

const popularCertificateCompanie = popularCertificateCompanies ;

const CertificatesForm = ({ certificates, handleCertificateChange, addCertificate, removeCertificate}) => {
  return (
    <div className="row p-3">
      <div className="d-flex justify-content-between m-2 align-items-center difcolor btnhov experience">
        <span>Certificates</span>
        <span className="border px-2 difcolor btnhov add-experience" onClick={addCertificate}>
          <i className="fa fa-plus"></i>
        </span>
        <span className="border px-2 difcolor btnhov add-experience" onClick={removeCertificate}>
          <i className="fa fa-minus"></i>
        </span>
      </div>
      <br />
      {certificates.map((certificate, index) => (
        <div className="col-md-6" key={index}>
          <label className="labels">Certificate {index + 1}</label>
          <div className="d-flex align-items-center link-input-group">
            <select
              className="form-control"
              value={certificate.company}
              onChange={(e) => handleCertificateChange(index, 'company', e.target.value)}>
              <option value="">Select Company</option>
              {popularCertificateCompanie.map((company, companyIndex) => (
                <option key={companyIndex} value={company}>
                  {company}
                </option>
              ))}
            </select>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Certificate Link"
            value={certificate.certificateLink}
            onChange={(e) => handleCertificateChange(index, 'certificateLink', e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default CertificatesForm;
