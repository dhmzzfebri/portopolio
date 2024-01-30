'use client';
import React, { use } from 'react';
import Navbar from '@/components/navbar/navbar';
import PageContact from './contact';

export default function Page() {
  return (
    <>
      <Navbar />
      <PageContact/>
    </>
  );
}
