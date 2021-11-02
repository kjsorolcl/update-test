"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.macro = void 0;
var axios_1 = require("axios");
var puppeteer = require('puppeteer');
var browser = null;
var API_PWD = 'Qwar34Radf24%$^';
function macro(apiURL, serverName, bHeadless, delay, chromePath, maxTabNumber, bURLLoading, stayMinMs, stayMaxMs) {
    return __awaiter(this, void 0, void 0, function () {
        var firstPage, pages, _a, res, array_1, cnt_1, i_1, i_2, firstURL_1, orgURL_1, res2, e_1, response, e_2, i;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    firstPage = null;
                    pages = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 23, , 30]);
                    console.log('server - ' + serverName);
                    return [4 /*yield*/, (0, axios_1.default)({
                            url: apiURL + '/pc',
                            method: 'POST',
                            data: {
                                server: serverName
                            }
                        })];
                case 2:
                    _b.sent();
                    if (!!browser) return [3 /*break*/, 7];
                    if (!(process.platform != 'darwin')) return [3 /*break*/, 4];
                    return [4 /*yield*/, puppeteer.launch({ headless: bHeadless, ignoreHTTPSErrors: true, executablePath: chromePath })];
                case 3:
                    _a = _b.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, puppeteer.launch({ headless: bHeadless, ignoreHTTPSErrors: true })];
                case 5:
                    _a = _b.sent();
                    _b.label = 6;
                case 6:
                    browser = _a;
                    _b.label = 7;
                case 7: return [4 /*yield*/, (0, axios_1.default)({
                        url: apiURL + "/working-url?type=1"
                    })];
                case 8:
                    res = _b.sent();
                    array_1 = res.data.data;
                    if (array_1 == undefined) {
                        // browser.close();
                        macro(apiURL, serverName, bHeadless, delay, chromePath, maxTabNumber, bURLLoading, stayMinMs, stayMaxMs);
                        return [2 /*return*/];
                    }
                    cnt_1 = 0;
                    i_1 = 0;
                    console.log("체류트래픽 작업블로그 갯수 - " + array_1.length);
                    if (!(array_1.length === 0)) return [3 /*break*/, 14];
                    i_2 = 0;
                    _b.label = 9;
                case 9:
                    if (!(i_2 < pages.length)) return [3 /*break*/, 12];
                    if (!!pages[i_2].isClosed()) return [3 /*break*/, 11];
                    return [4 /*yield*/, pages[i_2].bringToFront()];
                case 10:
                    _b.sent();
                    _b.label = 11;
                case 11:
                    i_2++;
                    return [3 /*break*/, 9];
                case 12: return [4 /*yield*/, sleep(5000)];
                case 13:
                    _b.sent();
                    macro(apiURL, serverName, bHeadless, delay, chromePath, maxTabNumber, bURLLoading, stayMinMs, stayMaxMs);
                    return [3 /*break*/, 22];
                case 14:
                    firstURL_1 = '';
                    orgURL_1 = '';
                    _b.label = 15;
                case 15:
                    _b.trys.push([15, 17, , 18]);
                    return [4 /*yield*/, (0, axios_1.default)({
                            url: apiURL + '/random-post'
                        })];
                case 16:
                    res2 = _b.sent();
                    orgURL_1 = res2.data.url;
                    firstURL_1 = 'https://m.blog.naver.com/' + orgURL_1.split('naver.com/')[1];
                    return [3 /*break*/, 18];
                case 17:
                    e_1 = _b.sent();
                    console.log(e_1);
                    return [3 /*break*/, 18];
                case 18:
                    console.log('firstURL - ' + firstURL_1);
                    return [4 /*yield*/, browser.newPage()];
                case 19:
                    firstPage = _b.sent();
                    return [4 /*yield*/, clearCookie(firstPage)];
                case 20:
                    _b.sent();
                    return [4 /*yield*/, firstPage.goto(firstURL_1, { waitUntil: 'load', timeout: 15000 }).catch(function (res) {
                            // console.log('fails', res)
                        })];
                case 21:
                    response = _b.sent();
                    firstPage.content().then(function (content) {
                        if (content.includes('빈프레임')) {
                            (0, axios_1.default)({
                                url: apiURL + '/post-url',
                                method: 'DELETE',
                                data: { url: orgURL_1, key: API_PWD }
                            }).then(function (res) {
                                if (res.data.result === 1)
                                    console.log('url 삭제 - ' + orgURL_1);
                                else
                                    console.log('url 삭제 실패 - ' + res.data.error);
                            });
                        }
                    });
                    array_1.forEach(function (working) {
                        if (i_1 < (maxTabNumber < array_1.length ? maxTabNumber : array_1.length)) {
                            (function () { return __awaiter(_this, void 0, void 0, function () {
                                var page, randomDelay, i_3, i_4;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, browser.newPage()];
                                        case 1:
                                            page = _a.sent();
                                            //        if(cnt === 0)
                                            //            await clearCookie(page);
                                            return [4 /*yield*/, page.setRequestInterception(true)];
                                        case 2:
                                            //        if(cnt === 0)
                                            //            await clearCookie(page);
                                            _a.sent();
                                            return [4 /*yield*/, page.on('request', function (request) {
                                                    try {
                                                        if (['image', 'media', 'png', 'jpeg', 'webp'].indexOf(request.resourceType()) !== -1) {
                                                            request.abort();
                                                        }
                                                        else if (request.url().startsWith('data:image')) {
                                                            request.abort();
                                                        }
                                                        else
                                                            request.continue();
                                                    }
                                                    catch (e) {
                                                    }
                                                })];
                                        case 3:
                                            _a.sent();
                                            console.log('random url - ' + firstURL_1);
                                            if (!bURLLoading) return [3 /*break*/, 5];
                                            return [4 /*yield*/, page.goto(working.url).catch(function (res) {
                                                    // console.log('fails', res)
                                                })];
                                        case 4:
                                            _a.sent();
                                            return [3 /*break*/, 6];
                                        case 5:
                                            page.goto(working.url).catch(function (res) {
                                                // console.log('fails', res)
                                            });
                                            _a.label = 6;
                                        case 6: 
                                        // await page.waitFor(getRandomInt(100, 150));
                                        return [4 /*yield*/, (0, axios_1.default)({
                                                url: apiURL + '/visit-url',
                                                method: 'PATCH',
                                                data: {
                                                    idx: working.idx,
                                                    traffic_idx: working.traffic_idx,
                                                    type: 1
                                                }
                                            })];
                                        case 7:
                                            // await page.waitFor(getRandomInt(100, 150));
                                            _a.sent();
                                            //  console.log('이동 - '+working.url);
                                            return [4 /*yield*/, page.waitFor(delay)];
                                        case 8:
                                            //  console.log('이동 - '+working.url);
                                            _a.sent();
                                            page.content().then(function (content) {
                                                if (content.includes('게시물이 삭제')) {
                                                    (0, axios_1.default)({
                                                        url: apiURL + '/post-url',
                                                        method: 'DELETE',
                                                        data: { url: working.url, key: API_PWD }
                                                    }).then(function (res) {
                                                        if (res.data.result === 1)
                                                            console.log('url 삭제 - ' + working.url);
                                                        else
                                                            console.log('url 삭제 실패 - ' + working.url + ' - ' + res.data.error);
                                                    });
                                                }
                                            });
                                            //      await page.close();
                                            //    await page.wairFor(5000);
                                            return [4 /*yield*/, page.evaluate("document.documentElement.scrollTo({\n                            left: 0,\n                            top: document.documentElement.scrollHeight - document.documentElement.clientHeight,\n                            behavior: 'smooth'\n                          });")];
                                        case 9:
                                            //      await page.close();
                                            //    await page.wairFor(5000);
                                            _a.sent(); // 부드럽게 스크롤
                                            randomDelay = getRandomNumber(stayMinMs, stayMaxMs);
                                            pages.push(page);
                                            console.log(working.url + " - " + randomDelay / 1000 + "\uCD08 \uB300\uAE30");
                                            return [4 /*yield*/, page.waitFor(randomDelay)];
                                        case 10:
                                            _a.sent();
                                            //  console.log(`대기 끝`);
                                            cnt_1++;
                                            if (!(cnt_1 === (maxTabNumber < array_1.length ? maxTabNumber : array_1.length))) return [3 /*break*/, 21];
                                            if (!!firstPage.isClosed()) return [3 /*break*/, 12];
                                            return [4 /*yield*/, firstPage.close()];
                                        case 11:
                                            _a.sent();
                                            _a.label = 12;
                                        case 12:
                                            i_3 = 0;
                                            _a.label = 13;
                                        case 13:
                                            if (!(i_3 < pages.length)) return [3 /*break*/, 16];
                                            if (!!pages[i_3].isClosed()) return [3 /*break*/, 15];
                                            return [4 /*yield*/, pages[i_3].bringToFront()];
                                        case 14:
                                            _a.sent();
                                            _a.label = 15;
                                        case 15:
                                            i_3++;
                                            return [3 /*break*/, 13];
                                        case 16:
                                            i_4 = 0;
                                            _a.label = 17;
                                        case 17:
                                            if (!(i_4 < pages.length)) return [3 /*break*/, 20];
                                            return [4 /*yield*/, pages[i_4].close()];
                                        case 18:
                                            _a.sent();
                                            _a.label = 19;
                                        case 19:
                                            i_4++;
                                            return [3 /*break*/, 17];
                                        case 20:
                                            macro(apiURL, serverName, bHeadless, delay, chromePath, maxTabNumber, bURLLoading, stayMinMs, stayMaxMs);
                                            _a.label = 21;
                                        case 21: return [2 /*return*/];
                                    }
                                });
                            }); })();
                        }
                        i_1++;
                    });
                    _b.label = 22;
                case 22: return [3 /*break*/, 30];
                case 23:
                    e_2 = _b.sent();
                    console.log(e_2);
                    console.log('Exception 발생!');
                    if (!!firstPage.isClosed()) return [3 /*break*/, 25];
                    return [4 /*yield*/, firstPage.close()];
                case 24:
                    _b.sent();
                    _b.label = 25;
                case 25:
                    i = 0;
                    _b.label = 26;
                case 26:
                    if (!(i < pages.length)) return [3 /*break*/, 29];
                    if (!!pages[i].isClosed()) return [3 /*break*/, 28];
                    return [4 /*yield*/, pages[i].bringToFront()];
                case 27:
                    _b.sent();
                    _b.label = 28;
                case 28:
                    i++;
                    return [3 /*break*/, 26];
                case 29:
                    macro(apiURL, serverName, bHeadless, delay, chromePath, maxTabNumber, bURLLoading, stayMinMs, stayMaxMs);
                    return [3 /*break*/, 30];
                case 30: return [2 /*return*/];
            }
        });
    });
}
exports.macro = macro;
var title;
var intervalMin = '';
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
function clearCookie(page) {
    return __awaiter(this, void 0, void 0, function () {
        var client, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, page.target().createCDPSession()
                        //  const all_browser_cookies1 = (await client.send('Network.getAllCookies')).cookies;
                        //  console.log(all_browser_cookies1); // All Browser Cookies
                    ];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, client.send('Network.clearBrowserCookies')];
                case 2: 
                //  const all_browser_cookies1 = (await client.send('Network.getAllCookies')).cookies;
                //  console.log(all_browser_cookies1); // All Browser Cookies
                return [4 /*yield*/, _a.sent()];
                case 3:
                    //  const all_browser_cookies1 = (await client.send('Network.getAllCookies')).cookies;
                    //  console.log(all_browser_cookies1); // All Browser Cookies
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.log('쿠키 삭제 오류 - ' + err_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
