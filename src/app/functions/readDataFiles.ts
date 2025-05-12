import fs from 'fs';
import path from 'path';

export default async function readDataFiles(slug:string){

    const filePath = path.join(process.cwd(),"src/data",`${slug}.json`);
    if(!fs.existsSync(filePath)) return null;

    const content = fs.readFileSync(filePath,'utf-8');

    return JSON.parse(content)
    
}