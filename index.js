// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict'

// https://opendata.paris.fr/explore/dataset/lieux-de-tournage-a-paris/information
const filmingLocations = require('./lieux-de-tournage-a-paris.json')

console.log('🚀 It Works!');
//console.log(filmingLocations);
/**
 * 💅 Try to produce the most readable code, use meaningful variable names
 * Your intentions should be clear by just reading the code
 * Good luck, have fun !
 */


// 📝 TODO: Number of filming locations
// 1. Make the function return the number of filming locations
function getFilmingLocationsNumber () {

	return filmingLocations.length
}
console.log(`There is ${getFilmingLocationsNumber()} filming locations in Paris`)

// 📝 TODO: Filming locations sorted by start date, from most recent to oldest.
// 1. Implement the function
// 2. Log the first and last item in array
function sortFilmingLocationsByStartDate () {
	let test =  filmingLocations.sort(function(a,b){ return new Date(a.fields.date_debut) - new Date(b.fields.date_debut);});
	test = test.reverse();
	return (test[0], test[filmingLocations.length-1]);
}
console.log(sortFilmingLocationsByStartDate())

// 📝 TODO: Number of filming locations in 2020 only
// 1. Make the function return the number of filming locations in 2020 only
// 2. Log the result
function getFilmingLocationsNumber2020 () {
	let result = []
	for(let element of filmingLocations){
		if(element.fields.annee_tournage === "2020")
		{
			result.push(element);
		}

	}
	return result.length
}
console.log(getFilmingLocationsNumber2020())

// 📝 TODO: Number of filming locations per year
// 1. Implement the function, the expected result is an object with years as
// keys and filming locations number as value, e.g:
//    const filmingLocationsPerYear = {
//      '2020': 1234,
//      '2021': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerYear () {
	let carte = {};

	for(let element of filmingLocations )
	{
		if(carte[element.fields.annee_tournage] !== undefined)
		{
			carte[element.fields.annee_tournage] += 1;
		}
		else
		{
			carte[element.fields.annee_tournage] = 1;
		}

	}
	return carte
}
console.log(getFilmingLocationsNumberPerYear())

// 📝 TODO: Number of filming locations by district (arrondissement)
// 1. Implement the function, the expected result is an object with
// district as keys and filming locations number as value, e.g:
//    const filmingLocationsPerDistrict = {
//      '75013': 1234,
//      '75014': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerDistrict () {
	let dico = {};

	for(let element of filmingLocations )
	{
		if(dico[element.fields. ardt_lieu] !== undefined)
		{
			dico[element.fields. ardt_lieu] += 1;
		}
		else
		{
			dico[element.fields. ardt_lieu] = 1;
		}

	}
	return dico
}
console.log(getFilmingLocationsNumberPerDistrict())

// 📝 TODO: Number of locations per film, sorted in descending order
// 1. Implement the function, result expected as an array of object like:
//    const result = [{film: 'LRDM - Patriot season 2', locations: 12}, {...}]
// 2. Log the first and last item of the array
function getFilmLocationsByFilm () {
	let dico2 = {};

	for(let element of filmingLocations )
	{
		if(dico2[element.fields.nom_tournage] !== undefined)
		{
			dico2[element.fields. nom_tournage] += 1;
		}
		else
		{
			dico2[element.fields. nom_tournage] = 1;
		}

	}
	let arr = []
	let film = Object.keys(dico2);
	for (let key of film){
		arr.push({'film' : key ,locations:dico2[key]})
	}

	return arr;


}
console.log(getFilmLocationsByFilm())

// 📝 TODO: Number of different films
// 1. Implement the function
// 2. Log the result
function getNumberOfFilms() {
	let dictio = {};
	for(let element of filmingLocations )
	{
		if(dictio[element.fields.nom_tournage] !== undefined)
		{
			dictio[element.fields. nom_tournage] += 1;
		}
		else
		{
			dictio[element.fields. nom_tournage] = 1;
		}

	}
	let result = Object.keys(dictio);
	return result.length;
}

console.log(getNumberOfFilms());

// 📝 TODO: All the filming locations of `LRDM - Patriot season 2`
// 1. Return an array with all filming locations of LRDM - Patriot season 2
// 2. Log the result
function getArseneFilmingLocations () {
	let array = [];
	for (let element of filmingLocations){
		if(element.fields.nom_tournage === "LRDM - Patriot season 2"){
			array.push(element.fields.adresse_lieu);
		}
	}
	return array
}
console.log(getArseneFilmingLocations())
// 📝 TODO: Tous les arrondissement des lieux de tournage de nos films favoris
//  (favoriteFilms)
// 1. Return an array of all the districts of each favorite films given as a
//    parameter. e.g. :
//    const films = { 'LRDM - Patriot season 2': ['75013'] }
// 2. Log the result
function getFavoriteFilmsLocations (favoriteFilmsNames) {
	let dictionnaire = {};
	for(const elements of favoriteFilmsNames){
		dictionnaire[elements] = [];
	}
	for (let element of filmingLocations){
		if (dictionnaire[element.fields.nom_tournage] !== undefined ){
			dictionnaire[element.fields.nom_tournage].push(element.fields.ardt_lieu);
		}
	}
	for(const elements of favoriteFilmsNames){
		dictionnaire[elements] = [...new Set(dictionnaire[elements])];

	}
	return dictionnaire;
}
const favoriteFilms =
	[
		'LRDM - Patriot season 2',
		'Alice NEVERS',
		'Emily in Paris',
	]

console.log(getFavoriteFilmsLocations(favoriteFilms))
// 📝 TODO: All filming locations for each film
//     e.g. :
//     const films = {
//        'LRDM - Patriot season 2': [{...}],
//        'Une jeune fille qui va bien': [{...}]
//     }
function getFilmingLocationsPerFilm () {
	let dictionnaire = {};
	for(let element of filmingLocations){
		if (dictionnaire[element.fields.nom_tournage] !== undefined ){
			dictionnaire[element.fields.nom_tournage].push(element.fields.adresse_lieu);
		}
		else{
			dictionnaire[element.fields.nom_tournage] = [element.fields.adresse_lieu];
		}
	}
	return dictionnaire;
}
console.log(getFilmingLocationsPerFilm())
// 📝 TODO: Count each type of film (Long métrage, Série TV, etc...)
// 1. Implement the function
// 2. Log the result
function countFilmingTypes () {
	let dictionnaire = {};
	for(let element of filmingLocations){
		if (dictionnaire[element.fields.nom_tournage] === undefined ){
			dictionnaire[element.fields.nom_tournage] =element.fields.type_tournage;
		}
	}
	let dico = {}
	let arr = Object.values(dictionnaire);
	for(let value of arr){
		if(dico[value] !==undefined){
			dico[value] +=1;
		}
		else{
			dico[value] = 1;
		}
	}
	return dico;
}
console.log(countFilmingTypes())
// 📝 TODO: Sort each type of filming by count, from highest to lowest
// 1. Implement the function. It should return a sorted array of objects like:
//    [{type: 'Long métrage', count: 1234}, {...}]
// 2. Log the result
function sortedCountFilmingTypes () {
	let dico = countFilmingTypes();
	let typeFilms = Object.keys(dico);
	let arr = []
	for (let key of typeFilms){
		arr.push({'type' : key ,count:dico[key]})
	}
	arr.sort((a,b)=>b.count - a.count)
	return arr
}
console.log(sortedCountFilmingTypes())
/**
 * This arrow functions takes a duration in milliseconds and returns a
 * human-readable string of the duration
 * @param ms
 * @returns string
 */
const duration = (ms) => `${(ms/(1000*60*60*24)).toFixed(0)} days, ${((ms/(1000*60*60))%24).toFixed(0)} hours and ${((ms/(1000*60))%60).toFixed(0)} minutes`

// 📝 TODO: Find the filming location with the longest duration
// 1. Implement the function
// 2. Log the filming location, and its computed duration
function calculateLongestDuration(){
	let resultArray = [];
	for (let element of filmingLocations){
		let dureeFilmLoc = new Date(element.fields.date_fin) - new Date(element.fields.date_debut);
		resultArray.push({'tournage': element.fields.nom_tournage, 'lieu':element.fields.adresse_lieu,duree: duration(dureeFilmLoc)})
	}
	resultArray.sort((a,b)=>b.duree - a.duree);
	resultArray.reverse();
	return resultArray[0];
}
console.log(calculateLongestDuration())
// 📝 TODO: Compute the average filming duration
// 1. Implement the function
// 2. Log the result
