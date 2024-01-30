import Text from '@/components/text/text';

export function Experiences() {
  return (
    <>
      <Text tag={'h1'} family={'Inter'} color={'#FFF;'} weight={'700'} line={''} type={'subtitle1'}>
        Experiences
      </Text>
      <Text styles={{ paddingTop:'10px',paddingLeft:'3px' }} tag={'p'} family={'Inter'} color={'#FFF'} weight={''} line={'30px'} type={'regular1'}>
          <li>CV Zaman Now</li>
          <li>Co-founder at A.D.M (Artis Dunia Maya) </li>
          <li>Manager at Cliquers Cllamanya </li>
          <li>Software Engginering </li>
      </Text>
    </>
  );
}
