import { useState } from 'react';

interface TrendsData {
  interestOverTime: any;
  relatedQueries: any;
  interestByRegion: any;
}

export function useTrendsData() {
  const [data, setData] = useState<TrendsData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTrendsData = async (keyword: string) => {
    if (!keyword) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/trends?keyword=${encodeURIComponent(keyword)}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'データの取得に失敗しました');
      }

      const trendsData = await response.json();
      setData(trendsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : '予期せぬエラーが発生しました');
      console.error('Trends data fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchTrendsData };
}