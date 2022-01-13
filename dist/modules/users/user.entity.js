"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var UserEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = exports.UserAccountStatusEnum = exports.UserRoleEnum = void 0;
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
var UserRoleEnum;
(function (UserRoleEnum) {
    UserRoleEnum[UserRoleEnum["STUDENT"] = 0] = "STUDENT";
    UserRoleEnum[UserRoleEnum["TEACHER"] = 1] = "TEACHER";
    UserRoleEnum[UserRoleEnum["ADMIN"] = 2] = "ADMIN";
    UserRoleEnum[UserRoleEnum["SUPER_ADMIN"] = 3] = "SUPER_ADMIN";
})(UserRoleEnum = exports.UserRoleEnum || (exports.UserRoleEnum = {}));
var UserAccountStatusEnum;
(function (UserAccountStatusEnum) {
    UserAccountStatusEnum[UserAccountStatusEnum["DEACTIVATED"] = 0] = "DEACTIVATED";
    UserAccountStatusEnum[UserAccountStatusEnum["ACTIVATED"] = 1] = "ACTIVATED";
    UserAccountStatusEnum[UserAccountStatusEnum["BLOCKED"] = 2] = "BLOCKED";
    UserAccountStatusEnum[UserAccountStatusEnum["DELETED"] = 3] = "DELETED";
})(UserAccountStatusEnum = exports.UserAccountStatusEnum || (exports.UserAccountStatusEnum = {}));
let UserEntity = UserEntity_1 = class UserEntity {
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: false }),
    __metadata("design:type", Date)
], UserEntity.prototype, "birthday", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: UserRoleEnum, default: UserRoleEnum.STUDENT }),
    __metadata("design:type", Number)
], UserEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', nullable: true }),
    __metadata("design:type", Number)
], UserEntity.prototype, "confirmationCode", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: UserAccountStatusEnum,
        default: UserAccountStatusEnum.DEACTIVATED,
    }),
    __metadata("design:type", Number)
], UserEntity.prototype, "accountStatus", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => UserEntity_1, (user) => user.parent),
    __metadata("design:type", UserEntity)
], UserEntity.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserEntity.prototype, "hashPassword", null);
UserEntity = UserEntity_1 = __decorate([
    (0, typeorm_1.Entity)('users')
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map