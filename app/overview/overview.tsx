'use client';
import React from 'react';
import PaddingContainer from '@/components/paddingContainer/paddingContainer';
import { Imgs, PaddingCon, PageOver, TextOne, TextTree, TextTwo } from './overview.style';
import Text from '@/components/text/text';
import Image from 'next/image';
import FramePoto from '@/assets/snapedit_1705853426363.png';
import { Education } from './education';
import { Experiences } from './experiences';
export default function PageOverview() {
  return (
    <>
      <PaddingContainer>
        <PaddingCon>
          <PageOver>
            <TextOne>
              <Text styles={{marginBottom:'10px' }} tag={'h1'} family={'Inter'} color={'#FFF;'} weight={''} line={''} type={'title1'}>
                Overview
              </Text>
              <br />
              <Text tag={'p'} family={'Inter'} color={'rgba(255, 255, 255, 0.60)'} weight={''} line={'30px'} type={'regular1'}>
                I &apos; m Dimas Febriyanto, a passionate and results-driven software engineer with expertise in web development. With 2 years of hands-on experience, I &apos; ve had the privilege of working on a diverse range of projects, honing my skills
                in creating robust and scalable web solutions.
              </Text>
            </TextOne>
            <br />
            <TextTwo>
              <Education />
            </TextTwo>
            <br />
            <TextTree>
              <Experiences />
            </TextTree>
          </PageOver>
          {/* <PageOver> */}
            <Imgs>
              <Image alt="" src={FramePoto} />
            </Imgs>
          {/* </PageOver> */}
        </PaddingCon>
      </PaddingContainer>
    </>
  );
}
