import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';


const Change = () => (
  <StaticQuery
    query={graphql`
      query {
        art_change: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "change" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        art_cta: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "change" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="change">
        <StyledContainer>
            <Art>
                <Img fluid={data.art_change.childImageSharp.fluid} />
            </Art>
            <Grid>
                <div>
                <h2>Bring Change</h2>
                <p>The only way to create a world where Mental Health is Health is changing attitudes, behaviours and culture.</p>
                </div>
            </Grid>
        </StyledContainer>
      </Section>
    )}
  />
);

const StyledContainer = styled(Container)`
    background-color: #81FBB8;
    border-radius: 60px;
    padding-bottom: 120px;
`;

/*
const StyledSection = styled(Section)`
    background-color: #81FBB8;
    border-radius: 60px;
    padding-bottom: 120px;
`;
*/
const Grid = styled.div`
     
  text-align: center;
  align-items: center;
  justify-items: center;
  padding-top: 40px;


  h2 {
    margin-bottom: 50px;
    padding-top: 50px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: center;
    margin-bottom: 80px;

    &:last-child {
      margin-bottom: 24px;
    }
  }
`;

const Art = styled.figure`
  margin: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  max-width: 800px;
  align-items: center;
`;

export default Change;
