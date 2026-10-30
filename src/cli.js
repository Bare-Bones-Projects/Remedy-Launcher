#!/usr/bin/env node
'use strict';
const {BROWSER_REPO,LAUNCHER_REPO,selectPlatform,releasesEndpoint}=require('./manifest');
const cmd=process.argv[2]||'help';
if(cmd==='help'){
 console.log('Remedy Launcher alpha CLI\nCommands: help, status, releases-url\nNo installation or updates are performed by this alpha.');
}else if(cmd==='status'){
 console.log(JSON.stringify({launcher:LAUNCHER_REPO,browser:BROWSER_REPO,platform:selectPlatform(),installerEnabled:false},null,2));
}else if(cmd==='releases-url'){
 console.log(releasesEndpoint());
}else{
 console.error('Unknown command');process.exitCode=2;
}
