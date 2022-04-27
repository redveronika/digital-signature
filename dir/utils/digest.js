"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertStringToDigest = void 0;
const crypto_1 = require("crypto");
const convertStringToDigest = (string, algorithm = "sha256") => (0, crypto_1.createHash)(algorithm).update(string).digest();
exports.convertStringToDigest = convertStringToDigest;
