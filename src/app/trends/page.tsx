'use client';

import { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { MagnifyingGlassIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

// Chart.jsの設定
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

export default function TrendsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // トレンドデータ（デモ用）
  const trendData = {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
    datasets: [
      {
        label: 'デジタルガーデニング',
        data: [65, 59, 80, 81, 90, 100],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'ミニマリスト向けデジタルツール',
        data: [28, 48, 40, 45, 46, 55],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'リモートワーカー向け健康管理',
        data: [33, 45, 47, 52, 63, 82],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  // 成長率データ（デモ用）
  const growthData = {
    labels: ['デジタルガーデニング', 'ミニマリスト向けツール', 'リモートワーカー健康管理', 'デジタルデトックス', 'マイクロ学習', 'バーチャル旅行'],
    datasets: [
      {
        label: '6ヶ月間の成長率 (%)',
        data: [24, 18, 32, 15, 22, 19],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  // カテゴリーリスト
  const categories = [
    { id: 'all', name: 'すべて' },
    { id: 'tech', name: 'テクノロジー' },
    { id: 'lifestyle', name: 'ライフスタイル' },
    { id: 'health', name: '健康' },
    { id: 'education', name: '教育' },
    { id: 'entertainment', name: 'エンターテイメント' },
  ];

  // 関連キーワードリスト（デモ用）
  const relatedKeywords = [
    { keyword: 'スマートガーデニング', volume: '5,400', growth: '+28%', difficulty: '中' },
    { keyword: 'ハイドロポニックス 初心者', volume: '3,200', growth: '+22%', difficulty: '低' },
    { keyword: 'デジタル植物管理', volume: '2,800', growth: '+19%', difficulty: '低' },
    { keyword: 'スマートプランター', volume: '4,100', growth: '+15%', difficulty: '中' },
    { keyword: '自動水やりシステム', volume: '6,300', growth: '+12%', difficulty: '高' },
  ];

  return (
    <div className="space-y-6">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            トレンド分析
          </h2>
        </div>
      </div>

      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="sm:flex sm:items-center">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="trend-search" className="sr-only">
                トレンドを検索
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="trend-search"
                  id="trend-search"
                  className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  placeholder="トレンドを検索..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-3 sm:ml-4 sm:mt-0">
              <div className="flex rounded-md shadow-sm">
                <select
                  id="category"
                  name="category"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="button"
              className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:ml-3 sm:mt-0 sm:w-auto"
            >
              <ArrowPathIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              更新
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900 mb-4">検索ボリュームの推移</h3>
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
                    text: '過去6ヶ月のトレンド推移',
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900 mb-4">成長率比較</h3>
            <Bar
              data={growthData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top' as const,
                  },
                  title: {
                    display: true,
                    text: 'ニッチ市場の成長率比較',
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      <div className="bg-white shadow sm:rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">関連キーワード分析</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">「デジタルガーデニング」に関連するキーワード</p>
        </div>
        <div className="border-t border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">キーワード</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">月間検索ボリューム</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">成長率</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">競合難易度</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {relatedKeywords.map((item, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{item.keyword}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.volume}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-green-600">{item.growth}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.difficulty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">トレンド分析のインサイト</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>「デジタルガーデニング」は過去6ヶ月で24%の成長を示しており、特に都市部の若い世代からの関心が高まっています。関連するキーワードも同様に成長傾向にあり、このニッチ市場は今後も拡大が見込まれます。</p>
          </div>
          <div className="mt-3">
            <div className="rounded-md bg-blue-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">おすすめのアクション</h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <ul role="list" className="list-disc space-y-1 pl-5">
                      <li>初心者向けのデジタルガーデニングガイドを作成する</li>
                      <li>スマートガーデニングツールのレビューコンテンツを展開する</li>
                      <li>ハイドロポニックス関連の教育コンテンツに注力する</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}