/*
 * LeetCode Contribution Configuration
 *
 * This file contains the configuration for the LeetCode contribution graph.
 */

export const leetcodeConfig = {
  username: 'SURAJ_PARMAR',
  apiUrl: 'https://alfa-leetcode-api.onrender.com',

  // Display settings
  title: 'LeetCode Activity',
  subtitle: 'problem solving journey over the past year',

  // Chart settings
  blockSize: 11,
  blockMargin: 3,
  fontSize: 12,
  maxLevel: 4,

  // Month labels
  months: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],

  // Weekday labels (empty for weekends, M for Monday, etc.)
  weekdays: ['', 'M', '', 'W', '', 'F', ''],

  // Total count label template
  totalCountLabel: '{{count}} submissions in the last year',

  // Theme configuration for dark and light modes (LeetCode orange/yellow theme)
  theme: {
    dark: [
      'rgb(22, 27, 34)', // Very dark for no contributions
      'rgb(66, 42, 17)', // Darkest orange
      'rgb(128, 77, 24)', // Dark orange
      'rgb(201, 114, 28)', // Bright orange
      'rgb(255, 161, 22)', // LeetCode primary yellow/orange
    ],
    light: [
      'rgb(235, 237, 240)', // Light gray
      'rgb(255, 228, 160)', // Light orange/yellow
      'rgb(255, 196, 77)', // Medium orange/yellow
      'rgb(255, 153, 0)', // Hard orange
      'rgb(204, 114, 0)', // Dark orange
    ],
  },

  // Error state configuration
  errorState: {
    title: 'Unable to load LeetCode stats',
    description: 'Check out my profile directly for the latest activity',
    buttonText: 'View on LeetCode',
  },

  // Loading state configuration
  loadingState: {
    title: 'Loading submissions...',
    description: 'Fetching your LeetCode activity data',
  },
};
