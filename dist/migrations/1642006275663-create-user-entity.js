"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserEntity1642006275663 = void 0;
class createUserEntity1642006275663 {
    constructor() {
        this.name = 'createUserEntity1642006275663';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`birthday\` datetime NOT NULL, \`role\` enum ('0', '1', '2', '3') NOT NULL DEFAULT '0', \`confirmationCode\` int NULL, \`accountStatus\` enum ('ACTIVATED', 'DEACTIVATED', 'BLOCKED', 'DELETED') NOT NULL DEFAULT 'DEACTIVATED', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`users\``);
    }
}
exports.createUserEntity1642006275663 = createUserEntity1642006275663;
//# sourceMappingURL=1642006275663-create-user-entity.js.map