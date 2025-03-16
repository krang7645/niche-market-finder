import { NextResponse } from 'next/server';

interface SearchResult {
  title: string;
  description: string;
  link: string | undefined;
}

interface Competitor {
  name: string;
  description: string;
}

// モックデータを生成する関数
function generateMockData(keyword: string) {
  // 検索結果のモックデータ
  const mockSearchResults: SearchResult[] = [
    {
      title: `${keyword}市場の最新動向と成長予測`,
      description: `${keyword}市場は2023年から2028年にかけて年平均成長率15%で拡大すると予測されています。デジタル化の進展と消費者ニーズの変化が市場拡大の主な要因です。`,
      link: 'https://example.com/market-trends',
    },
    {
      title: `${keyword}業界レポート：市場規模と機会分析`,
      description: `${keyword}の市場規模は2023年時点で約500億円と推定され、今後5年間で倍増する見込みです。特に20代から30代の若年層を中心に需要が高まっています。`,
      link: 'https://example.com/market-report',
    },
    {
      title: `${keyword}ビジネスの成功事例と戦略分析`,
      description: `${keyword}分野で成功している企業は、ニッチ市場に特化したサービス提供と顧客体験の向上に注力しています。市場の成長に伴い新規参入も増加傾向にあります。`,
      link: 'https://example.com/success-stories',
    },
    {
      title: `${keyword}：投資家向け市場分析レポート`,
      description: `${keyword}市場は技術革新により急速に変化しており、早期参入者に大きな収益機会をもたらしています。市場規模は年間20%以上の成長率で拡大中です。`,
      link: 'https://example.com/investment-analysis',
    },
    {
      title: `${keyword}産業の課題と将来展望`,
      description: `${keyword}産業は成長が見込まれる一方、規制環境の変化や技術的課題も存在します。しかし、消費者の関心の高まりにより市場は着実に拡大しています。`,
      link: 'https://example.com/industry-outlook',
    },
  ];

  // 競合のモックデータ
  const mockCompetitors: Competitor[] = [
    {
      name: `${keyword}リーダーズ株式会社`,
      description: `${keyword}分野での先駆者として知られ、市場シェア約30%を持つ業界最大手。革新的な製品開発と強力なブランド戦略が特徴。`,
    },
    {
      name: `テック${keyword}株式会社`,
      description: `テクノロジーを活用した${keyword}サービスを提供し、急速に市場シェアを拡大中。特に若年層からの支持が高い。`,
    },
    {
      name: `グローバル${keyword}株式会社`,
      description: `国際展開に強みを持つ${keyword}企業。高品質なサービスと幅広い製品ラインナップで差別化を図っている。`,
    },
  ];

  // 市場の成長性と競合状況を分析
  const growthIndicators = Math.floor(Math.random() * 3) + 2; // 2〜4のランダムな値
  const competitionLevel = Math.random() < 0.3 ? '低' : Math.random() < 0.7 ? '中' : '高';

  // 収益ポテンシャルの評価
  const potentialIndicators = Math.floor(Math.random() * 3) + 1; // 1〜3のランダムな値
  const potentialLevel = potentialIndicators > 2 ? '高' : potentialIndicators > 1 ? '中' : '低';

  // 成長率の推定
  const growthRate = Math.floor(Math.random() * 30) + 5; // 5%〜35%のランダムな値

  return {
    keyword,
    searchResults: mockSearchResults,
    competitors: mockCompetitors,
    analysis: {
      growth: `+${growthRate}%`,
      competition: competitionLevel,
      potential: potentialLevel,
      audience: '20代〜40代のデジタル活用層',
    }
  };
}

// ニッチ市場の情報を取得する関数
async function getNicheMarketInfo(keyword: string) {
  try {
    // 実際のスクレイピングの代わりにモックデータを使用
    return generateMockData(keyword);
  } catch (error) {
    console.error('ニッチ市場情報取得エラー:', error);
    throw error;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get('keyword');

  if (!keyword) {
    return NextResponse.json({ error: 'キーワードが必要です' }, { status: 400 });
  }

  try {
    const nicheInfo = await getNicheMarketInfo(keyword);
    return NextResponse.json(nicheInfo);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'データの取得に失敗しました' }, { status: 500 });
  }
}