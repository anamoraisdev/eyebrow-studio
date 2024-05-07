

/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Verifica se é o servidor e adiciona as regras para lidar com arquivos de imagem
    if (!isServer) {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // converte imagens menores que 8kb para base64 para otimização
              publicPath: '/_next',
              outputPath: 'static/images',
              name: '[name].[hash].[ext]',
              esModule: false,
            },
          },
        ],
      });
    }

    return config;
  },
};


export default nextConfig;



