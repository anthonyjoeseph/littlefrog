// @flow

import { AsyncStorage } from 'react-native';

var STORAGE_KEY = "JWT_ASYNC_STORAGE_KEY";

export async function fetchAndPersistJWT(username:String, password:String){
  var bodyJSON = JSON.stringify({
    name: username,
    password: password
  });

  var response = await fetch('http://readbroccoli.com:8080/broccolistudents/users/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: bodyJSON
  });

  var json = await response.json();

  if(json.hasOwnProperty('jwt')){
    var jwtToken = json.jwt;
    await AsyncStorage.setItem(STORAGE_KEY, jwtToken);
  }else{
    return Promise.reject(Error(json.error));
  }
}

export async function clearJWT(){
  await AsyncStorage.setItem(STORAGE_KEY, "");
}

export async function authenticatedRESTRequest(restURI:String, restMethod:String, restBody:String) {
  var DEMO_TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
  var fullURI = "http://readbroccoli.com:8080/broccolistudents/" + restURI;
  var response = await fetch(fullURI, {
    method: restMethod,
    headers: {
      'Authorization': 'Bearer ' + DEMO_TOKEN
    },
    body: restBody
  });
  return response;
}
