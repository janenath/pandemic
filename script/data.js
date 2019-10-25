//============================================
//CITY AND CARD DECK DATA SETS
//============================================

//========================================
//PLAYER ICONS
//========================================
const $playerOneIcon = $('<i>').addClass('fas fa-user-nurse fa-lg');
const $playerTwoIcon = $('<i>').addClass('fas fa-user-md fa-lg');

//========================================
//CITY METADATA
//========================================
    const atlanta = {name: 'Atlanta', class: 'atlanta', color: 'blue', diseaseUnits: 0, researchStation: true, moveOptions: ['chicago', 'washington', 'miami']};
    const essen = {name: 'Essen', class: 'essen', color: 'blue', diseaseUnits: 0, researchStation: false, moveOptions: ['london', 'milan', 'paris', 'stPetersburg']};
    const paris = {name: 'Paris', class: 'paris', color: 'blue', diseaseUnits: 0, researchStation: false, moveOptions: ['algiers', 'madrid', 'london', 'essen', 'milan']};
    const sanFrancisco = {name: 'San Francisco', class: 'sanFrancisco', color: 'blue', diseaseUnits: 0, researchStation: false, moveOptions: ['losAngeles', 'chicago', 'tokyo', 'manila']};
    const stPetersburg = {name: 'St. Petersburg', class: 'stPetersburg', color: 'blue', diseaseUnits: 0, researchStation: false, moveOptions: ['essen', 'istanbul', 'moscow']};
    const milan = {name: 'Milan', class: 'milan', color: 'blue', diseaseUnits: 0, researchStation: false, moveOptions: ['essen', 'paris', 'istanbul']};
    const madrid = {name: 'Madrid', class: 'madrid', color: 'blue', diseaseUnits: 0, researchStation: false, moveOptions: ['london', 'paris', 'algiers', 'newYork', 'saoPaulo']};
    const london = {name: 'London', class: 'london', color: 'blue', diseaseUnits: 0, researchStation: false, moveOptions: ['essen', 'paris', 'madrid', 'newYork']};
    const montreal = {name: 'Montréal', class: 'montreal', color: 'blue', diseaseUnits: 0, researchStation: false, moveOptions: ['chicago', 'washington', 'newYork']};
    const newYork = {name: 'New York', class: 'newYork', color: 'blue', diseaseUnits: 0, researchStation: false, moveOptions: ['london', 'madrid', 'washington', 'montreal']};
    const chicago = {name: 'Chicago', class: 'chicago', color: 'blue', diseaseUnits: 0, researchStation: false, moveOptions: ['montreal', 'atlanta', 'mexicoCity', 'losAngeles', 'sanFrancisco']};
    const washington = {name: 'Washington', class: 'washington', color: 'blue', diseaseUnits: 0, researchStation: false, moveOptions: ['newYork', 'montreal', 'atlanta', 'miami']};
    const algiers = {name: 'Algiers', class: 'algiers', color: 'black', diseaseUnits: 0, researchStation: false, moveOptions: ['madrid', 'paris', 'istanbul', 'cairo']};
    const chennai = {name: 'Chennai', class: 'chennai', color: 'black', diseaseUnits: 0, researchStation: false, moveOptions: ['mumbai', 'dehli', 'kolkata', 'bangkok', 'jakarta']};
    const mumbai = {name: 'Mumbai', class: 'mumbai', color: 'black', diseaseUnits: 0, researchStation: false, moveOptions: ['karachi', 'delhi', 'chennai']};
    const karachi = {name: 'Karachi', class: 'karachi', color: 'black', diseaseUnits: 0, researchStation: false, moveOptions: ['riyadh', 'baghdad', 'tehran', 'delhi', 'mumbai']};
    const baghdad = {name: 'Baghdad', class: 'baghdad', color: 'black', diseaseUnits: 0, researchStation: false, moveOptions: ['istanbul', 'cairo', 'reyadh', 'karachi', 'tehran']};
    const delhi = {name: 'Delhi', class: 'delhi', color: 'black', diseaseUnits: 0, researchStation: false, moveOptions: ['kolkata', 'chennai', 'mumbai', 'karachi', 'tehran']};
    const cairo = {name: 'Cairo', class: 'cairo', color: 'black', diseaseUnits: 0, researchStation: false, moveOptions: ['algiers', 'istanbul', 'baghdad', 'riyadh', 'khartoum']};
    const moscow = {name: 'Moscow', class: 'moscow', color: 'black', diseaseUnits: 0, researchStation: false, moveOptions: ['stPetersburg', 'istanbul', 'tehran']};
    const kolkata = {name: 'Kolkata', class: 'kolkata', color: 'black', diseaseUnits: 0, researchStation: false, moveOptions: ['dehli', 'chennai', 'bangkok', 'hongKong']};
    const riyadh = {name: 'Riyadh', class: 'riyadh', color: 'black', diseaseUnits: 0, researchStation: false, moveOptions: ['cairo', 'baghdad', 'karachi']};
    const istanbul = {name: 'Istanbul', class: 'istanbul', color: 'black', diseaseUnits: 0, researchStation: false, moveOptions: ['milan', 'stPetersburg', 'moscow', 'baghdad', 'cairo', 'algiers']};
    const tehran = {name: 'Tehran', class: 'tehran', color: 'black', diseaseUnits: 0, researchStation: false, moveOptions: ['moscow', 'baghdad', 'karachi', 'delhi']};
    const lima = {name: 'Lima', class: 'lima', color: 'yellow', diseaseUnits: 0, researchStation: false, moveOptions: ['mexicoCity', 'bogota', 'santiago']};
    const santiago = {name: 'Santiago', class: 'santiago', color: 'yellow', diseaseUnits: 0, researchStation: false, moveOptions: ['lima']};
    const buenosAires = {name: 'Buenos Aires', class: 'buenosAires', color: 'yellow', diseaseUnits: 0, researchStation: false, moveOptions: ['bogota', 'saoPaulo']};
    const khartoum = {name: 'Khartoum', class: 'khartoum', color: 'yellow', diseaseUnits: 0, researchStation: false, moveOptions: ['lagos', 'kinshasa', 'johannesburg', 'cairo']};
    const saoPaulo = {name: 'Sao Paulo', class: 'saoPaulo', color: 'yellow', diseaseUnits: 0, researchStation: false, moveOptions: ['buenosAires', 'bogota', 'madrid', 'lagos']};
    const johannesburg = {name: 'Johannesburg', class: 'johannesburg', color: 'yellow', diseaseUnits: 0, researchStation: false, moveOptions: ['kinshasa', 'khartoum']};
    const miami = {name: 'Miami', class: 'miami', color: 'yellow', diseaseUnits: 0, researchStation: false, moveOptions: ['washington', 'atlanta', 'mexicoCity', 'bogota']};
    const lagos = {name: 'Lagos', class: 'lagos', color: 'yellow', diseaseUnits: 0, researchStation: false, moveOptions: ['khartoum', 'kinshasa', 'saoPaulo']};
    const kinshasa = {name: 'Kinshasa', class: 'kinshasa', color: 'yellow', diseaseUnits: 0, researchStation: false, moveOptions: ['lagos', 'khartoum', 'johannesburg']};
    const mexicoCity = {name: 'Mexico City', class: 'mexicoCity', color: 'yellow', diseaseUnits: 0, researchStation: false, moveOptions: ['losAngeles', 'chicago', 'miami', 'bogota', 'lima']};
    const bogota = {name: 'Bogota', class: 'bogota', color: 'yellow', diseaseUnits: 0, researchStation: false, moveOptions: ['miami', 'mexicoCity', 'lima', 'buenosAires', 'saoPaulo']};
    const losAngeles = {name: 'Los Angeles', class: 'losAngeles', color: 'yellow', diseaseUnits: 0, researchStation: false, moveOptions: ['sanFrancisco', 'chicago', 'mexicoCity', 'sydney']};
    const manila = {name: 'Manila', class: 'manila', color: 'red', diseaseUnits: 0, researchStation: false, moveOptions: ['sydney', 'sanFrancisco', 'taipei', 'hongKong', 'hoChiMinhCity']};
    const jakarta = {name: 'Jakarta', class: 'jakarta', color: 'red', diseaseUnits: 0, researchStation: false, moveOptions: ['chennai', 'bangkok', 'hoChiMinhCity', 'sydney']};
    const bangkok = {name: 'Bangkok', class: 'bangkok', color: 'red', diseaseUnits: 0, researchStation: false, moveOptions: ['hongKong', 'hoChiMinhCity', 'jakarta', 'chennai', 'kolkata']};
    const hoChiMinhCity = {name: 'Ho Chi Minh City', class: 'hoChiMinhCity', color: 'red', diseaseUnits: 0, researchStation: false, moveOptions: ['jakarta', 'bangkok', 'hongKong', 'manila']};
    const osaka = {name: 'Osaka', class: 'osaka', color: 'red', diseaseUnits: 0, researchStation: false, moveOptions: ['tokyo', 'taipei']};
    const sydney = {name: 'Sydney', class: 'sydney', color: 'red', diseaseUnits: 0, researchStation: false, moveOptions: ['losAngeles', 'manila', 'jakarta']};
    const tokyo = {name: 'Tokyo', class: 'tokyo', color: 'red', diseaseUnits: 0, researchStation: false, moveOptions: ['osaka', 'sanFrancisco', 'seoul', 'shanghai']};
    const shanghai = {name: 'Shanghai', class: 'shanghai', color: 'red', diseaseUnits: 0, researchStation: false, moveOptions: ['beijing', 'seoul', 'tokyo', 'taipei', 'hongKong']};
    const taipei = {name: 'Taipei', class: 'taipei', color: 'red', diseaseUnits: 0, researchStation: false, moveOptions: ['osaka', 'manila', 'hongKong', 'shanghai']};
    const beijing = {name: 'Beijing', class: 'beijing', color: 'red', diseaseUnits: 0, researchStation: false, moveOptions: ['seoul', 'shanghai']};
    const hongKong = {name: 'Hong Kong', class: 'hongKong', color: 'red', diseaseUnits: 0, researchStation: false, moveOptions: ['shanghai', 'taipei', 'manila', 'hoChiMinhCity', 'bangkok', 'kolkata']};
    const seoul = {name: 'Seoul', class: 'seoul', color: 'red', diseaseUnits: 0, researchStation: false, moveOptions: ['tokyo', 'shanghai', 'beijing']};

//LIST OF CITIES
const cityList = [
    lima, santiago, buenosAires, khartoum, saoPaulo, johannesburg, miami, lagos, kinshasa, mexicoCity, bogota, losAngeles, atlanta, essen, sanFrancisco, paris, stPetersburg, madrid, milan, london, montreal, newYork, chicago, washington, tehran, istanbul, riyadh, kolkata, moscow, cairo, delhi, baghdad, karachi, mumbai, chennai, algiers, manila, jakarta, bangkok, hoChiMinhCity, osaka, sydney, tokyo, shanghai, taipei, beijing, hongKong, seoul
 ];

//================================
//PLAYER CARDS DATA ARRAY
//================================
const playerCards = [
    {type: 'city', name: 'Essen', color: 'blue'},
    {type: 'city', name: 'Paris', color: 'blue'},
    {type: 'city', name: 'San Francisco', color: 'blue'},
    {type: 'city', name: 'St. Petersburg', color: 'blue'},
    {type: 'city', name: 'Milan', color: 'blue'},
    {type: 'city', name: 'Madrid', color: 'blue'},
    {type: 'city', name: 'London', color: 'blue'},
    {type: 'city', name: 'Montréal', color: 'blue'},   
    {type: 'city', name: 'New York', color: 'blue'},
    {type: 'city', name: 'Chicago', color: 'blue'},  
    {type: 'city', name: 'Washington', color: 'blue'}, 
    {type: 'city', name: 'Algiers', color: 'black'},
    {type: 'city', name: 'Chennai', color: 'black'},        
    {type: 'city', name: 'Mumbai', color: 'black'},
    {type: 'city', name: 'Karachi', color: 'black'},
    {type: 'city', name: 'Baghdad', color: 'black'},
    {type: 'city', name: 'Delhi', color: 'black'},
    {type: 'city', name: 'Cairo', color: 'black'},
    {type: 'city', name: 'Moscow', color: 'black'},
    {type: 'city', name: 'Kolkata', color: 'black'},
    {type: 'city', name: 'Riyadh', color: 'black'},
    {type: 'city', name: 'Istanbul', color: 'black'},
    {type: 'city', name: 'Tehran', color: 'black'},
    {type: 'city', name: 'Los Angeles', color: 'yellow'},
    {type: 'city', name: 'Bogotá', color: 'yellow'},
    {type: 'city', name: 'Mexico City', color: 'yellow'},
    {type: 'city', name: 'Kinshasa', color: 'yellow'},
    {type: 'city', name: 'Lagos', color: 'yellow'},
    {type: 'city', name: 'Miami', color: 'yellow'},
    {type: 'city', name: 'Johannesburg', color: 'yellow'},
    {type: 'city', name: 'Sao Paulo', color: 'yellow'},
    {type: 'city', name: 'Khartoum', color: 'yellow'},
    {type: 'city', name: 'Buenos Aires', color: 'yellow'},
    {type: 'city', name: 'Santiago', color: 'yellow'},
    {type: 'city', name: 'Lima', color: 'yellow'},
    {type: 'city', name: 'Seoul', color: 'red'},
    {type: 'city', name: 'Hong Kong', color: 'red'},
    {type: 'city', name: 'Beijing', color: 'red'},
    {type: 'city', name: 'Taipei', color: 'red'},
    {type: 'city', name: 'Shanghai', color: 'red'},
    {type: 'city', name: 'Tokyo', color: 'red'},
    {type: 'city', name: 'Sydney', color: 'red'},
    {type: 'city', name: 'Osaka', color: 'red'},
    {type: 'city', name: 'Ho Chi Minh City', color: 'red'},
    {type: 'city', name: 'Bangkok', color: 'red'},
    {type: 'city', name: 'Jakarta', color: 'red'},
    {type: 'city', name: 'Manila', color: 'red'},
    ];

//================================    
//INFECTION CARDS DATA ARRAY
//================================
const infectionCards = [
    {name: 'Essen', color: 'blue'},
    {name: 'Paris', color: 'blue'},
    {name: 'San Francisco', color: 'blue'},
    {name: 'St. Petersburg', color: 'blue'},
    {name: 'Milan', color: 'blue'},
    {name: 'Madrid', color: 'blue'},
    {name: 'London', color: 'blue'},
    {name: 'Montréal', color: 'blue'},   
    {name: 'New York', color: 'blue'},
    {name: 'Chicago', color: 'blue'},  
    {name: 'Washington', color: 'blue'}, 
    {name: 'Algiers', color: 'black'},
    {name: 'Chennai', color: 'black'},        
    {name: 'Mumbai', color: 'black'},
    {name: 'Karachi', color: 'black'},
    {name: 'Baghdad', color: 'black'},
    {name: 'Delhi', color: 'black'},
    {name: 'Cairo', color: 'black'},
    {name: 'Moscow', color: 'black'},
    {name: 'Kolkata', color: 'black'},
    {name: 'Riyadh', color: 'black'},
    {name: 'Istanbul', color: 'black'},
    {name: 'Tehran', color: 'black'},
    {name: 'Los Angeles', color: 'yellow'},
    {name: 'Bogotá', color: 'yellow'},
    {name: 'Mexico City', color: 'yellow'},
    {name: 'Kinshasa', color: 'yellow'},
    {name: 'Lagos', color: 'yellow'},
    {name: 'Miami', color: 'yellow'},
    {name: 'Johannesburg', color: 'yellow'},
    {name: 'Sao Paulo', color: 'yellow'},
    {name: 'Khartoum', color: 'yellow'},
    {name: 'Buenos Aires', color: 'yellow'},
    {name: 'Santiago', color: 'yellow'},
    {name: 'Lima', color: 'yellow'},
    {name: 'Seoul', color: 'red'},
    {name: 'Hong Kong', color: 'red'},
    {name: 'Beijing', color: 'red'},
    {name: 'Taipei', color: 'red'},
    {name: 'Shanghai', color: 'red'},
    {name: 'Tokyo', color: 'red'},
    {name: 'Sydney', color: 'red'},
    {name: 'Osaka', color: 'red'},
    {name: 'Ho Chi Minh City', color: 'red'},
    {name: 'Bangkok', color: 'red'},
    {name: 'Jakarta', color: 'red'},
    {name: 'Manila', color: 'red'},
];
const infectionCardsList = [
    atlanta, essen, sanFrancisco, paris, stPetersburg, madrid, milan, london, montreal, newYork, chicago, washington, tehran, istanbul, riyadh, kolkata, moscow, cairo, delhi, baghdad, karachi, mumbai, chennai, algiers, lima, santiago, buenosAires, khartoum, saoPaulo, johannesburg, miami, lagos, kinshasa, mexicoCity, bogota, losAngeles, manila, jakarta, bangkok, hoChiMinhCity, osaka, sydney, tokyo, shanghai, taipei, beijing, hongKong, seoul
 ];

const initMap = () => {
    const mapCenter = {lat: 22.518362, lng: 7.28095};
    const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 0,
    center: mapCenter
    });

    const sfCoordinates = {lat: 37.774929, lng: -122.419418};
    const sfMarker = new google.maps.Marker({
     position: sfCoordinates,
     map: map,
     title: 'hello world'
 })
}