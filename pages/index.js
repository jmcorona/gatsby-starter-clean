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
        <p style={{paddingLeft:"30px"}}>My favorite thing about providing technical support is helping people learn how to achieve their desired results while also learning new skills and tricks myself.</p>
        <h4>What did you think of our service during the time you used it?</h4>
        <p>I found it super easy to generate a site and get started with Netlify. I was intimidated by the requirements, but after seeing how easy it was to generate and publish a static site, I felt more comfortable. Deploys are also incredibly simple and efficient.</p>
        <h4>Tell about how you made your site and why you chose the tools you did.  Briefly explain a challenge you experienced in setting up this site and how you solved it.</h4>
        <p>I made my site using the Gatsby site generator from staticgen.com because it used React, which we use at my current job. I have heard many devs sing the praises of React and knew there would be an abundance of resources available if I got stuck, which I did.</p> 
        <p>I had trouble with dependency management getting my local server running. I didn't have node installed, and the Gatsby documentation assumed it was already installed. I couldn't run the <code style={{color:'#ff0000'}}>npm run develop</code> command without node installed. And even after node was installed, it wouldn't run because Gatsby was installed. Using the command <code style={{color:'#ff0000'}}>npm install</code> I got the dependencies Gatsby needed and was finally able to run <code style={{color:'#ff0000'}}>npm run develop</code></p>
        <h4>Could you give us a suggestion to improve this test or the job posting?</h4>
        <p>I think the connotation of "least favorite activities" seems a bit harsh. It was difficult for me to choose five because it felt like I was saying I do not want to do those. All of the activities listed sounded engaging and interesting, but of course everyone has their preferences. A better format may be to rank them in order of preference overall, to avoid the negative connotation.</p>
        <h4>Provide a link to documentation for a technical/developer-focused product, that you think are well done, and briefly explain why you think they are well done.</h4>
        <p>I think the documentation for <a href="http://www.seleniumhq.org/docs/">Selenium</a> is well done because it is well organized and starts from the basics of setup and goes on to give more than just technical advice, including the history and when or when not to use Selenium.</p>
        <h4>Why do you think SSL/HTTPS is important?</h4>
        <p>As detailed <a href="https://www.sslshopper.com/why-ssl-the-purpose-of-using-ssl-certificates.html">here</a>, SSL/HTTPS is important because it encrypts sensitive information, provides authentication, and is required for PCI compliance. These are all things we test for at my current job and have to make sure that we are protecting both our users and ourselves. Also, I know that Google returns search results with https higher than those without, so it has SEO value as well.</p>
        <h4>Explain, in a couple of paragraphs, what you think 2 major challenges around DNS configuration are for less-technical internet end-users</h4>
        <p>One major challenge around DNS configuration for less-technical internet end-users is just understanding what the Domain Name System does, and why it's important. To use the explanation given <a href="https://www.digitalocean.com/community/tutorials/an-introduction-to-dns-terminology-components-and-concepts">here</a>, the DNS is the networking system in place that allows us to resolve human-friendly names to unique addresses. So when a user enters a website name, the user's ISP uses the DNS to translate the domain name into the IP address, and directs the internet connection to the correct website</p>
        <p>Another major challenge is understanding the importance of and how to use CNAME records. As detailed in this <a href="https://www.netlify.com/blog/2016/01/12/this-weekends-ddos-attack-and-whats-in-a-cname/">post</a>, CNAME records can protect your site from malicious attacks. While it may be trendy to drop the <code style={{color:'#ff0000'}}>www</code> at the beginning of a domain name, it is not prudent to do so, and a properly configured CNAME can allow users to access the site from both the domain name without the <code style={{color:'#ff0000'}}>www</code> label.</p>
        <h4>A customer writes in saying their “site won’t build”.  Compose your best short (2-paragraph) customer-facing answer without any additional data, that could be useful in the generic case but would also lead to a customer providing a more actionable response.</h4>
        <p><i>Dear customer, thank you for contacting us and for using Netlify. In order to properly diagnose the issues you are having, could you please provide me with the following additional information: </i> </p>
        <p>-What framework your site is written in.</p> 
        <p>-What version of the framework you are using</p>
        <p>-Any error messages received from the build process</p>
        <p>-The url of your netlify site</p>
        <p><i>Given this info, I should be able to further assist you in getting your site built and deployed. Of course, if you'd like to take a shot at troubleshooting yourself, we have some tips and tricks <a href="https://www.netlify.com/blog/2016/10/18/how-our-build-bots-build-sites/">on our blog</a>.</i></p>
      </div>
    )
  }
}
