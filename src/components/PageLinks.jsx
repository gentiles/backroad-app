import React from 'react'
import { pageLink } from '../data'
import PageLink from './PageLink'
const PageLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLink.map((item) => {
        // const { href, text, id } = item
        return <PageLink key={item.id} {...item} childClass={childClass} />
      })}
    </ul>
  )
}

export default PageLinks
