"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalMigration1642039930271 = void 0;
class finalMigration1642039930271 {
    constructor() {
        this.name = 'finalMigration1642039930271';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`users\` ADD UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`users\` DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\``);
    }
}
exports.finalMigration1642039930271 = finalMigration1642039930271;
//# sourceMappingURL=1642039930271-finalMigration.js.map