'use strict';
const BROWSER_REPO='Bare-Bones-Projects/Tuna-Browser';
const LAUNCHER_REPO='Bare-Bones-Projects/Remedy-Launcher';
const API_BASE='https://api.github.com/repos/';
function selectPlatform(platform=process.platform,arch=process.arch){
  if(!['x64','arm64'].includes(arch)) throw new Error('Unsupported architecture');
  if(platform==='win32') return {os:'windows',arch,extensions:['.exe']};
  if(platform==='darwin') return {os:'macos',arch,extensions:['.dmg','.zip']};
  if(platform==='linux') return {os:'linux',arch,extensions:['.AppImage','.deb']};
  throw new Error('Unsupported operating system');
}
function releasesEndpoint(repo=BROWSER_REPO){
  if(![BROWSER_REPO,LAUNCHER_REPO].includes(repo)) throw new Error('Repository not allowed');
  return API_BASE+repo+'/releases';
}
module.exports={BROWSER_REPO,LAUNCHER_REPO,selectPlatform,releasesEndpoint};
