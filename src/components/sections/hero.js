import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay } from '@utils';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      return setIsMounted(true);
    }, navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi!, my name is</h1>;

  const two = <h2 className="big-heading">Yusoof Mohammad SH.</h2>;

  const three = (
    <h3 className="medium-heading">
      I build solutions for mobile application.
    </h3>
  );

  const four = (
    <p>
      I enjoy building mobile application that have a real-world impact on
      people's lives. My goal is to build systems that adapt the
      experimental(and contribute if nessecary) state-of-the-art frameworks to
      produce scalable solutions.
    </p>
  );

  const items = [one, two, three, four];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, index) => (
            <CSSTransition key={index} classNames="fadeup">
              <div style={{ transitionDelay: `${index + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  );
};

export default Hero;
