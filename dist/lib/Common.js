"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var Common = {
    validApiKey: function (body) {
        try {
            var ret = false;
            var envKey = process.env.API_KEY;
            if (!envKey) {
                return true;
            }
            if (!body.external_api_key) {
                return ret;
            }
            if (body.external_api_key !== envKey) {
                return ret;
            }
            ret = true;
            return ret;
        }
        catch (e) {
            console.error(e);
        }
    },
};
exports.default = Common;
