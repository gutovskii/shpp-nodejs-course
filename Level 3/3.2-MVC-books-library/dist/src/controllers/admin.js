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
exports.adminLogout = exports.getAdminPage = void 0;
var books_1 = require("../services/books");
var getQsParamsForBooks_1 = require("../utils/getQsParamsForBooks");
var getAdminPage = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var booksPerPage, fields, qsParams, booksData, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                booksPerPage = 6;
                fields = ['books.book_id', 'books.title', 'books.year_of_publication', 'books.pages', 'books.clicked', 'books.wishful', 'GROUP_CONCAT(CONCAT(" ", authors.author_name)) AS authorsNames'];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                qsParams = (0, getQsParamsForBooks_1.getQsParamsForBooks)(req.query);
                return [4 /*yield*/, (0, books_1.getBooksPerPageService)(Object.assign({}, qsParams), fields, booksPerPage)];
            case 2:
                booksData = _a.sent();
                return [2 /*return*/, res.render('admin-page/admin', {
                        booksDataPerPage: booksData.booksDataPerPage,
                        booksDataLength: booksData.booksDataLength,
                        pageQuantity: booksData.pageQuantity,
                        booksPerPage: booksPerPage,
                        qsParams: qsParams
                    })];
            case 3:
                error_1 = _a.sent();
                return [2 /*return*/, res.json({ error: error_1 })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getAdminPage = getAdminPage;
var adminLogout = function (req, res) {
    try {
        return res.status(401).end();
    }
    catch (error) {
        return res.json({ error: error });
    }
};
exports.adminLogout = adminLogout;
