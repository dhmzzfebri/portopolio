import { PaddingCon } from './project.style';
import { Card, ConContent, ConProject, Content, ContentCard, Imgs, TextContent, TextProject } from './project.style';
import Text from '@/components/text/text';
import PaddingContainer from '@/components/paddingContainer/paddingContainer';
import Image from 'next/image';
import Project1 from '@/assets/project/Screenshot (106).png';
import Project2 from '@/assets/project/Rectangle 2.png';
import Project3 from '@/assets/project/Rectangle 3.png';
import Project4 from '@/assets/project/Rectangle 4.png';
import Project5 from '@/assets/project/Rectangle 5.png';
import Project6 from '@/assets/project/Rectangle 6.png';
export default function PageProject() {
  return (
    <PaddingContainer>
      <PaddingCon>
        <ConProject >
          <Text styles={{ marginBottom:'20px' }} tag={'h1'} family={'Inter'} color={'#FFF;'} weight={'700'} line={''} type={'title1'}>
            Projects
          </Text>
          <br />
          <TextProject>
            <Text  tag={'p'} family={'Inter'} color={'#FFF;'} weight={''} line={''} type={'regular1'}>
              Di halaman ini kamu akan menemukan proyek-proyek yang pernah saya buat.
            </Text>
            <Text styles={{ paddingTop: '10px', paddingLeft: '10px' }} tag={'p'} family={'Inter'} color={'#FFF'} weight={''} line={''} type={'regular1'}>
              <li>Semua Kategori</li>
              <li>UI Design</li>
              <li>Web Developments </li>
              <li>Mobile Devolopments</li>
            </Text>
            </TextProject>
        </ConProject>
        <ConProject>
          <ConContent>
            <Content >
              <Card>
                <ContentCard>
                  <Imgs>
                    <Image alt="" src={Project1} />
                  </Imgs>
                </ContentCard>
                <TextContent>
                  <Text tag={'p'} family={'Inter'} color={'#FFF'} weight={''} line={''}  type={'regular1'}>
                    Login Page UI Design
                  </Text>
                  <Text styles={{ lineHeight:'10px' }} tag={'p'} family={'Inter'} color={'rgba(255, 255, 255, 0.60)'} weight={''} line={''} type={'tiny'}>
                    UI DESIGN
                  </Text>
                </TextContent>

              </Card>
              <br />
              <br />
              <Card>
                <ContentCard>
                  <Imgs>
                    <Image alt="" src={Project4} />
                  </Imgs>
                </ContentCard>
                <TextContent>
                  <Text tag={'p'} family={'Inter'} color={'#FFF'} weight={''} line={''} type={'regular1'}>
                    Landing Page
                  </Text>
                  <Text tag={'p'} family={'Inter'} color={'rgba(255, 255, 255, 0.60)'} weight={''} line={''} type={'tiny'}>
                    WEB DEVELOPMENT
                  </Text>
                </TextContent>
              </Card>
              <br />
              <br />
              <Card>
                <ContentCard>
                  <Imgs>
                    <Image alt="" src={Project6} />
                  </Imgs>
                </ContentCard>
                <TextContent>
                  <Text tag={'p'} family={'Inter'} color={'#FFF'} weight={''} line={''} type={'regular1'}>
                    Mobile App
                  </Text>
                  <Text tag={'p'} family={'Inter'} color={'rgba(255, 255, 255, 0.60)'} weight={''} line={''} type={'tiny'}>
                    MOBILE DEVELOPMENT
                  </Text>
                </TextContent>
              </Card>
            </Content>
            <Content>
              <Card>
                <ContentCard>
                  <Imgs>
                    <Image alt="" src={Project2} />
                  </Imgs>
                </ContentCard>
                <TextContent>
                  <Text tag={'p'} family={'Inter'} color={'#FFF'} weight={''} line={''}  type={'regular1'}>
                    Landing Page
                  </Text>
                  <Text tag={'p'} family={'Inter'} color={'rgba(255, 255, 255, 0.60)'} weight={''} line={''}  type={'tiny'}>
                    MOBILE DEVELOPMENT
                  </Text>
                </TextContent>
              </Card>
              <br />
              <br />
              <Card>
                <ContentCard>
                  <Imgs>
                    <Image alt="" src={Project3} />
                  </Imgs>
                </ContentCard>
                <TextContent>
                  <Text tag={'p'} family={'Inter'} color={'#FFF'} weight={''} line={''}  type={'regular1'}>
                    Login Page UI Design
                  </Text>
                  <Text tag={'p'} family={'Inter'} color={'rgba(255, 255, 255, 0.60)'} weight={''} line={''} type={'tiny'}>
                    UI DESIGN
                  </Text>
                </TextContent>
              </Card>
              <br />
              <br />
              <Card>
                <ContentCard>
                  <Imgs>
                    <Image alt="" src={Project5} />
                  </Imgs>
                </ContentCard>
                <TextContent>
                  <Text tag={'p'} family={'Inter'} color={'#FFF'} weight={''} line={''} type={'regular1'}>
                    Login Page UI Design
                  </Text>
                  <Text tag={'p'} family={'Inter'} color={'rgba(255, 255, 255, 0.60)'} weight={''} line={''} type={'tiny'}>
                    UI DESIGN
                  </Text>
                </TextContent>
              </Card>
            </Content>
          </ConContent>
        </ConProject>
      </PaddingCon>
    </PaddingContainer>
  );
}
