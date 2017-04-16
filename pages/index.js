import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h3>Top 5</h3>
        <ol type="1">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
          <li>Milk</li>
          <li>Milk</li>
        </ol>
        <h3>Bottom 5</h3>
        <ol type="1">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
          <li>Milk</li>
          <li>Milk</li>
        </ol>


        <p>Welcome to your new clean Gatsby site</p>
      </div>
    )
  }
}
