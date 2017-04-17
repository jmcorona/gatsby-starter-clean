import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div style={{backgroundColor:'#ffe6b5', color:'#605e5a'}}>
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
          style={{
            background: '#BF5700',
            height: '160px'
          }}
        >
          <div className="container">
            <img src="./CampChef.jpg" className="profilePic"/>
            <div class="nameAndLink">
            <h1 className="myName">
              Miguel Corona
            </h1>

            <a href="https://github.com/jmcorona" className="link">
              github.com/jmcorona
            </a>
            </div>
          </div>
        </Headroom>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
