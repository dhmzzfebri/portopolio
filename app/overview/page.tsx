'use client';
import React, { use } from 'react';
import Navbar from '@/components/navbar/navbar';
import PageOverview from '@/app/overview/overview';

export default function Page() {
  return (
    <>
      <Navbar />
      <PageOverview />
    </>
  );
}
