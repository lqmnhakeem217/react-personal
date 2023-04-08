import React from 'react'
import './service.css'
import { BiCheck } from 'react-icons/bi'

const Service = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>My Service</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>WebGIS Application Developer</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Designing and developing custom web-based GIS applications using Leaflet.js and GeoServer to serve geospatial data.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrating Leaflet.js with GeoServer to display geospatial data from various sources, such as shapefiles, GeoJSON, and WMS/WFS services.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Developing custom GIS features and tools using Leaflet.js and GeoServer, such as advanced data filtering, spatial queries, and data clustering.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Providing technical support and maintenance services for existing Leaflet.js and GeoServer-based web applications.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEBGIS */}

        <article className="service">
          <div className="service__head">
            <h3>Web Developer</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Designing and developing custom websites and web applications using HTML, CSS, and JavaScript.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building responsive and mobile-friendly websites using front-end frameworks like Bootstrap.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Developing and integrating server-side applications using programming languages such as PHP.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating and managing databases to store and manage website content and user data.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Providing technical support and maintenance services for existing web applications.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPER */}

      </div>
    </section>
  )
}

export default Service