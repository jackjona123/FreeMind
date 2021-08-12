import React from 'react';

import { Section, Container } from '@components/global';
import styled from 'styled-components';
import FaqItem from '@common/FaqItem';

const FAQS = [
  {
    title: 'What Is Mental Health',
    content: () => (
      <>
        Mental health is a state of well-being in which an individual realizes his or her own abilities, can cope with the normal stresses of life, can work productively, and is able to make a contribution to his or her community. Mental health is more than just the absence of mental disorders or disabilities.
        <br />
        <br />
        Peak mental health is about not only avoiding active conditions but also looking after ongoing wellness and happiness.
      </>
    ),
  },
  {
    title: 'What Are Symptoms Or Signs Of Mental Illness?',
    content: () => (
      <>
        There is no physical test or scan that reliably indicates whether a person has developed a mental illness. However, people should look out for the following as possible signs of a mental health disorder: 
        <ul>
          <li>withdrawing from friends, family, and colleagues</li>
          <li>avoiding activities that they would normally enjoy</li>
          <li>sleeping too much or too little</li>
          <li>eating too much or too little</li>
          <li>feeling hopeless</li>
          <li>having consistently low energy</li>
          <li>using mood-altering substances, including alcohol and nicotine, more frequently</li>
          <li>displaying negative emotions</li>
          <li>being confused</li>
          <li>being unable to complete daily tasks, such as getting to work or cooking a meal</li>
          <li>having persistent thoughts or memories that reappear regularly</li>
          <li>thinking of causing physical harm to themselves or others</li>
          <li>hearing voices</li>
          <li>experiencing delusions</li>
          <li>Excessive worrying or fear</li>
          <li>Feeling excessively sad or low</li>
          <li>Confused thinking or problems concentrating and learning</li>
          <li>Extreme mood changes, including uncontrollable “highs” or feelings of euphoria</li>
          <li>Prolonged or strong feelings of irritability or anger</li>
          <li>Avoiding friends and social activities</li>
          <li>Difficulties understanding or relating to other people</li>
          <li>Changes in sleeping habits or feeling tired and low energy</li>
          <li>Changes in eating habits such as increased hunger or lack of appetite</li>
          <li>Inability to perceive changes in one’s own feelings, behaviour or personality (”lack of insight” or anosognosia)</li>
          <li>Abuse of substances like alcohol or drugs</li>
          <li>Inability to carry out daily activities or handle daily problems and stress</li>
        </ul>
      </>
    ),
  },
  {
    title: 'What Are The Types Of Mental Illnesses?',
    content: () => (
      <>
        People can experience different types of mental illnesses or disorders, and they can often occur at the same time. Mental illnesses can occur over a short period of time or be episodic. This means that the mental illness comes and goes with discrete beginnings and ends. Mental illness can also be ongoing or long-lasting.
        There are more than 200 types of mental illness. Some of the main types of mental illness and disorders are listed <a href="https://www.camh.ca/en/health-info/mental-illness-and-addiction-index">here</a>. 
        <br />
        <br />
        The most common types of mental illness are:
        <ul>
          <li>anxiety disorders</li>
          <li>mood disorders</li>
          <li>schizophrenia disorders</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Are Mental Health Condition Decreasing?',
    content: () => (
      <>
        Contrary to popular belief mental health conditions are increasing worldwide. Mainly because of demographic changes, there has been a 13% rise in mental health conditions and substance use disorders in the last decade. Mental health conditions now cause 1 in 5 years lived with disability. Around 20% of the world’s children and adolescents have a mental health condition, with suicide the second leading cause of death among 15-29-year-olds. Approximately one in five people in post-conflict settings have a mental health condition.
      </>
    ),
  },
  {
    title: 'Is Mental Health Treatment Expensive?',
    content: () => (
      <>
        Many mental health conditions can be effectively treated at relatively low cost, yet the gap between people needing care and those with access to care remains substantial. Effective treatment coverage remains extremely low.
      </>
    ),
  },
];

const Faq = () => (
  <StyledSection id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </StyledSection>
);

const StyledSection = styled(Section)`
    text-align: left;
    border-radius: 60px;
    padding-bottom: 120px;
`;

export default Faq;
