import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
// import get from 'lodash/get'

import { rhythm } from '../utils/typography'

const Posts = ({ data }) => {
  // const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <div>
      {posts.map(post => (
        <div key={post.node.frontmatter.path}>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: 'none' }} to={post.node.frontmatter.path}>
              {post.node.frontmatter.title}
            </Link>
          </h3>
          <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
        </div>
      ))}
    </div>
  )
}

Posts.propTypes = {
  route: PropTypes.object,
}

export default Posts

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            path
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
