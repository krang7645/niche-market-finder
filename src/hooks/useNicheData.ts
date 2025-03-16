import { useState } from 'react';

interface SearchResult {
  title: string;
  description: string;
  link: string | undefined;
}

interface Competitor {
  name: string;
  description: string;
}

interface NicheAnalysis {
  growth: string;
  competition: string;
  potential: string;
  audience: string;
}

interface NicheData {
  keyword: string;
  searchResults: SearchResult[];
  competitors: Competitor[];
  analysis: NicheAnalysis;
}

export function useNicheData() {
  const [data, setData] = useState<NicheData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNicheData = async (keyword: string) => {
    if (!keyword) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/niches?keyword=${encodeURIComponent(keyword)}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'データの取得に失敗しました');
      }

      const nicheData = await response.json();
      setData(nicheData);
    } catch (err) {
      setError(err instanceof Error ? err.message : '予期せぬエラーが発生しました');
      console.error('Niche data fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchNicheData };
}