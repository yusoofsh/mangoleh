import React, { useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Chrome Extension, Browser',
    'Flutter, Mobile Development',
    'Firebase, Development Platform',
    'TypeScript, Dart, Python, Kotlin'
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              You can call me Yusoof pronounced &quot;Yu-sof&quot;, a software engineer who works
              remotely somewhere on a small village at Malang, ID.
            </p>

            <p>
              Currently working <a href="https://cloudthought.co">@Cloud Thought</a>{' '}
              as Full Stack Developer, mainly focused on browser extension development,{' '}
              which uses micro service architecture, and variety of technologies combined.{' '}
              Some products and projects I've been working on include product recommender,{' '}
              medical consultation, IoT integrated, real-time notification, and much more.{' '}
              Was previously had an amazing learning experience: Internship{' '}
              <a href="https://arcacorp.com">@Arca International</a>, Freelance{' '}
              <a href="https://ikpi.or.id">@Ikatan Konsultan Pajak Indonesia</a>, and{' '}
              <a href="https://intermediatama.com">@Intermediatama</a>, Employee{' '}
              <a href="https://github.com/viva-IT">@ARAH Akakia Teknologi</a>, and{' '}
              <a href="https://360solusiteknologi.co.id">@360 Solusi Teknologi</a>{'.'}
            </p>

            <p>
              Worth mentioning, that I also actively helping other folks in local communities{' '}
              <a href="https://t.me/flutter_id">@Flutter Indonesia</a>. Especially with sharing
              some insight and knowledge, you invest in yourself by being kind and grateful.
            </p>

            <p>
              I have graduated from <a href="https://smkn4malang.sch.id">@Grafika</a>,
              specializing in Software Engineering. At Grafika, I learn so many programming building
              blocks.
            </p>

            <p>Here's what I've been up to lately: </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, index) => <li key={index}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
