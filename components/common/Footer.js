import React from 'react';

const Footer = () => (
  <footer className="pt-5">
    <div className="custom-container mb-5 pb-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Shallow Crafts
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="/terms"
                className="mb-3 d-block font-color-medium"
                
              >
                Villkor
              </a>
              <a
                href="/policy"
                className="d-block font-color-medium"
                
              >
                Integritetspolicy
              </a>
            </div>
            <div>
              <a
                href="/about"
                className="mb-3 d-block font-color-medium"
                
              >
                Om oss
              </a>
              
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Följ Oss
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://www.facebook.com/shallowcraftsofficial/"
                className="mb-3 d-block font-color-medium"
                target="_blank"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/shallowcrafts/"
                className="d-block font-color-medium"
                target="_blank"
              >
                Instagram
              </a>
            </div>
           
          </div>
        </div>
        <div className="col-12 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-3">
           Kontakta Oss
          </p>
          <div className="position-relative">
            <a
            href="mailto: info@shallowcrafts.com"
            >
              info@shallowcrafts.com
            </a>
          </div>
        </div>
      </div>
    </div>
  
  </footer>
);

export default Footer;
