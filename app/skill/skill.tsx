import { CardSkill, CardText, Con, ContentSkill, Padding, TextSkill } from './skill.style';
import Text from '@/components/text/text';
import Image from 'next/image';
import Picture1 from '@/assets/skill/Rectangle 164.png';
import Picture2 from '@/assets/skill/Rectangle 163.png';
import Picture3 from '@/assets/skill/Rectangle 165.png';
export default function PageSkill() {
  return (
    <>
      <Con>
        <Padding>
          <TextSkill>
          <Text styles={{ marginBottom:'30px' }} tag={'h1'} family={'Inter'} color={'#FFF;'} weight={'700'} line={''} type={'title1'}>
            Skill
          </Text>
          
            <Text tag={'p'} family={'Inter'} color={'rgba(255, 255, 255, 0.60);'} weight={''} line={''} type={'regular1'}>
              Beberapa skill yang saya punya, sebenernya banyak skill saya, tapi males masukin.
            </Text>
          </TextSkill>
          <ContentSkill>
            <CardSkill>
              <Image alt="" src={Picture1} />
              <CardText>
                <Text styles={{ marginBottom: '16px' }} tag={'h1'} family={'Inter'} color={'#FFF;'} weight={''} line={''} type={'subtitle4'}>
                  Biasa Pake Terminal
                </Text>
                <Text tag={'p'} family={'Inter'} color={'rgba(255, 255, 255, 0.60);'} weight={''} line={''} type={'regular2'}>
                  Udah terbiasa sih pake terimnal kek gini, karena lebih cepet kerjanya ketimbang pake GUI-GUI begitu.
                </Text>
              </CardText>
            </CardSkill>
            <CardSkill>
              <Image alt="" src={Picture2} />
              <CardText>
                <Text styles={{ marginBottom: '16px' }} tag={'h1'} family={'Inter'} color={'#FFF;'} weight={''} line={''} type={'subtitle4'}>
                Web Development
                </Text>
                <Text tag={'p'} family={'Inter'} color={'rgba(255, 255, 255, 0.60);'} weight={''} line={''} type={'regular2'}>
                Bikin web itu gampang, tinggal ketik-ketik kode doang dah jadi lah web. Apalagi sekarang bisa pake Wix hehe.
                </Text>
              </CardText>
            </CardSkill>
            <CardSkill>
              <Image alt="" src={Picture3} />
              <CardText>
                <Text styles={{ marginBottom: '16px' }} tag={'h1'} family={'Inter'} color={'#FFF;'} weight={''} line={''} type={'subtitle4'}>
                Nulis Artikel
                </Text>
                <Text tag={'p'} family={'Inter'} color={'rgba(255, 255, 255, 0.60);'} weight={''} line={''} type={'regular2'}>
                Biasa nulis artikel di web sendiri, ya walaupun masih berantakan yang penting nulis sih, daripada nggak sama sekali.
                </Text>
              </CardText>
            </CardSkill>
          </ContentSkill>
          <ContentSkill>
            <CardSkill>
              <Image alt="" src={Picture1} />
              <CardText>
                <Text styles={{ marginBottom: '16px' }} tag={'h1'} family={'Inter'} color={'#FFF;'} weight={''} line={''} type={'subtitle4'}>
                  Biasa Pake Terminal
                </Text>
                <Text tag={'p'} family={'Inter'} color={'rgba(255, 255, 255, 0.60);'} weight={''} line={''} type={'regular2'}>
                  Udah terbiasa sih pake terimnal kek gini, karena lebih cepet kerjanya ketimbang pake GUI-GUI begitu.
                </Text>
              </CardText>
            </CardSkill>
            <CardSkill>
              <Image alt="" src={Picture2} />
              <CardText>
                <Text styles={{ marginBottom: '16px' }} tag={'h1'} family={'Inter'} color={'#FFF;'} weight={''} line={''} type={'subtitle4'}>
                Web Development
                </Text>
                <Text tag={'p'} family={'Inter'} color={'rgba(255, 255, 255, 0.60);'} weight={''} line={''} type={'regular2'}>
                Bikin web itu gampang, tinggal ketik-ketik kode doang dah jadi lah web. Apalagi sekarang bisa pake Wix hehe.
                </Text>
              </CardText>
            </CardSkill>
            <CardSkill>
              <Image alt="" src={Picture3} />
              <CardText>
                <Text styles={{ marginBottom: '16px' }} tag={'h1'} family={'Inter'} color={'#FFF;'} weight={''} line={''} type={'subtitle4'}>
                Nulis Artikel
                </Text>
                <Text tag={'p'} family={'Inter'} color={'rgba(255, 255, 255, 0.60);'} weight={''} line={''} type={'regular2'}>
                Biasa nulis artikel di web sendiri, ya walaupun masih berantakan yang penting nulis sih, daripada nggak sama sekali.
                </Text>
              </CardText>
            </CardSkill>
          </ContentSkill>
        </Padding>
      </Con>
    </>
  );
}
