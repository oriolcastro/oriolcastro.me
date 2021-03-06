/** @jsx jsx */
import { graphql } from 'gatsby';

import PropTypes from 'prop-types';
import { Box, Grid, Heading, jsx } from 'theme-ui';

import Hero from '@components/Hero';
import Layout from '@components/Layout';
import PostCard from '@components/PostCard';
import SEO from '@components/SEO';
import Status from '@components/Status';
import Timeline from '@components/Timeline';

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <SEO title="Hi!" />
      <Hero />
      <Status />
      <Timeline />
      {posts.length ? (
        <Box sx={{ py: 4 }}>
          <Heading as="h2" sx={{ marginBottom: 4 }}>
            Featured articles
          </Heading>
          <Grid gap={[4, 5]} columns={[1, 2]} sx={{ py: 3 }}>
            {posts.map(({ node: post }) => (
              <PostCard key={post.id} post={post} />
            ))}
          </Grid>
        </Box>
      ) : null}
    </Layout>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      // eslint-disable-next-line react/forbid-prop-types
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        fields: { type: { eq: "blog" } }
        frontmatter: { status: { eq: "published" }, isFeatured: { eq: true } }
      }
      limit: 2
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          timeToRead
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY", locale: "ca")
            description
            tags
            coverImg {
              childImageSharp {
                gatsbyImageData(
                  maxWidth: 350
                  maxHeight: 150
                  placeholder: TRACED_SVG
                  layout: FLUID
                )
              }
            }
          }
        }
      }
    }
  }
`;
