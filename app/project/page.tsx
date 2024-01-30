'use client';
import React, { use } from 'react';
import Navbar from '@/components/navbar/navbar';
import PageProject from './project';

export default function Page() {
  return (
    <>
      <Navbar />
      <PageProject />
    </>
  );
}
