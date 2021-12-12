"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ocordova = void 0;
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
var colors = {
    cyan: '#8be9fd',
    pink: '#ff79c6',
    foreground: '#f8f8f2',
    yellow: '##f1fa8c'
};
var Ocordova = function () {
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column", marginTop: 1, marginBottom: 2 },
        react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
            react_1.default.createElement(ink_1.Text, { color: colors.cyan },
                "\uD83D\uDC4B Hello, I'm ",
                react_1.default.createElement(ink_1.Text, { color: colors.pink, bold: true }, "\u00D3scar C\u00F3rdova")),
            react_1.default.createElement(ink_1.Box, { flexDirection: "column", paddingLeft: 3, marginTop: 1 },
                react_1.default.createElement(ink_1.Text, { color: colors.foreground }, "I'm a Full Stack Engineer based in Mexico City"),
                react_1.default.createElement(ink_1.Box, { marginTop: 1 },
                    react_1.default.createElement(ink_1.Text, { inverse: true, color: colors.yellow },
                        "  ",
                        "Website",
                        " "),
                    react_1.default.createElement(ink_1.Text, null, ' '),
                    react_1.default.createElement(ink_1.Text, { underline: true, color: colors.yellow }, "https://ocordova.me")),
                react_1.default.createElement(ink_1.Box, null,
                    react_1.default.createElement(ink_1.Text, { inverse: true, color: colors.yellow },
                        " ",
                        "AMA Repo",
                        " "),
                    react_1.default.createElement(ink_1.Text, null, ' '),
                    react_1.default.createElement(ink_1.Text, { underline: true, color: colors.yellow }, "https://github.com/ocordova/ama"))))));
};
exports.Ocordova = Ocordova;
