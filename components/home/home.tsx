import styled from 'styled-components';
import React from 'react';
import Text from '../text/text';
import { Container, HStyled, PaddingCon, TextCont, Overview, ProjectStyle, ProjectChil, FrameBg, PhotoStyle, FrameImg, H2Styled } from './home.style';
import Image from 'next/image';
import FrameProfile from '@/assets/snapedit_1705853426363.png';
import FrameBgimg from '@/assets/backgrounds/Group 108.png';
export default function PageHome() {
  return (
    <PaddingCon>
      <Container>
        <TextCont>
          <HStyled>
            <Text tag={'h1'} family={'Inter'} color={'#FFF;'} weight={''} line={''} type={'title1'}>
              Hi, nama saya Dimas Febriyanto
            </Text>
          </HStyled>
          <H2Styled>
            <Text  tag={'p'} family={'Inter'} color={'rgba(255, 255, 255, 0.60);'} weight={''} line={''} type={'regular1'}>
              Welcome to my corner of the web! I &apos; m Software Engineer, a passionate and results-driven software engineer with expertise in web development.
            </Text>
          </H2Styled>
          <Overview>
            <Text styles={{ marginRight: '10px' }} tag={'h4'} family={'Inter'} color={'#FFF;'} weight={''} line={''} type={'regular1'}>
              Go To Overview
            </Text>
            <a href={'/overview'}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="white" fill-opacity="0.2" />
                <path d="M7.1001 12H16.9001" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 7.10001L16.9 12L12 16.9" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </Overview>
        </TextCont>
        <ProjectStyle>
          <ProjectChil>
            <Text tag={'p'} family={'Inter'} color={'rgba(255, 255, 255, 0.60);'} weight={''} line={''} type={'tiny'}>
              PROJECTS
            </Text>
            <Text tag={'p'} family={'Inter'} color={'#FFF;'} weight={''} line={''} type={'subtitle2'}>
              12
            </Text>
          </ProjectChil>
          <ProjectChil>
            <Text tag={'p'} family={'Inter'} color={'rgba(255, 255, 255, 0.60);'} weight={''} line={''} type={'tiny'}>
              EXPERIENCE
            </Text>
            <Text tag={'p'} family={'Inter'} color={'#FFF;'} weight={''} line={''} type={'subtitle2'}>
              8 yrs
            </Text>
          </ProjectChil>
          <ProjectChil>
            <Text tag={'p'} family={'Inter'} color={'rgba(255, 255, 255, 0.60);'} weight={''} line={''} type={'tiny'}>
              NATIONALITY
            </Text>
            <Text tag={'p'} family={'Inter'} color={'#FFF;'} weight={''} line={''} type={'subtitle2'}>
              IDN
            </Text>
          </ProjectChil>
        </ProjectStyle>
      </Container>
      <Container>
        <PhotoStyle>
          <FrameBg>
            <Image alt="" src={FrameBgimg} />
          </FrameBg>

          <FrameImg>
            <Image alt="" src={FrameProfile} />
          </FrameImg>
        </PhotoStyle>
      </Container>
    </PaddingCon>
  );
}
