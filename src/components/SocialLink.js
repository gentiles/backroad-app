import React from 'react'

const SocialLink = ({ icon, href }) => {
  return (
    <>
      <li>
        <a href={href} target="_blank" className="nav-icon" rel="noreferrer">
          <i className={icon}></i>
        </a>
      </li>
    </>
  )
}

export default SocialLink
