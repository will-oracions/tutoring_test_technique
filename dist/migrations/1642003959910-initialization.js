"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialization1642003959910 = void 0;
class initialization1642003959910 {
    constructor() {
        this.name = 'initialization1642003959910';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`courses\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`courses\``);
    }
}
exports.initialization1642003959910 = initialization1642003959910;
//# sourceMappingURL=1642003959910-initialization.js.map