import React from 'react';
import { useGA4ReportData } from 'react-ga4';
import { GA4_CONFIG, GA4_SCOPES, GA4_KEY_FILE_LOCATION } from '../config/ga4config';

const MyComponentAnalytics = () => {
  const { data, loading, error } = useGA4ReportData({
    keyFilePath: GA4_KEY_FILE_LOCATION,
    scopes: GA4_SCOPES,
    viewId: GA4_CONFIG.viewId,
    startDate: '7daysAgo',
    endDate: 'today',
    metrics: [{ expression: 'ga:pageviews' }],
    dimensions: [{ name: 'ga:pagePath' }]
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data.map((row) => (
        <div key={row.dimensions[0]}>
          <span>{row.dimensions[0]}</span>
          <span>{row.metrics[0].values[0]}</span>
        </div>
      ))}
    </div>
  );
};

export default MyComponentAnalytics;
