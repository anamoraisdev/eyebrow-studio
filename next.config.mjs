
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Adicione as regras para lidar com arquivos de imagem aqui
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              publicPath: '/_next',
              name: 'static/images/[name].[hash].[ext]',
            },
          },
        ],
      });
  
      return config;
    },
};

export default nextConfig;



