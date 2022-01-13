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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user.entity");
const mapper_1 = require("../../../shared/mapper");
const utils_1 = require("../../../shared/utils");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(body) {
        const { firstName, lastName, email, password, birthday, role, parentId } = body;
        const userInDb = await this.repo.findOne({
            where: { email },
        });
        if (userInDb) {
            throw new common_1.HttpException('User already exist in database', common_1.HttpStatus.BAD_REQUEST);
        }
        const payload = { firstName, lastName, email, birthday, role, password };
        if (parentId) {
            const parent = await this.repo.findOne({ id: parentId });
            if (!parent) {
                throw new common_1.HttpException('Parent user do not exist.', common_1.HttpStatus.BAD_REQUEST);
            }
            payload['parent'] = parent;
        }
        const user = this.repo.create(Object.assign({}, payload));
        await this.repo.save(user);
        return (0, mapper_1.toUserDto)(user);
    }
    async getAll() {
        const users = await this.repo.find();
        return { users: users.map((user) => (0, mapper_1.toUserDto)(user)) };
    }
    async getById(id) {
        const user = await this.repo.findOne({ id });
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        }
        return (0, mapper_1.toUserDto)(user);
    }
    async findByLogin({ email, password }) {
        const user = await this.repo.findOne({ where: { email } });
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        }
        const isEqual = await (0, utils_1.comparePasswords)(user.password, password);
        if (!isEqual) {
            throw new common_1.HttpException('Invalid creadentials', common_1.HttpStatus.UNAUTHORIZED);
        }
        return user;
    }
    async update(id, body) {
        const { firstName, lastName, email, birthday, role, accountStatus } = body;
        let user = await this.repo.findOne({ where: { id } });
        if (!user) {
            throw new common_1.HttpException('Model not found', common_1.HttpStatus.NOT_FOUND);
        }
        user = Object.assign(Object.assign({}, user), { firstName: firstName ? firstName : user.firstName, lastName: lastName ? lastName : user.lastName, email: email ? email : user.email, birthday: birthday ? birthday : user.birthday });
        if (accountStatus) {
            user.accountStatus = accountStatus;
        }
        if (role) {
            user.role = role;
        }
        await this.repo.update({ id }, user);
        return (0, mapper_1.toUserDto)(user);
    }
    async delele(id) {
        const user = await this.repo.findOne({ id });
        if (!user) {
            throw new common_1.HttpException('Not exist', common_1.HttpStatus.NOT_FOUND);
        }
        await this.repo.delete({ id });
        return true;
    }
    async findByPayload({ email }) {
        const user = await this.repo.findOne({ where: { email } });
        return (0, mapper_1.toUserDto)(user);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map