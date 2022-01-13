"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserEntity1642006438868 = void 0;
class createUserEntity1642006438868 {
    constructor() {
        this.name = 'createUserEntity1642006438868';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`accountStatus\` \`accountStatus\` enum ('0', '1', '2', '3') NOT NULL DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`accountStatus\` \`accountStatus\` enum ('ACTIVATED', 'DEACTIVATED', 'BLOCKED', 'DELETED') NOT NULL DEFAULT 'DEACTIVATED'`);
    }
}
exports.createUserEntity1642006438868 = createUserEntity1642006438868;
//# sourceMappingURL=1642006438868-create-user-entity.js.map