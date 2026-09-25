# 🌤️ Dashboard de Clima & Previsão do Tempo

Um painel de controle meteorológico moderno e responsivo desenvolvido com HTML5, CSS3 (Glassmorphism) e JavaScript Vanilla, consumindo a API em tempo real da OpenWeatherMap e utilizando geolocalização nativa.


---

## 📌 Sobre o Projeto

Este projeto é uma aplicação web interativa desenvolvida para exibir informações meteorológicas em tempo real de qualquer cidade do mundo. O painel inclui dados como temperatura, condição do tempo com ícones dinâmicos, umidade do ar e velocidade do vento convertida para $km/h$.

### 🚀 Funcionalidades

- **Busca por Cidade:** Consulta de dados climáticos globais utilizando a API OpenWeatherMap.
- **Geolocalização Automática:** Identificação da cidade atual do usuário através da API nativa `navigator.geolocation` do navegador.
- **Interface Glassmorphism:** Design moderno estilizado com efeito de vidro opaco (`backdrop-filter: blur`), gradientes elegantes e suporte a telas móveis.
- **Conversão e Formatação de Dados:**
  - Arredondamento de temperaturas com `Math.round()`.
  - Conversão de velocidade do vento de $m/s$ para $km/h$.
  - Suporte completo a nomes traduzidos para Português do Brasil (`pt_br`).
- **Tratamento de Erros e Usabilidade:** Alertas amigáveis em caso de cidade não encontrada ou recusa de acesso à localização.

---

## 🛠️ Tecnologias Utilizadas

- **[HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML):** Estrutura semântica para elementos do painel e formulário.
- **[CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS):** Layouts com Flexbox, CSS Grid e técnica de Glassmorphism.
- **[JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript):** Funções assíncronas (`async/await`), consumo de API via `fetch`, manipulação do DOM e tratamento de erros com `try/catch`.
- **[FontAwesome](https://fontawesome.com/):** Biblioteca de ícones para a interface de usuário.
- **[OpenWeatherMap API](https://openweathermap.org/api):** Serviço REST para fornecimento de dados meteorológicos globais em tempo real.

---

## 💻 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/WeslleyA/dashboard-clima.git](https://github.com/WeslleyA/dashboard-clima.git)# Dashboard-de-Clima
