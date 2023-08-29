const API_URL = '/api/v1/rest/season/search';

const section = document.querySelector('section');

searchForm.addEventListener('submit',fetchResults);

var request = require("request");

var options = {
    method: 'GET',
    url: 'http://stapi.co/api/v1/rest/character',
    headers: 
    {   'cache-control': 'no-cache',
        'x-apikey': 'null' 
    } 
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
});

var request = require("request");

var options = {
    method: 'GET',
    url: 'http://stapi.co/api/v1/rest/spacecraft',
    headers: 
    {   'cache-control': 'no-cache',
    'x-apikey': 'null' 
        } 
};

var request = require("request");

var options = {
    method: 'GET',
    url: 'http://stapi.co/api/v1/rest/movie',
    headers: 
    {   'cache-control': 'no-cache',
    'x-apikey': 'null' 
        } 
};

var request = require("request");

var options = {
    method: 'GET',
    url: 'http://stapi.co/api/v1/rest/series',
    headers: 
    {   'cache-control': 'no-cache',
    'x-apikey': 'null' 
        } 
};

var request = require("request");

var options = {
    method: 'GET',
    url: 'http://stapi.co/api/v1/rest/season',
    headers: 
    {   'cache-control': 'no-cache',
    'x-apikey': 'null' 
        } 
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
});

function displayResults(json) {
    let results = json.docs;
    if(results.length ===0)
    console.log("No Results, Captain.");
    
    }else{
    for(let i = 0 < results.length; i++){
        let results = createElement('ul');
        results.appendChild(results);
        }
    };
 












    























// http://stapi.co/api/v1/rest/character
// http://stapi.co/api/v1/rest/spacecraft
// http://stapi.co/api/v1/rest/movie
// http://stapi.co/api/v1/rest/series
// http://stapi.co/api/v1/rest/season 