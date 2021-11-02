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
                    return [4 /*yield*/, page.evaluate(function (className) {
                            return document.getElementsByClassName(className).length;
                        }, className)];
                case 3:
                    urlLength = _a.sent();
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
function waitLoadingTwoElement(className1, className2, page) {
    return __awaiter(this, void 0, void 0, function () {
        var cnt, urlLength;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cnt = 0;
                    urlLength = 0;
                    _a.label = 1;
                case 1:
                    if (!(urlLength === 0)) return [3 /*break*/, 6];
                    return [4 /*yield*/, page.waitFor(1000)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, page.evaluate(function (className) {
                            return document.getElementsByClassName(className).length;
                        }, className1)];
                case 3:
                    urlLength = _a.sent();
                    if (!(urlLength === 0)) return [3 /*break*/, 5];
                    return [4 /*yield*/, page.evaluate(function (className) {
                            return document.getElementsByClassName(className).length;
                        }, className2)];
                case 4:
                    urlLength = _a.sent();
                    _a.label = 5;
                case 5:
                    cnt++;
                    if (cnt === 40)
                        return [3 /*break*/, 6];
                    return [3 /*break*/, 1];
                case 6:
                    if (urlLength > 0)
                        return [2 /*return*/, true];
                    else
                        return [2 /*return*/, false];
                    return [2 /*return*/];
            }
        });
    });
}
function isCheckMax(apiURL, data) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, axios_1.default)({
                        url: apiURL + '/post-count?idx=' + data.idx
                    })];
                case 1:
                    res = _a.sent();
                    if (res.result == -2) {
                        console.log(res.error);
                        return [2 /*return*/, 1];
                    }
                    else {
                        console.log('max_flag - ' + res.data.max_flag);
                        return [2 /*return*/, res.data.max_flag];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
var browser = null;
function macro(API_URL, serverName, bHeadless, chrome_path) {
    return __awaiter(this, void 0, void 0, function () {
        var page, _a, res, blogID, data_1, e_1, i, urls, flag, e_2, flag, length_1, length_2, length_3, e_3, e_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    page = null;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 44, , 47]);
                    (0, axios_1.default)({
                        url: API_URL + '/pc',
                        method: 'POST',
                        data: {
                            server: serverName
                        }
                    });
                    if (!(browser === null)) return [3 /*break*/, 6];
                    if (!(process.platform != 'darwin')) return [3 /*break*/, 3];
                    return [4 /*yield*/, puppeteer.launch({ headless: bHeadless, ignoreHTTPSErrors: true, executablePath: chrome_path })];
                case 2:
                    _a = _b.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, puppeteer.launch({ headless: bHeadless, ignoreHTTPSErrors: true })];
                case 4:
                    _a = _b.sent();
                    _b.label = 5;
                case 5:
                    browser = _a;
                    _b.label = 6;
                case 6: return [4 /*yield*/, browser.newPage()];
                case 7:
                    page = _b.sent();
                    return [4 /*yield*/, (0, axios_1.default)({
                            url: API_URL + "/blog-traffic"
                        })];
                case 8:
                    res = _b.sent();
                    blogID = '';
                    data_1 = res.data.data[0];
                    if (!(data_1 == undefined)) return [3 /*break*/, 12];
                    return [4 /*yield*/, page.waitFor(5000)];
                case 9:
                    _b.sent();
                    if (!!page.isClosed()) return [3 /*break*/, 11];
                    return [4 /*yield*/, page.close()];
                case 10:
                    _b.sent();
                    _b.label = 11;
                case 11:
                    macro(API_URL, serverName, bHeadless, chrome_path);
                    return [2 /*return*/];
                case 12:
                    _b.trys.push([12, 13, , 16]);
                    blogID = data_1.link.split('com/')[1];
                    console.log('naver ID - ' + blogID + ' idx - ' + data_1.idx);
                    return [3 /*break*/, 16];
                case 13:
                    e_1 = _b.sent();
                    console.log('실패 - ' + data_1.link);
                    if (!!page.isClosed()) return [3 /*break*/, 15];
                    return [4 /*yield*/, page.close()];
                case 14:
                    _b.sent();
                    _b.label = 15;
                case 15:
                    macro(API_URL, serverName, bHeadless, chrome_path);
                    return [2 /*return*/];
                case 16: 
                /*  let flag = await isCheckMax(API_URL, data);
                  if(flag === 1) {
                      console.log("한도를 넘어섰습니다. 다음으로 넘어갑니다.");
                      if(!page.isClosed())
                          await page.close();
                      macro(API_URL, serverName, bHeadless, chrome_path);
                      return;
                  }*/
                /*await page.goto(`https://blog.naver.com/PostList.naver?blogId=${blogID}&categoryNo=0&from=postList`, {waitUntil: 'load', timeout: 5000}).catch((res) => {
                    console.log('fails', res);
                });*/
                return [4 /*yield*/, page.goto("https://blog.naver.com/PostList.naver?blogId=" + blogID, { waitUntil: 'load', timeout: 5000 }).catch(function (res) {
                        console.log('fails', res);
                    })];
                case 17:
                    /*  let flag = await isCheckMax(API_URL, data);
                      if(flag === 1) {
                          console.log("한도를 넘어섰습니다. 다음으로 넘어갑니다.");
                          if(!page.isClosed())
                              await page.close();
                          macro(API_URL, serverName, bHeadless, chrome_path);
                          return;
                      }*/
                    /*await page.goto(`https://blog.naver.com/PostList.naver?blogId=${blogID}&categoryNo=0&from=postList`, {waitUntil: 'load', timeout: 5000}).catch((res) => {
                        console.log('fails', res);
                    });*/
                    _b.sent();
                    // await page.waitForNavigation();
                    // await waitLoadingElement('txt', page);
                    // await page.waitFor(3000);
                    return [4 /*yield*/, waitLoadingElement('txt', page)];
                case 18:
                    // await page.waitForNavigation();
                    // await waitLoadingElement('txt', page);
                    // await page.waitFor(3000);
                    _b.sent();
                    return [4 /*yield*/, page.evaluate("document.getElementsByClassName('pcol2 _toggleTopList _returnFalse')[0].click();")];
                case 19:
                    _b.sent();
                    // await page.waitForNavigation();
                    return [4 /*yield*/, page.waitFor(3000)];
                case 20:
                    // await page.waitForNavigation();
                    _b.sent();
                    i = 0;
                    _b.label = 21;
                case 21:
                    if (!(i < 10)) return [3 /*break*/, 41];
                    _b.label = 22;
                case 22:
                    _b.trys.push([22, 25, , 26]);
                    console.log('url 불러오는 중...');
                    return [4 /*yield*/, page.evaluate(function () {
                            var array = document.getElementsByClassName('pcol2 _setTop _setTopListUrl');
                            var urls = [];
                            array.forEach(function (a) { return urls.push(a.href); });
                            return urls;
                        })];
                case 23:
                    urls = _b.sent();
                    urls.forEach(function (url) {
                        try {
                            if (url.includes('logNo')) {
                                var id = url.split('blogId=')[1].split('&')[0];
                                var num = url.split('logNo=')[1].split('&')[0];
                                url = "https://blog.naver.com/" + id + "/" + num;
                            }
                        }
                        catch (e) {
                            console.log(e);
                        }
                        (0, axios_1.default)({
                            method: 'POST',
                            url: API_URL + '/post-url',
                            data: {
                                link: url,
                                traffic_idx: data_1.idx,
                            },
                        });
                        console.log('저장된 url - ' + url);
                    });
                    return [4 /*yield*/, isCheckMax(API_URL, data_1)];
                case 24:
                    flag = _b.sent();
                    if (flag === 1) {
                        console.log("한도를 넘어섰습니다. 다음으로 넘어갑니다.");
                        return [3 /*break*/, 41];
                    }
                    if (urls.length === 0) {
                        console.log("글 목록이 존재하지 않습니다.");
                        return [3 /*break*/, 41];
                    }
                    return [3 /*break*/, 26];
                case 25:
                    e_2 = _b.sent();
                    console.log(e_2);
                    return [3 /*break*/, 26];
                case 26:
                    _b.trys.push([26, 39, , 40]);
                    return [4 /*yield*/, isCheckMax(API_URL, data_1)];
                case 27:
                    flag = _b.sent();
                    if (flag === 1) {
                        console.log("한도를 넘어섰습니다. 다음으로 넘어갑니다.");
                        return [3 /*break*/, 41];
                    }
                    if (!(i === 9)) return [3 /*break*/, 34];
                    return [4 /*yield*/, page.evaluate(function () {
                            return document.getElementsByClassName('next pcol2 _goPageTop _param(11) aggregate_click_delegate').length;
                        })];
                case 28:
                    length_1 = _b.sent();
                    if (!(length_1 >= 1)) return [3 /*break*/, 32];
                    i = 0;
                    return [4 /*yield*/, page.evaluate(function () {
                            return document.getElementsByClassName('next pcol2 _goPageTop').length;
                        })];
                case 29:
                    length_2 = _b.sent();
                    if (length_2 === 0) {
                        return [3 /*break*/, 41];
                    }
                    return [4 /*yield*/, page.evaluate("if(document.getElementsByClassName('next pcol2 _goPageTop') != undefined) \n                        document.getElementsByClassName('next pcol2 _goPageTop')[0].click();")];
                case 30:
                    _b.sent();
                    //       await page.waitForNavigation();
                    return [4 /*yield*/, page.waitFor(3000)];
                case 31:
                    //       await page.waitForNavigation();
                    _b.sent();
                    return [3 /*break*/, 33];
                case 32: return [3 /*break*/, 41];
                case 33: return [3 /*break*/, 38];
                case 34: return [4 /*yield*/, page.evaluate(function () {
                        return document.getElementsByClassName('page').length;
                    })];
                case 35:
                    length_3 = _b.sent();
                    if (length_3 <= i + 1)
                        return [3 /*break*/, 41];
                    return [4 /*yield*/, page.evaluate("if(document.getElementsByClassName('page').length > " + (i + 1) + ") \n                    document.getElementsByClassName('page')[" + (i + 1) + "].click();")];
                case 36:
                    _b.sent();
                    //    await page.waitForNavigation();
                    return [4 /*yield*/, page.waitFor(3000)];
                case 37:
                    //    await page.waitForNavigation();
                    _b.sent();
                    i++;
                    _b.label = 38;
                case 38: return [3 /*break*/, 40];
                case 39:
                    e_3 = _b.sent();
                    i++;
                    console.log(e_3);
                    return [3 /*break*/, 40];
                case 40: return [3 /*break*/, 21];
                case 41:
                    console.log("다음 작업 시작");
                    if (!!page.isClosed()) return [3 /*break*/, 43];
                    return [4 /*yield*/, page.close()];
                case 42:
                    _b.sent();
                    _b.label = 43;
                case 43:
                    macro(API_URL, serverName, bHeadless, chrome_path);
                    return [3 /*break*/, 47];
                case 44:
                    e_4 = _b.sent();
                    console.log(e_4);
                    if (!!page.isClosed()) return [3 /*break*/, 46];
                    return [4 /*yield*/, page.close()];
                case 45:
                    _b.sent();
                    _b.label = 46;
                case 46:
                    macro(API_URL, serverName, bHeadless, chrome_path);
                    return [3 /*break*/, 47];
                case 47: return [2 /*return*/];
            }
        });
    });
}
exports.macro = macro;
;
