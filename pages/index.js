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
        <h4>My 5 favorite Netlify support activities</h4>
        <ol type="i" >
          <li>Engage multiple users at once via chat to answer their questions and troubleshoot problems</li>
          <li>Submit bug reports and potentially bug fixes to closed and open source projects that Netlify maintains on GitHub</li>
          <li>Debug a customer's build using a programming language and framework that I've never seen before</li>
          <li>Write and maintain documentation for our software and blog posts for our website</li>
          <li>Deliver a talk to many people I don't know at a conference or meetup</li>
        </ol>
        <h4>My 5 least favorite Netlify support activities</h4>
        <ol type="i">
          <li>Work with prospective customers to explain our service and the pricing model</li>
          <li>Help manage communications during a service outage</li>
          <li>Respond to Netlify fans on Twitter</li>
          <li>Receive occasional phone calls requesting support from our highest-value customers</li>
          <li>Dig through server logs to troubleshoot a customer's website behavior</li>
        </ol>
        <h4>What is your favorite thing about providing technical support?</h4>
        <p>My favorite thing about providing technical support is helping people learn how to achieve their desired results while also learning new skills and tricks myself.</p>
        <h4>What did you think of our service during the time you used it?</h4>
        <p>I found it super easy to generate a site and get started with Netlify. I was intimidated by the requirements, but after seeing how easy it was to generate and publish a static site, I felt more comfortable. Deploys are also incredibly simple and efficient.</p>
        <h4>Tell about how you made your site and why you chose the tools you did.  Briefly explain a challenge you experienced in setting up this site and how you solved it.</h4>
        <p>I made my site using the Gatsby site generator from staticgen.com because it used React, which we use at my current job. I have heard many devs sing the praises of React and knew there would be an abundance of resources available if I got stuck, which I did.</p> 
        <p>I had trouble with dependency management getting my local server running. I didn't have node installed, and the Gatsby documentation assumed it was already installed. I couldn't run the <code style={{color:'#ff0000'}}>npm run develop</code> command without node installed. And even after node was installed, it wouldn't run because Gatsby was installed. Using the command <code style={{color:'#ff0000'}}>npm install</code> I got the dependencies Gatsby needed and was finally able to run <code style={{color:'#ff0000'}}>npm run develop</code></p>
        <h4>Could you give us a suggestion to improve this test or the job posting?</h4>
        <p>I think the connotation of "least favorite activities" seems a bit harsh. It was difficult for me to choose five because it felt like I was saying I do not want to do those. All of the activities listed sounded engaging and interesting, but of course everyone has their preferences. A better format may be to rank them in order of preference overall, to avoid the negative connotation.</p>
      </div>
    )
  }
}
