import axios from "axios";
import * as express from "express";
import { macro as collectMacro } from "./module/collect";
import { macro as guestbookMacro } from "./module/guestbook_visit";
import { macro as trafficMacro } from "./module/traffic";
import { macro as stayTrafficMacro } from "./module/stay";
import { macro as mainTrafficMacro } from "./module/main_visit";

let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let fs = require('fs');
const puppeteer = require('puppeteer');
const spawn = require('child_process').spawn;

const app: express.Application = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

console.log('============== 실행 ================')

interface working {
    url: string,
    idx: number,
    traffic_idx: number,
    visit_count: number,
    link: string,
}
let browser = null;
let API_PWD = 'Qwar34Radf24%$^';
let flag:number = 1; // 0 - m, 1 - pc

(async ()=>{
    browser = process.platform != 'darwin' ?
                    await puppeteer.launch({headless: false, ignoreHTTPSErrors: true})
                    : await puppeteer.launch({headless: false, ignoreHTTPSErrors: true});

    const firstPage = await browser.newPage();

    const response = await firstPage.goto('https://m.blog.naver.com/kjsorolcl/2225472429436', {waitUntil: 'load', timeout: 15000}).catch((res) => {
                        // console.log('fails', res)
    });
    let content = await firstPage.content();
    if(content.includes('빈프레임')) {
        console.log('empty');
    }
})();


export default app;
