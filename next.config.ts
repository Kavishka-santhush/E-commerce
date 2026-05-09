/** @type {import('next').NextConfig} */
const nextConfig = {
  /* නෙක්ස්ට් ජේඑස් වින්‍යාසයන් මෙහි ඇතුළත් වේ */
  images: {
    // බාහිර රූප සේවා (Unsplash වැනි) වලට අවසර දීම
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
