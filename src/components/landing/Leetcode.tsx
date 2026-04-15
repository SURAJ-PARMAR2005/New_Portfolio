'use client';

import { leetcodeConfig } from '@/config/Leetcode';
import { useTheme } from 'next-themes';
import { Link } from 'next-view-transitions';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import type { ThemeInput } from 'react-activity-calendar';
import useSWR from 'swr';

import Container from '../common/Container';
import LeetcodeIcon from '../svgs/Leetcode';
import { Button } from '../ui/button';

const ActivityCalendar = dynamic(
  () => import('react-activity-calendar').then((mod) => mod.default),
  { ssr: false },
);

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

// Generate an array of all days in the past 365 days
function generateLastYear(): ContributionItem[] {
  const contributions: ContributionItem[] = [];
  const today = new Date();

  for (let i = 365; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateString = date.toISOString().split('T')[0];
    contributions.push({
      date: dateString,
      count: 0,
      level: 0,
    });
  }
  return contributions;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Leetcode() {
  const { theme } = useTheme();

  const { data, error, isLoading } = useSWR(
    `${leetcodeConfig.apiUrl}/${leetcodeConfig.username}/calendar`,
    fetcher,
    { revalidateOnFocus: false },
  );

  const { contributions, totalContributions, hasError } = useMemo(() => {
    if (error)
      return { contributions: [], totalContributions: 0, hasError: true };
    if (!data)
      return { contributions: [], totalContributions: 0, hasError: false };
    if (!data.submissionCalendar)
      return { contributions: [], totalContributions: 0, hasError: true };

    try {
      const calendarData = JSON.parse(data.submissionCalendar);
      const baseCalendar = generateLastYear();
      const calendarMap = new Map(
        baseCalendar.map((item) => [item.date, item]),
      );

      let total = 0;

      Object.entries(calendarData).forEach(([timestamp, count]) => {
        // LeetCode timestamp is in seconds
        const date = new Date(Number(timestamp) * 1000);
        const dateString = date.toISOString().split('T')[0];

        if (calendarMap.has(dateString)) {
          const item = calendarMap.get(dateString)!;
          const submissions = Number(count);
          item.count = submissions;
          total += submissions;

          let level: 0 | 1 | 2 | 3 | 4 = 0;
          if (submissions > 0) level = 1;
          if (submissions >= 2) level = 2;
          if (submissions >= 5) level = 3;
          if (submissions >= 10) level = 4;
          item.level = level;
        }
      });

      return {
        contributions: Array.from(calendarMap.values()),
        totalContributions: total,
        hasError: false,
      };
    } catch (err) {
      console.error('Failed to parse LeetCode contributions:', err);
      return { contributions: [], totalContributions: 0, hasError: true };
    }
  }, [data, error]);

  return (
    <Container className="mt-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-foreground text-2xl font-bold">
              {leetcodeConfig.title}
            </h2>
            <p className="text-muted-foreground text-sm">
              <b>{leetcodeConfig.username}</b>&apos;s {leetcodeConfig.subtitle}
            </p>
            {!isLoading && !hasError && totalContributions > 0 && (
              <p className="text-primary mt-1 text-sm font-medium">
                Total:{' '}
                <span className="font-black">
                  {totalContributions.toLocaleString()}
                </span>{' '}
                submissions
              </p>
            )}
          </div>
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="border-primary mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-t-transparent"></div>
              <p className="text-muted-foreground text-sm">
                {leetcodeConfig.loadingState.description}
              </p>
            </div>
          </div>
        ) : hasError || contributions.length === 0 ? (
          <div className="text-muted-foreground border-border rounded-xl border-2 border-dashed p-8 text-center">
            <div className="bg-muted mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <LeetcodeIcon />
            </div>
            <p className="mb-2 font-medium">
              {leetcodeConfig.errorState.title}
            </p>
            <p className="mb-4 text-sm">
              {leetcodeConfig.errorState.description}
            </p>
            <Button variant="outline" asChild>
              <Link
                href={`https://leetcode.com/${leetcodeConfig.username}`}
                className="inline-flex items-center gap-2"
              >
                <LeetcodeIcon />
                {leetcodeConfig.errorState.buttonText}
              </Link>
            </Button>
          </div>
        ) : (
          <div className="relative overflow-hidden">
            <div className="bg-background/50 relative rounded-lg border border-dashed border-black/20 p-6 backdrop-blur-sm dark:border-white/10">
              <div className="w-full overflow-x-auto">
                <ActivityCalendar
                  data={contributions}
                  blockSize={10}
                  blockMargin={2.2}
                  fontSize={leetcodeConfig.fontSize}
                  colorScheme={theme === 'dark' ? 'dark' : 'light'}
                  maxLevel={leetcodeConfig.maxLevel}
                  hideTotalCount={true}
                  hideColorLegend={false}
                  hideMonthLabels={false}
                  theme={leetcodeConfig.theme as ThemeInput}
                  labels={{
                    months: leetcodeConfig.months,
                    weekdays: leetcodeConfig.weekdays,
                    totalCount: leetcodeConfig.totalCountLabel,
                  }}
                  style={{
                    color: 'rgb(139, 148, 158)',
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
