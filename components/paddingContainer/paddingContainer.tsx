import React from 'react';
import styled from 'styled-components';
import { Padding } from './paddingContainer.style';

const Container = styled.div`
  padding: 20px;
  background-color: white;
`;

interface PaddingProps {
  children: React.ReactNode;
}

export default function PaddingContainer({ children }: PaddingProps) {
  return <Padding>{children}</Padding>;
}
