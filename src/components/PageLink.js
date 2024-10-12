import React from 'react'

const PageLink = ({ href, text, childClass }) => {
  return (
    <li>
      <a href={href} className={childClass}>
        {' '}
        {text}{' '}
      </a>
    </li>
  )
}

export default PageLink
