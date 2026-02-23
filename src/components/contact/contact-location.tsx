import React from "react";
import Image from "next/image";
import Link from "next/link";

const location_data = [
  {
    id: 1,
    country: "Lagos, Nigeria",
    time: "WAT (GMT+1)",
    location_title: "Vert Idee HQ",
    address: "45C Sobo Arobiodu Street, Ikeja GRA, Lagos, Nigeria",
    phone: "01-3425740, 0803 348 3009",
    mobile: "0810 323 3527",
    email: "Vertideelimited@gmail.com",
  },
];

const ContactLocation = () => {
  return (
    <div className="cn-contact-info-area">
      <div className="container container-1840">
        <div className="cn-contact-info-bg black-bg">
          {location_data.map((item) => (
            <div key={item.id} className="cn-contact-info-item">
              <div className="row">
                <div className="col-xl-7">
                  <div className="cn-contact-left d-flex flex-wrap align-items-center">
                    <div className="cn-contact-left-info">
                      <h4 className="cn-contact-left-title">{item.country}</h4>
                      <span>
                        <i className="fa-regular fa-clock"></i>
                        {item.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="cn-contact-right-wrap d-flex align-items-start justify-content-between">
                    <div className="cn-contact-right">
                      <div className="cn-contact-location">
                        <span className="cn-contact-location-title">
                          {item.location_title}
                        </span>
                        <Link
                          href="https://www.google.com/maps/place/45c+Sobo+Arobiodu+St,+Ikeja+GRA,+Ikeja+101233,+Lagos"
                          target="_blank"
                        >
                          {item.address}
                        </Link>
                      </div>
                      <div className="cn-contact-map">
                        <Link href="https://www.google.com/maps/place/45c+Sobo+Arobiodu+St,+Ikeja+GRA,+Ikeja+101233,+Lagos" target="_blank">
                          Google Maps
                        </Link>
                      </div>
                    </div>
                    <div className="cn-contact-right-info text-start text-md-end">
                      <Link href="mailto:Vertideelimited@gmail.com">{item.email}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;
