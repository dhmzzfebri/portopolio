'use client';
import React from 'react';
import PaddingContainer from '@/components/paddingContainer/paddingContainer';
import Text from '@/components/text/text';
import { Rectangle, CardFont, CardPhone, Contacts, Email, Phone, TextCard, TextCard2, TextH2, Ellipse1, Ellipse2, Ellipse3, PaddingContact } from './contact.style';
import Image from 'next/image';
import Bg from '@/assets/backgrounds/Rectangle.png';
import Pfl from '@/assets/snapedit_1705853338373.png';

export default function PageContact() {
  return (
    <>
      <PaddingContainer>
        <PaddingContact>
          <Contacts>
            <Text tag={'h1'} family={'Inter'} color={'#FFF;'} weight={''} line={''}  type={'title1'}>
              Contact
            </Text>
            <TextH2>
              <Text tag={'p'} family={'Inter'} color={'#FFF;'} weight={''} line={'30px'} type={'regular1'}>
                Kamu bisa menghubungi saya lewat kedua kontak di bawah ini.
              </Text>
            </TextH2>
            <Phone>
              <CardPhone>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path
                    d="M18.8125 6.25C20.0335 6.48821 21.1555 7.08532 22.0351 7.96492C22.9147 8.84452 23.5118 9.96658 23.75 11.1875L18.8125 6.25ZM18.8125 1.25C21.3491 1.5318 23.7145 2.66772 25.5203 4.47126C27.3262 6.2748 28.4651 8.63876 28.75 11.175L18.8125 1.25ZM27.5 21.15V24.9C27.5015 25.2481 27.4301 25.5927 27.2907 25.9117C27.1512 26.2307 26.9467 26.517 26.6901 26.7523C26.4336 26.9877 26.1308 27.1669 25.801 27.2784C25.4712 27.3899 25.1218 27.4313 24.775 27.4C20.9286 26.9821 17.2338 25.6677 13.9875 23.5625C10.9673 21.6433 8.40671 19.0827 6.48754 16.0625C4.37501 12.8015 3.06034 9.08874 2.65004 5.225C2.6188 4.87933 2.65988 4.53095 2.77066 4.20203C2.88145 3.87311 3.0595 3.57086 3.2935 3.31453C3.52749 3.05819 3.81229 2.85339 4.12978 2.71315C4.44726 2.57292 4.79046 2.50033 5.13754 2.5H8.88754C9.49417 2.49403 10.0823 2.70885 10.5422 3.10442C11.0022 3.49998 11.3026 4.04931 11.3875 4.65C11.5458 5.85008 11.8394 7.02841 12.2625 8.1625C12.4307 8.6099 12.4671 9.09614 12.3674 9.5636C12.2677 10.0311 12.0361 10.4601 11.7 10.8L10.1125 12.3875C11.892 15.5169 14.4831 18.1081 17.6125 19.8875L19.2 18.3C19.5399 17.9639 19.969 17.7323 20.4364 17.6326C20.9039 17.5329 21.3901 17.5693 21.8375 17.7375C22.9716 18.1607 24.15 18.4542 25.35 18.6125C25.9572 18.6982 26.5118 19.004 26.9082 19.4719C27.3046 19.9397 27.5153 20.537 27.5 21.15Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </CardPhone>
              <TextCard>
                <Text tag={'p'} family={'Inter'} color={'#FFF;'} weight={''} line={''}  type={'regular2'}>
                  Phone
                </Text>
                <Text tag={'h3'} family={'Inter'} color={'#FFF;'} weight={''} line={''}  type={'subtitle4'}>
                  +6287836033285
                </Text>
              </TextCard>
            </Phone>
            <Email>
              <CardPhone>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M5 5H25C26.375 5 27.5 6.125 27.5 7.5V22.5C27.5 23.875 26.375 25 25 25H5C3.625 25 2.5 23.875 2.5 22.5V7.5C2.5 6.125 3.625 5 5 5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M27.5 7.5L15 16.25L2.5 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </CardPhone>
              <TextCard>
                <Text tag={'p'} family={'Inter'} color={'#FFF;'} weight={''} line={''}  type={'regular2'}>
                  Email
                </Text>
                <Text tag={'p'} family={'Inter'} color={'#FFF;'} weight={'700'} line={''}  type={'subtitle4'}>
                  dimasfebriyanto725@gmail.com
                </Text>
              </TextCard>
            </Email>
          </Contacts>
          <Contacts>
            <Rectangle>
            <Ellipse1>
              <Ellipse2>
                <Ellipse3>
                  <Image src={Pfl} alt="" />
                </Ellipse3>
              </Ellipse2>
            </Ellipse1>
            <CardFont>
              <TextCard2>
                <Text tag={'p'} family={'Inter'} color={'#FFF;'} weight={''} line={''}  type={'regular2'}>
                  I would love to get a message from you.
                </Text>
              </TextCard2>
            </CardFont>
              <Image src={Bg} alt="" />
            </Rectangle>
          </Contacts>
        </PaddingContact>
      </PaddingContainer>
    </>
  );
}
