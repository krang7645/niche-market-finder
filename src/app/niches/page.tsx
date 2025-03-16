'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';

export default function NichesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState('growth');
  const [sortDirection, setSortDirection] = useState('desc');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ニッチ市場のサンプルデータ
  const nicheMarkets = [
    {
      id: 1,
      name: 'デジタルガーデニング',
      category: 'lifestyle',
      growth: 24,
      competition: '低',
      potential: '高',
      audience: '都市部の30-45歳',
      description: 'デジタルツールを使用した家庭菜園・ガーデニング管理。スマートプランターやセンサーを活用した植物育成の効率化。',
    },
    {
      id: 2,
      name: 'ミニマリスト向けデジタルツール',
      category: 'tech',
      growth: 18,
      competition: '中',
      potential: '中',
      audience: '20-35歳のミニマリスト志向者',
      description: 'デジタル断捨離と効率的なデジタルライフの実現。クラウドストレージの最適化やデジタルコンテンツの整理ツール。',
    },
    {
      id: 3,
      name: 'リモートワーカー向け健康管理',
      category: 'health',
      growth: 32,
      competition: '低',
      potential: '高',
      audience: '在宅勤務者（25-50歳）',
      description: '在宅勤務者向けの健康維持・向上サービス。姿勢改善、目の疲れ防止、運動促進などのソリューション。',
    },
    {
      id: 4,
      name: 'デジタルデトックスサポート',
      category: 'lifestyle',
      growth: 15,
      competition: '低',
      potential: '中',
      audience: 'デジタル疲れを感じる都市部の成人',
      description: 'スマートフォンやSNSの使用時間を制限し、デジタルからの適切な距離を保つためのツールやプログラム。',
    },
    {
      id: 5,
      name: 'マイクロ学習プラットフォーム',
      category: 'education',
      growth: 22,
      competition: '中',
      potential: '高',
      audience: '忙しいビジネスパーソン（25-45歳）',
      description: '短時間で効率的に学べるマイクロラーニングコンテンツ。スキマ時間を活用した学習習慣の形成支援。',
    },
    {
      id: 6,
      name: 'バーチャル旅行体験',
      category: 'entertainment',
      growth: 19,
      competition: '中',
      potential: '中',
      audience: '旅行好きの全年齢層',
      description: 'VRやARを活用した自宅での旅行体験。実際の観光地の雰囲気や文化を体験できるバーチャルツアー。',
    },
  ];

  // カテゴリーリスト
  const categories = [
    { id: 'all', name: 'すべて' },
    { id: 'tech', name: 'テクノロジー' },
    { id: 'lifestyle', name: 'ライフスタイル' },
    { id: 'health', name: '健康' },
    { id: 'education', name: '教育' },
    { id: 'entertainment', name: 'エンターテイメント' },
  ];

  // ソート関数
  const sortNiches = (a: any, b: any) => {
    if (sortField === 'growth') {
      return sortDirection === 'desc' ? b.growth - a.growth : a.growth - b.growth;
    }
    if (sortField === 'name') {
      return sortDirection === 'desc'
        ? b.name.localeCompare(a.name, 'ja')
        : a.name.localeCompare(b.name, 'ja');
    }
    return 0;
  };

  // フィルター関数
  const filterNiches = () => {
    return nicheMarkets
      .filter(niche =>
        (selectedCategory === 'all' || niche.category === selectedCategory) &&
        (searchQuery === '' ||
          niche.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          niche.description.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      .sort(sortNiches);
  };

  const filteredNiches = filterNiches();

  return (
    <div className="space-y-6">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            ニッチ市場
          </h2>
        </div>
      </div>

      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="sm:flex sm:items-center">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="niche-search" className="sr-only">
                ニッチ市場を検索
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="niche-search"
                  id="niche-search"
                  className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  placeholder="ニッチ市場を検索..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-3 sm:ml-4 sm:mt-0">
              <div className="flex rounded-md shadow-sm">
                <select
                  id="category-filter"
                  name="category-filter"
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
            <div className="mt-3 sm:ml-4 sm:mt-0">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <FunnelIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                フィルター
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {filteredNiches.map((niche) => (
            <li key={niche.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="text-sm font-medium text-blue-600 truncate">{niche.name}</p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        成長率: +{niche.growth}%
                      </p>
                    </div>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {categories.find(c => c.id === niche.category)?.name || niche.category}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      競合: {niche.competition}
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      ポテンシャル: {niche.potential}
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      ターゲット: {niche.audience}
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{niche.description}</p>
                </div>
                <div className="mt-2">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    詳細を見る
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">ニッチ市場の選び方</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>理想的なニッチ市場は、成長率が高く、競合が少なく、収益ポテンシャルが高いものです。あなたの専門知識や興味と合致する市場を選ぶことで、より効果的なコンテンツ作成が可能になります。</p>
          </div>
          <div className="mt-3">
            <div className="rounded-md bg-blue-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">成功のためのヒント</h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <ul role="list" className="list-disc space-y-1 pl-5">
                      <li>ニッチ市場の深い理解を得るために徹底的な調査を行う</li>
                      <li>ターゲットオーディエンスの具体的なニーズに焦点を当てる</li>
                      <li>競合が少ない特定の領域（サブニッチ）を見つける</li>
                      <li>長期的な成長が見込める市場を選択する</li>
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