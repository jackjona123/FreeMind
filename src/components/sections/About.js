import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_real: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "real" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_common: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "world" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_cause: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "cause" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_life: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "life" }
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
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>Mental Illness Is Real</h2>
              <p>
              Many people don't see mental illness in the same way, or even the same category, as other diseases medical science is working hard to find cures for. But Mental Health is Health, mental and physical health are equally important components of overall health.  
              </p>
            </div>
            <Art>
              <Img fluid={data.art_real.childImageSharp.fluid} />
            </Art>
          </Grid>
          <br />
          <br />
          <br />
          <Grid inverse>
            <Art>
              <Img fluid={data.art_common.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Mental Health Is Common</h2>
              <p>
              Millions of Americans live with various types of mental illness and mental health problems, such as social anxiety, obsessive compulsive disorder, drug addiction, and personality disorders. 
              <ul>
                <li>More than 50% will be diagnosed with a mental illness or disorder at some point in their lifetime</li>
                <li>1 in 5 Americans will experience a mental illness in a given year.</li>
                <li>1 in 5 children, either currently or at some point during their life, have had a seriously debilitating mental illness</li>
                <li>1 in 25 Americans lives with a serious mental illness, such as schizophrenia, bipolar disorder, or major depression.</li>
              </ul>
              </p>
            </div>
          </Grid>
          <br />
          <br />
          <br />
          <Grid>
            <div>
              <h2>The Causes Of Mental Illness</h2>
              <p>
              There is no single cause for mental illness. Everyone has some risk of developing a mental health disorder, no matter their age, sex, income, or ethnicity. However, a number of factors can contribute to risk for mental illness, such as social and financial circumstances, biological factors, and lifestyle choices which can all shape a person’s mental health.</p>
              <br />
              <p>Early adverse life experiences, experiences related to other ongoing (chronic) medical conditions, biological factors or chemical imbalances in the brain, use of alcohol or drugs, having feelings of loneliness or isolation, social and financial circumstances, lifestyle choices.</p>
            </div>
            <Art>
              <Img fluid={data.art_cause.childImageSharp.fluid} />
            </Art>
          </Grid>
          <br />
          <br />
          <br />
          <Grid inverse>
            <Art>
              <Img fluid={data.art_life.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Why Is Mental Health Important</h2>
              <p>The onset of most mental illnesses occurs during adolescence and young adulthood. This affects educational achievement, occupational or career opportunities and successes, and the formation and nature of personal relationships. The effect extends throughout an individual’s life. The greater the number of episodes of illness that an individual experiences, the greater the degree of lasting disability. Receiving and complying with effective treatment and having the security of strong social supports, adequate income, housing and educational opportunities are essential elements in minimizing the impact of mental illness.</p>
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

//eslint-disable-next-line
{const List = styled.li`
  margin: 0;
  align-items: right;
  justify-items: right;
  text-align: right;
`
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
