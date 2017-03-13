// __mocks__/sound.js
'use strict';

const path = require('path');

const reactNativeSound = jest.genMockFromModule('react-native-sound');

function Sound(filePath, rootDirectory, errorCallback) {
  errorCallback();
}

Sound.play = function(){

}

Sound.pause = function(){

}

Sound.getDuration = function(){

}

Sound.getNumberOfChannels = function(){

}

reactNativeSound.__setMockFiles = __setMockFiles;

module.exports = fs;
