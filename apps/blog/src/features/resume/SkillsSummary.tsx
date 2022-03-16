import React from 'react';
import {
  Row,
  Column,
  Text,
  styled,
  H3,
  H2,
  Paragraph,
  blueTheme,
} from '@mpkelly/ui';

const Root = styled('aside', Column, {
  gap: '$2xl',
  bg: '$bg-1',
  color: '$text-1',
  p: '$lg',
});

const Summary = styled(Column, { gap: '$md', width: 300 });
const SummaryTitle = styled(H2);
const SummaryText = styled(Paragraph);

const Skills = styled(Column, { gap: '$md', width: 300 });
const SkillsTitle = styled(H2);
const SkillSet = styled(Row, { gap: '$lg', flexWrap: 'wrap' });
const Skill = styled(Text, {
  borderRadius: '$round',
  p: '0 $md',
  fontSize: '$sm',
  lineHeight: 'none',
  border: '2px solid white',
  fontWeight: '$bold',
});

export const SkillsSummary = () => {
  return (
    <Root className={blueTheme}>
      <Summary>
        <SummaryTitle>Summary</SummaryTitle>
        <SummaryText>
          Senior React & TypeScript developer that previously worked with
          Enterprise Java. I have a total of 15 years experienced (5+ TS &
          React). <br />I build well-organised webapps that follow a11y
          specifications and use semantic HTML. I am comfortable creating design
          systems, working with monorepos and testing using most modern
          libraries.
        </SummaryText>
      </Summary>
      <Skills>
        <SkillsTitle>Skills</SkillsTitle>
        <SkillSet data-badges>
          <Skill>TypeScript</Skill>
          <Skill>React</Skill>
          <Skill>JavaScript</Skill>
          <Skill>React Native</Skill>
          <Skill>HTML</Skill>
          <Skill>CSS</Skill>
          <Skill>Lerna</Skill>
          <Skill>nx</Skill>
          <Skill>Cypress</Skill>
          <Skill>WebStorm</Skill>
          <Skill>Jest</Skill>
          <Skill>a11y</Skill>
        </SkillSet>
      </Skills>
    </Root>
  );
};
