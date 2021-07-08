/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles.css"

import React from 'react'
import SimpleReactLightbox from 'simple-react-lightbox'
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import SimpleReactLightbox from 'simple-react-lightbox-pro'

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  <SimpleReactLightbox>{element}</SimpleReactLightbox>
)