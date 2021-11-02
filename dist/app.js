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
var express = require("express");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var puppeteer = require('puppeteer');
var spawn = require('child_process').spawn;
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
console.log('============== 실행 ================');
var browser = null;
var API_PWD = 'Qwar34Radf24%$^';
var flag = 1; // 0 - m, 1 - pc
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstPage, response, content;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!(process.platform != 'darwin')) return [3 /*break*/, 2];
                return [4 /*yield*/, puppeteer.launch({ headless: false, ignoreHTTPSErrors: true })];
            case 1:
                _a = _b.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, puppeteer.launch({ headless: false, ignoreHTTPSErrors: true })];
            case 3:
                _a = _b.sent();
                _b.label = 4;
            case 4:
                browser = _a;
                return [4 /*yield*/, browser.newPage()];
            case 5:
                firstPage = _b.sent();
                return [4 /*yield*/, firstPage.goto('https://m.blog.naver.com/kjsorolcl/2225472429436', { waitUntil: 'load', timeout: 15000 }).catch(function (res) {
                        // console.log('fails', res)
                    })];
            case 6:
                response = _b.sent();
                return [4 /*yield*/, firstPage.content()];
            case 7:
                content = _b.sent();
                if (content.includes('빈프레임')) {
                    console.log('empty');
                }
                return [2 /*return*/];
        }
    });
}); })();
exports.default = app;
