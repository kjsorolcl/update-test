import * as express from "express";
//import AutoGitUpdate from 'auto-git-update';

let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let AutoGitUpdate = require('auto-git-update');

const app: express.Application = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

console.log('============== 실행 ================')
const config = {
    repository: 'https://github.com/kjsorolcl/update-test',
    tempLocation: 'C:/Users/scheg/Desktop/tmp/',
    ignoreFiles: ['util/config.js'],
    exitOnComplete: true
}

let browser = null;
let API_PWD = 'Qwar34Radf24%$^';
let flag:number = 1; // 0 - m, 1 - pc
const updater = new AutoGitUpdate(config);

setInterval(()=>
(async ()=>{
    console.log('test22');

    updater.autoUpdate();
})(), 5000);


export default app;
