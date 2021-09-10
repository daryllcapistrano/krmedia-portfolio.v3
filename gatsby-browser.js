import React from 'react'
import SimpleReactLightbox from 'simple-react-lightbox'

// Wraps every page in a lightbox component
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  <SimpleReactLightbox>{element}</SimpleReactLightbox>
)