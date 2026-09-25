// ==========================================
// 1. CONFIGURAÇÕES E SELEÇÃO DE ELEMENTOS
// ==========================================

const apikey = 'c74a0fcea5cc07b41b8253ebd222d092'

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const geoBtn = document.getElementById('geoBtn');

const cityName = document.getElementById('cityName');
const weatherDescription = document.getElementById('weatherDescription');
const temperature = document.getElementById('temperature');
const weatherIcon = document.getElementById('weatherIcon');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');

// ==========================================
// 2. FUNÇÃO PRINCIPAL: BUSCAR CLIMA POR CIDADE
// ==========================================
async function fetchWeatherByCity(city) {
    if (!city.trim()) return;
    try{
        // Exibe status visual de carregamento
        cityName.textContent = "Buscando...";
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=pt_br`;

        const response = await fetch(url);

        // Se a cidade não for encontrada (erro 404)ou houver outro erro no API
        if (!response.ok){
            throw new Error('Cidade não encontrada');
            
        }

        const data = await response.json();
        updateUI(data);

    } catch(error){
        alert("Erro:"+ error.menssage + ". Verifique se o nome da cidade está correto ou se sua Chave de API está ativa.");
        cityName.textContent = "--"
        weatherDescription.textContent = "--";
        temperature.textContent = "--°C";
        humidity.textContent = "--%";
        windSpeed.textContent = "-- km/h";
        weatherIcon.style.display = 'none';
    }
    
}
// ==========================================
// 3. BUSCAR CLIMA POR GEOLOCALIZAÇÃO (GPS)
// ==========================================
function fetchWeatherByLocation(){
    if(navigation.geolocation){
        cityName.textContent = "Obtendo localizações...";

        navigator.geolocation.getCurrentPosition(
            async (position) =>{
                const lat =position.coords.latitude;
                const lon = position.coords.longitude;

                try{
                    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`;
                    const response = await fetch(url);
                    if (!response.ok) throw new Error('Erro ao buscar clima por localização.');

                    const data = await response.json();
                    updateUI(data);

                }catch (Error) {
                    alert( error.message);
                }
            },
            (error) => {
                alert ("Não foi possível acessar a sua localização. Por favor, digite o nome da cidade manualmente.");
                cityName.textContent = "--";
            }
        );
    } else {
        alert("Seu navegador não suporta geolocalização.");
    }
}

// ==========================================
// 4. ATUALIZAR A INTERFACE (DOM) COM OS DADOS
// ==========================================
function updateUi(data){
    //Nome da Cidade e País (ex: São Paulo, BR)
    cityName.textContent = '${data.name}, ${data.sys.country}';

    // Descrição do Clima (ex: céu limpo)
    weatherDescription.textContent = data.weather[0].description;

    // Arredonda a temperatura para número inteiro
    temperature.textContent = '${Math.round(data.main.temp)}ºC';

    // Umidade do Ar
    humidity.textContent = '${data.main.humidity}%';

    // Converte a velocidade do vento de m/s para km/h (* 3.6)
    const speedKmH = Math.round(data.wind.speed * 3.6);
    windSpeed.textContent = '${speedKmH} km/h';

    // Ícone Oficial do Clima vindo da API
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.alt = data.weather[0].description;
    weatherIcon.style.display = 'block';
}
// ==========================================
// 5. EVENT LISTENERS (INTERAÇÕES DO JOGADOR)
// ==========================================

// Clique no botão de busca (Lupa)
searchBtn.addEventListener('click', () => {
    if (e.key === 'Enter'){
        fetchWeatherByCity(cityInput.value);
    }
});
// Clique no botão de GPS / Localização
geoBtn.addEventListener('click', fetchWeatherByLocation);

// Carrega uma cidade padrão assim que a página abre
fetchWeatherByCity('São Paulo');