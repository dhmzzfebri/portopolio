'use client';
import React, { use } from 'react';
import Navbar from '@/components/navbar/navbar';
import PageHome from '@/components/home/home';
import PaddingContainer from '@/components/paddingContainer/paddingContainer';

export default function Page() {
  return (
    <>
    <Navbar />
      <PaddingContainer>
        <PageHome />
      </PaddingContainer>
    </>
  );
}
