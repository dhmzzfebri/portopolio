import Text from '@/components/text/text';

export function Education() {
  return (
    <>
      <Text tag={'h1'} family={'Inter'} color={'#FFF;'} weight={''} line={''} type={'subtitle1'}>
        Education
      </Text>
      <Text styles={{ paddingTop:'10px',paddingLeft:'3px'}} tag={'p'} family={'Inter'} color={'#FFF'} weight={''} line={'30px'} type={'regular1'}>
            <li>20012-2018 SDN California 2</li>
            <li>2018-2021 SMPN 1 Jumantono</li>
            <li>2021-2024 SMKN 2 Karanganyar</li>
      </Text>
    </>
  );
}
