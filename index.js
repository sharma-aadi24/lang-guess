const franc = require('franc');
const langs = require('langs');
const colors= require('colors')

const input = process.argv[2]
const langcode = franc(input)



if(langcode==='und'){
    console.log("idk what langauge is this ".red)
}
else{
    const language = langs.where("3", langcode)

console.log(`OUR BEST GUESS IS : ${language.name}`.green);
    


}