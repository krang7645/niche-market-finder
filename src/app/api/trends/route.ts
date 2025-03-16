import { NextResponse } from 'next/server';

// モックデータを生成する関数
function generateMockTrendsData(keyword: string) {
  // 過去6ヶ月のトレンドデータを生成
  const now = new Date();
  const timelineData = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setMonth(now.getMonth() - i);

    // ランダムな値を生成（徐々に上昇傾向）
    const baseValue = 30 + Math.floor(Math.random() * 20);
    const trendValue = baseValue + (i * 5) + Math.floor(Math.random() * 15);

    timelineData.push({
      time: Math.floor(date.getTime() / 1000).toString(),
      formattedTime: `${date.getFullYear()}年${date.getMonth() + 1}月`,
      value: [trendValue],
    });
  }

  // 関連キーワードを生成
  const relatedQueries = {
    default: {
      rankedList: [
        {
          rankedKeyword: [
            { query: `${keyword} 市場規模`, value: 100 },
            { query: `${keyword} 将来性`, value: 80 },
            { query: `${keyword} ビジネス`, value: 70 },
            { query: `${keyword} 成長率`, value: 65 },
            { query: `${keyword} 投資`, value: 60 },
          ]
        }
      ]
    }
  };

  // 地域別の関心度を生成
  const regions = ['東京', '大阪', '愛知', '福岡', '北海道', '神奈川', '埼玉', '千葉'];
  const geoData = regions.map(region => ({
    geoName: region,
    value: [Math.floor(Math.random() * 100)]
  }));

  const interestByRegion = {
    default: {
      geoMapData: geoData
    }
  };

  return {
    interestOverTime: {
      default: {
        timelineData
      }
    },
    relatedQueries,
    interestByRegion
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get('keyword');

  if (!keyword) {
    return NextResponse.json({ error: 'キーワードが必要です' }, { status: 400 });
  }

  try {
    // モックデータを生成
    const trendsData = generateMockTrendsData(keyword);
    return NextResponse.json(trendsData);
  } catch (error) {
    console.error('トレンドデータ生成エラー:', error);
    return NextResponse.json({ error: 'データの取得に失敗しました' }, { status: 500 });
  }
}