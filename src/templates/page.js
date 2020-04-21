/** @jsx jsx */

import Img from 'gatsby-image';

import { Box, Heading, jsx } from 'theme-ui';

import Layout from '@components/Layout';
import SEO from '@components/SEO';

const PageTemplate = ({ data: { mdx }, pageMeta, children, path }) => {
  return (
    <Layout>
      <SEO
        title={pageMeta.title}
        description={pageMeta.description}
        pathname={path}
        image={mdx.frontmatter.coverImg.childImageSharp.original.src}
      />
      {mdx.frontmatter.coverImg && <Img fluid={mdx.frontmatter.coverImg.childImageSharp.fluid} />}
      <Box sx={{ py: 4 }}>
        <Heading as="h1" sx={{ mb: 5 }}>
          {pageMeta.title}
        </Heading>
        {children}
      </Box>
    </Layout>
  );
};

export default PageTemplate;
