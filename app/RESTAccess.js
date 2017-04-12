// @flow

import { AsyncStorage } from 'react-native';

var STORAGE_KEY = "JWT_ASYNC_STORAGE_KEY";

export async function hasJWT(){
  try{
    var DEMO_TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
  } catch (e) {
    return false;
  }
  var tmp = "three";
  return DEMO_TOKEN != null && DEMO_TOKEN != "";
}

export async function getAuthorizationHeaders(){
    var DEMO_TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
    return {
        'Authorization': 'Bearer ' + DEMO_TOKEN
      };
}

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
  await AsyncStorage.removeItem(STORAGE_KEY);
}

export async function authenticatedRESTRequest(restURI:string, restMethod:string, restBody:string) {
  var authHeaders = await getAuthorizationHeaders();
  var fullURI = "http://readbroccoli.com:8080/broccolistudents/" + restURI;
  var response = await fetch(fullURI, {
    method: restMethod,
    headers: authHeaders,
    body: restBody
  });
  return response;
}
