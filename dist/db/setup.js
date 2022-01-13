"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runMigrations = exports.getDbConnection = exports.getDbConnectionOptions = void 0;
const typeorm_1 = require("typeorm");
const getDbConnectionOptions = async (name = 'default') => {
    const options = await (0, typeorm_1.getConnectionOptions)(process.env.NODE_ENV || 'development');
    return Object.assign(Object.assign({}, options), { name });
};
exports.getDbConnectionOptions = getDbConnectionOptions;
const getDbConnection = async (name = 'default') => {
    return await (0, typeorm_1.getConnection)(name);
};
exports.getDbConnection = getDbConnection;
const runMigrations = async (name = 'default') => {
    const connection = await (0, typeorm_1.getConnection)(name);
    return connection.runMigrations();
};
exports.runMigrations = runMigrations;
//# sourceMappingURL=setup.js.map