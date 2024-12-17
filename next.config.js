/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export
  sassOptions: {
    includePaths: ["./node_modules"], // Include libraries
    quietDeps: true, // Suppress warnings for third-party libraries
  },
  trailingSlash: true, // Ensure trailing slashes for static URLs
  basePath: '', // Leave it empty unless you're using a subfolder for your app
  assetPrefix: '', // Ensure static assets are served correctly
  images: {
    domains: ['kids-videos.s3.eu-west-1.amazonaws.com'], // External domains for images
    disableStaticImages: true, // Disable static image optimization for external images
  },
  webpack(config, { isServer }) {
    // Add custom Webpack configurations for handling image files
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      ],
    });

    // Add a rule for SVG files to be handled as React components using @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
