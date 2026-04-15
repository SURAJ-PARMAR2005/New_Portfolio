import Container from '@/components/common/Container';
import About from '@/components/landing/About';
import Github from '@/components/landing/Github';
import Hero from '@/components/landing/Hero';
import Leetcode from '@/components/landing/Leetcode';
// import Blog from '@/components/landing/Blog';
// import CTA from '@/components/landing/CTA';
// import Journey from '@/components/landing/Journey';
// import Setup from '@/components/landing/Setup';

import Work from '@/components/landing/Projects';
import React from 'react';

export default function page() {
  return (
    <Container className="min-h-screen pt-4 pb-16 md:pt-8">
      <Hero />
      <Work />
      <About />
      <Github />
      <Leetcode />
      {/* <Blog />
      <CTA />
      <Setup />
      <Journey /> */}
    </Container>
  );
}
