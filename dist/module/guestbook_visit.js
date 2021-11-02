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
var fs = require('fs');
var puppeteer = require('puppeteer');
var browser = null;
function macro(apiURL, serverName, bHeadless, delay, chromePath, maxTabNumber) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, firstPage, firstURL, res2, e_1, res, array_1, cnt_1, pages_1, e_2;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 14, , 15]);
                    console.log('server - ' + serverName);
                    (0, axios_1.default)({
                        url: apiURL + '/pc',
                        method: 'POST',
                        data: {
                            server: serverName
                        }
                    });
                    if (!!browser) return [3 /*break*/, 5];
                    if (!(process.platform != 'darwin')) return [3 /*break*/, 2];
                    return [4 /*yield*/, puppeteer.launch({ headless: bHeadless, ignoreHTTPSErrors: true, executablePath: chromePath, devtools: true })];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, puppeteer.launch({ headless: bHeadless, ignoreHTTPSErrors: true, devtools: true })];
                case 3:
                    _a = _b.sent();
                    _b.label = 4;
                case 4:
                    browser = _a;
                    _b.label = 5;
                case 5: return [4 /*yield*/, browser.newPage()];
                case 6:
                    firstPage = _b.sent();
                    return [4 /*yield*/, clearCookie(firstPage)];
                case 7:
                    _b.sent();
                    firstURL = '';
                    _b.label = 8;
                case 8:
                    _b.trys.push([8, 10, , 11]);
                    return [4 /*yield*/, (0, axios_1.default)({
                            url: apiURL + '/random-post'
                        })];
                case 9:
                    res2 = _b.sent();
                    firstURL = res2.data.url;
                    return [3 /*break*/, 11];
                case 10:
                    e_1 = _b.sent();
                    console.log(e_1);
                    return [3 /*break*/, 11];
                case 11: return [4 /*yield*/, firstPage.goto(firstURL, { waitUntil: 'load', timeout: 15000 }).catch(function (res) {
                        // console.log('fails', res)
                    })];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, (0, axios_1.default)({
                            url: apiURL + "/working-url"
                        })];
                case 13:
                    res = _b.sent();
                    array_1 = res.data.data;
                    if (array_1 == undefined) {
                        // browser.close();
                        macro(apiURL, serverName, bHeadless, delay, chromePath, maxTabNumber);
                        return [2 /*return*/];
                    }
                    cnt_1 = 0;
                    console.log("작업블로그 갯수 - " + array_1.length);
                    pages_1 = [];
                    array_1.forEach(function (working) {
                        if (cnt_1 < (maxTabNumber < array_1.length ? maxTabNumber : array_1.length)) {
                            (function () { return __awaiter(_this, void 0, void 0, function () {
                                var split, url, page;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            split = working.url.split('blog.naver.com/')[1].split('/');
                                            url = 'https://m.blog.naver.com/GuestbookList.naver?blogId=' + split[0];
                                            console.log(url);
                                            return [4 /*yield*/, browser.newPage()];
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
                                                        else {
                                                            request.continue();
                                                        }
                                                    }
                                                    catch (e) {
                                                    }
                                                })];
                                        case 3:
                                            _a.sent();
                                            return [4 /*yield*/, page.goto(url).catch(function (res) {
                                                    // console.log('fails', res)
                                                })];
                                        case 4:
                                            _a.sent();
                                            // await page.waitFor(getRandomInt(100, 150));
                                            return [4 /*yield*/, page.waitFor(5000)];
                                        case 5:
                                            // await page.waitFor(getRandomInt(100, 150));
                                            _a.sent();
                                            //     await waitLoadingElementForQuery('.fix_area__BZK6Q .link__PttqU', page);
                                            return [4 /*yield*/, page.evaluate("document.querySelectorAll('.btn_50 green')[0].click();")];
                                        case 6:
                                            //     await waitLoadingElementForQuery('.fix_area__BZK6Q .link__PttqU', page);
                                            _a.sent();
                                            /*   await page.waitFor(5000);
                                                await page.keyboard.press('Tab');
                                                await page.keyboard.press('Tab');
                                                await page.keyboard.press('Tab');
                                                await page.keyboard.press('Tab');*/
                                            //  console.log('이동 - '+working.url);
                                            return [4 /*yield*/, page.waitFor(delay)];
                                        case 7:
                                            /*   await page.waitFor(5000);
                                                await page.keyboard.press('Tab');
                                                await page.keyboard.press('Tab');
                                                await page.keyboard.press('Tab');
                                                await page.keyboard.press('Tab');*/
                                            //  console.log('이동 - '+working.url);
                                            _a.sent();
                                            //      await page.close();
                                            pages_1.push(page);
                                            cnt_1++;
                                            return [2 /*return*/];
                                    }
                                });
                            }); })();
                        }
                    });
                    return [3 /*break*/, 15];
                case 14:
                    e_2 = _b.sent();
                    return [3 /*break*/, 15];
                case 15: return [2 /*return*/];
            }
        });
    });
}
exports.macro = macro;
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
function waitLoadingElement(className, page) {
    return __awaiter(this, void 0, void 0, function () {
        var cnt, urlLength;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cnt = 0;
                    urlLength = 0;
                    _a.label = 1;
                case 1:
                    if (!(urlLength === 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, page.waitFor(1000)];
                case 2:
                    _a.sent();
                    console.log('waitLoadingElement');
                    return [4 /*yield*/, page.evaluate(function (className) {
                            return document.getElementsByClassName(className).length;
                        }, className)];
                case 3:
                    urlLength = _a.sent();
                    console.log('urlLength - ' + urlLength);
                    cnt++;
                    if (cnt === 40)
                        return [3 /*break*/, 4];
                    return [3 /*break*/, 1];
                case 4:
                    if (urlLength > 0)
                        return [2 /*return*/, true];
                    else
                        return [2 /*return*/, false];
                    return [2 /*return*/];
            }
        });
    });
}
function waitLoadingElementForQuery(query, page) {
    return __awaiter(this, void 0, void 0, function () {
        var cnt, urlLength;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cnt = 0;
                    urlLength = 0;
                    _a.label = 1;
                case 1:
                    if (!(urlLength === 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, page.waitFor(300)];
                case 2:
                    _a.sent();
                    console.log('waitLoadingElement');
                    return [4 /*yield*/, page.evaluate(function (query) {
                            return document.querySelectorAll(query).length;
                        }, query)];
                case 3:
                    urlLength = _a.sent();
                    // console.log('urlLength - '+urlLength);
                    cnt++;
                    if (cnt === 40)
                        return [3 /*break*/, 4];
                    return [3 /*break*/, 1];
                case 4:
                    if (urlLength > 0)
                        return [2 /*return*/, true];
                    else
                        return [2 /*return*/, false];
                    return [2 /*return*/];
            }
        });
    });
}
