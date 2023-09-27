"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const sample_entity_1 = require("../sample/entities/sample.entity");
exports.default = (0, config_1.registerAs)('orm.config', () => ({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [sample_entity_1.Sample],
    synchronize: true
}));
//# sourceMappingURL=orm.config.js.map