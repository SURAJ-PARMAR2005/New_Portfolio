'use client';

import { experiences } from '@/config/Experience';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ExperienceList } from '../experience/ExperienceList';

export default function Experience() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Professional" heading="Experience" />
      <div className="mt-8">
        <ExperienceList experiences={experiences} alwaysOpen={false} />
      </div>
    </Container>
  );
}
