'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export default function CompetitorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNiche, setSelectedNiche] = useState('1');

  // ニッチ市場のリスト
  const niches = [
    { id: '1', name: 'デジタルガーデニング' },
    { id: '2', name: 'ミニマリスト向けデジタルツール' },
    { id: '3', name: 'リモートワーカー向け健康管理' },
  ];

  // 競合データ（デモ用）
  const competitors = [
    {
      id: 1,
      nicheId: '1',
      name: 'プラントケア',
      website: 'https://example.com/plantcare',
      strength: '使いやすいUI、植物認識AI',
      weakness: '高価な月額プラン、限定的なコミュニティ機能',
      marketShare: 28,
      contentTypes: ['ブログ', 'YouTube', 'Instagram'],
      rating: 4.2,
    },
    {
      id: 2,
      nicheId: '1',
      name: 'ガーデンテック',
      website: 'https://example.com/gardentech',
      strength: '詳細な植物データベース、天気連携',
      weakness: '複雑な操作性、モバイルアプリの不具合',
      marketShare: 15,
      contentTypes: ['ブログ', 'Pinterest'],
      rating: 3.8,
    },
    {
      id: 3,
      nicheId: '1',
      name: 'スマートプランター',
      website: 'https://example.com/smartplanter',
      strength: 'ハードウェア連携、詳細なデータ分析',
      weakness: '高価な初期投資、限られた植物種類',
      marketShare: 12,
      contentTypes: ['YouTube', 'オンラインコース'],
      rating: 4.0,
    },
    {
      id: 4,
      nicheId: '2',
      name: 'ミニマルデジタル',
      website: 'https://example.com/minimaldigital',
      strength: 'シンプルなUI、クラウド統合',
      weakness: '機能の制限、カスタマイズ性の低さ',
      marketShare: 22,
      contentTypes: ['ブログ', 'Podcast'],
      rating: 4.5,
    },
    {
      id: 5,
      nicheId: '3',
      name: 'リモートヘルス',
      website: 'https://example.com/remotehealth',
      strength: 'エルゴノミクスアドバイス、目の疲れ防止',
      weakness: 'データプライバシーの懸念、高価なプラン',
      marketShare: 18,
      contentTypes: ['ブログ', 'メールマガジン', 'Webinar'],
      rating: 3.9,
    },
  ];

  // 選択されたニッチの競合を取得
  const getCompetitorsByNiche = () => {
    return competitors
      .filter(comp =>
        comp.nicheId === selectedNiche &&
        (searchQuery === '' ||
          comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          comp.strength.toLowerCase().includes(searchQuery.toLowerCase()) ||
          comp.weakness.toLowerCase().includes(searchQuery.toLowerCase()))
      );
  };

  const filteredCompetitors = getCompetitorsByNiche();

  // 市場シェアの合計を計算
  const totalMarketShare = filteredCompetitors.reduce((sum, comp) => sum + comp.marketShare, 0);

  return (
    <div className="space-y-6">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            競合分析
          </h2>
        </div>
      </div>

      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="sm:flex sm:items-center">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="niche-select" className="block text-sm font-medium leading-6 text-gray-900">
                ニッチ市場を選択
              </label>
              <select
                id="niche-select"
                name="niche-select"
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                value={selectedNiche}
                onChange={(e) => setSelectedNiche(e.target.value)}
              >
                {niches.map((niche) => (
                  <option key={niche.id} value={niche.id}>
                    {niche.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4 w-full sm:max-w-xs sm:mt-0 sm:ml-4">
              <label htmlFor="competitor-search" className="block text-sm font-medium leading-6 text-gray-900">
                競合を検索
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="competitor-search"
                  id="competitor-search"
                  className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  placeholder="競合を検索..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
              <button
                type="button"
                className="mt-8 inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <ArrowPathIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                更新
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow sm:rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {niches.find(n => n.id === selectedNiche)?.name}の競合分析
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            市場シェア合計: {totalMarketShare}% (残り: {100 - totalMarketShare}%は小規模競合または未開拓)
          </p>
        </div>
        <div className="border-t border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">競合名</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">市場シェア</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">強み</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">弱み</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">コンテンツタイプ</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">評価</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {filteredCompetitors.map((competitor) => (
                  <tr key={competitor.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      <a href={competitor.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-900">
                        {competitor.name}
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{competitor.marketShare}%</td>
                    <td className="px-3 py-4 text-sm text-gray-500">{competitor.strength}</td>
                    <td className="px-3 py-4 text-sm text-gray-500">{competitor.weakness}</td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      <div className="flex flex-wrap gap-1">
                        {competitor.contentTypes.map((type, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        {competitor.rating.toFixed(1)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">市場ギャップ分析</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>現在の競合が対応していない市場ニーズ：</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>初心者向けの簡易ガイド機能</li>
                <li>コミュニティベースの知識共有</li>
                <li>手頃な価格帯のサービス</li>
                <li>オフライン機能の充実</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">差別化戦略</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>競合と差別化するための戦略提案：</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>無料プランと有料プランの明確な価値提供</li>
                <li>ユーザー生成コンテンツの活用</li>
                <li>地域特化型の情報提供（日本の気候に特化など）</li>
                <li>AIを活用した個別アドバイス機能</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}