// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Adicionando os arquivos CSS globalmente
  css: [
    '@/assets/bootstrap.css', // Bootstrap customizado
    '@/assets/css/main.css',  // CSS global do projeto
  ],

  // Transpilando o Bootstrap se necessário
  build: {
    transpile: ['bootstrap'],
  },

  // (Opcional) Incluindo o script do Bootstrap para funcionalidades JS
  app: {
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript',
          body: true, // Garante que o script seja carregado no final da página
        },
      ],
    },
  },
});
