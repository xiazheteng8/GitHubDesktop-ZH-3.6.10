// Translation engine adapted from Johnserf-Seed/GitHub-Desktop-Chinese-Language-Pack (MIT).
// Rebuilds exactly the reviewed 3.6.10 payload. No third-party author link is injected.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {patch,loadDictionary}=require('./engine/generate.cjs');
const root=path.resolve(__dirname,'..');
const hash=x=>crypto.createHash('sha256').update(x).digest('hex').toUpperCase();
const app=path.resolve(process.argv[2]||'app-3.6.10/resources/app');
const destination=path.resolve(process.argv[3]||'rebuilt-zh-3.6.10');
if(destination===app||destination.startsWith(app+path.sep))throw Error('Output cannot be inside the app directory.');
const metadata=JSON.parse(fs.readFileSync(path.join(app,'package.json'),'utf8'));
if(metadata.name!=='desktop'||metadata.version!=='3.6.10')throw Error('Expected original GitHub Desktop 3.6.10.');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.json'),'utf8'));
const dictionary=loadDictionary(path.join(root,'词库.json'));
const results=[];
for(const entry of manifest.files){
 const filename=path.join(app,entry.name), original=fs.readFileSync(filename);
 if(hash(original)!==entry.original)throw Error('Original checksum mismatch: '+entry.name);
 const translated=patch(original.toString('utf8'),filename+'.map',dictionary).result;
 if(hash(translated)!==entry.patched)throw Error('Build differs from reviewed payload: '+entry.name);
 results.push([entry.name,translated]);
}
fs.mkdirSync(destination,{recursive:true});
for(const [file,content]of results)fs.writeFileSync(path.join(destination,file),content);
console.log('Reproducible build verified: '+destination);
