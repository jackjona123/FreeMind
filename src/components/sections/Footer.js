import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
// eslint-disable-next-line 
import GithubIcon from '@static/icons/github.svg';
import InstagramIcon from '@static/icons/instagram.svg';
import TwitterIcon from '@static/icons/twitter.svg';

const SOCIAL = [
  {
    icon: GithubIcon,
    link: 'https://github.com/jackjona123/freemind',
  },
  {
    icon: InstagramIcon,
    link: 'https://instagram.com/jackjona123',
  },
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/jackjona123',
  },
];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_success: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "success" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Art>
          <Img
            fluid={data.art_success.childImageSharp.fluid}
            style={{ width: 480, maxWidth: '100%', marginBottom: -16 }}
          />
        </Art>
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <h2>FreeMinds</h2>
              <span>&copy; {new Date().getFullYear()} FreeMinds | All Rights Reserved</span> 
              <br />
              {/*<StyledSpan>
                &nbsp; Illustrations from 
                {` `}
                <ExternalLink href="https://absurd.design">
                  absurd.design
                </ExternalLink>
              </StyledSpan>*/}
            </Copyright>
            <SocialIcons>
              {SOCIAL.map(({ icon, link }) => (
                <ExternalLink key={link} href={link}>
                  <img src={icon} alt="link" />
                </ExternalLink>
              ))}
            </SocialIcons>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);



const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

/*
const StyledSpan = styled.div`
  padding-top: 20px;
  padding-left: 15px;
  font-size: 15px;
`;
*/
const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  padding-bottom: 20px;

  h2 {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  span {
    padding-top: 20px;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
