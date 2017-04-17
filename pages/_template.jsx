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
          <div style={{display:"flex", alignItems:"center", padding:"30px"}}>
            <img style={{maxWidth:"100px", maxHeight:"100px", borderRadius:"50%", margin:"0", marginRight:"30px"}} src="./CampChef.jpg"></img>
            <Link
              to={prefixLink('/')}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '45px'
              }}
            >
              Miguel Corona
            </Link>
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
