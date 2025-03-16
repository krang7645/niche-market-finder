/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 警告があってもビルドを続行する
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;