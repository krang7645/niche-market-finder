'use client';

import { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { MagnifyingGlassIcon, ArrowTrendingUpIcon, UserGroupIcon, CurrencyYenIcon } from '@heroicons/react/24/outline';

// Chart.jsの設定
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  // トレンドデータ（デモ用）
  const trendData = {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
    datasets: [
      {
        label: '検索ボリューム',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  // ニッチ市場のサンプルデータ
  const nicheMarkets = [
    {
      id: 1,
      name: 'デジタルガーデニング',
      growth: '+24%',
      competition: '低',
      potential: '高',
      description: 'デジタルツールを使用した家庭菜園・ガーデニング管理',
    },
    {
      id: 2,
      name: 'ミニマリスト向けデジタルツール',
      growth: '+18%',
      competition: '中',
      potential: '中',
      description: 'デジタル断捨離と効率的なデジタルライフの実現',
    },
    {
      id: 3,
      name: 'リモートワーカー向け健康管理',
      growth: '+32%',
      competition: '低',
      potential: '高',
      description: '在宅勤務者向けの健康維持・向上サービス',
    },
  ];

  // 最近の検索キーワード（デモ用）
  const recentKeywords = [
    'サステナブル生活', 'デジタルデトックス', 'マイクロ学習',
    'バーチャル旅行', '個人投資家向けツール', 'リモートチームビルディング'
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">ニッチ市場を探す</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>キーワードを入力して、関連するニッチ市場を発見しましょう</p>
          </div>
          <div className="mt-5 sm:flex sm:items-center">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="keyword" className="sr-only">
                キーワード
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="keyword"
                  id="keyword"
                  className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  placeholder="例: デジタルアート、健康管理"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <button
              type="button"
              className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:ml-3 sm:mt-0 sm:w-auto"
            >
              分析する
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ArrowTrendingUpIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">成長中のニッチ市場</dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">24</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <a href="/trends" className="font-medium text-blue-700 hover:text-blue-900">
                詳細を見る
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <UserGroupIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">競合が少ない市場</dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">12</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <a href="/competitors" className="font-medium text-blue-700 hover:text-blue-900">
                詳細を見る
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CurrencyYenIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">収益ポテンシャル</dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">高い市場: 8</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <a href="/niches" className="font-medium text-blue-700 hover:text-blue-900">
                詳細を見る
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900 mb-4">トレンド分析</h3>
            <Line
              data={trendData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top' as const,
                  },
                  title: {
                    display: true,
                    text: '過去6ヶ月のトレンド',
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900 mb-4">注目のニッチ市場</h3>
            <div className="flow-root">
              <ul role="list" className="-mb-8">
                {nicheMarkets.map((market, marketIdx) => (
                  <li key={market.id}>
                    <div className="relative pb-8">
                      {marketIdx !== nicheMarkets.length - 1 ? (
                        <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                            <span className="text-white font-medium">{market.id}</span>
                          </span>
                        </div>
                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                          <div>
                            <p className="text-sm text-gray-900 font-medium">{market.name}</p>
                            <p className="text-sm text-gray-500 mt-1">{market.description}</p>
                          </div>
                          <div className="whitespace-nowrap text-right text-sm">
                            <span className="text-green-600 font-medium">成長率: {market.growth}</span>
                            <p className="text-gray-500">競合: {market.competition}</p>
                            <p className="text-gray-500">ポテンシャル: {market.potential}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900 mb-4">最近の検索キーワード</h3>
          <div className="flex flex-wrap gap-2">
            {recentKeywords.map((keyword, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
