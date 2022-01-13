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
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mapper_1 = require("../../../shared/mapper");
const typeorm_2 = require("typeorm");
const course_entity_1 = require("../course.entity");
let CourseService = class CourseService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(body) {
        const { title } = body;
        const course = this.repo.create({ title });
        await this.repo.save(course);
        return (0, mapper_1.toCourseDto)(course);
    }
    async getAll() {
        const courses = await this.repo.find();
        return {
            courses: courses.map((course) => (0, mapper_1.toCourseDto)(course)),
        };
    }
    async getById(id) {
        const course = await this.repo.findOne({ where: { id } });
        if (!course) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        return (0, mapper_1.toCourseDto)(course);
    }
    async update(id, body) {
        const { title } = body;
        let course = await this.repo.findOne({ where: { id } });
        if (!course) {
            throw new common_1.HttpException('Model not found', common_1.HttpStatus.NOT_FOUND);
        }
        course = Object.assign(Object.assign({}, course), { title });
        await this.repo.update({ id }, course);
        return course;
    }
    async delele(id) {
        const course = await this.repo.findOne({ id });
        if (!course) {
            throw new common_1.HttpException('Not exist', common_1.HttpStatus.NOT_FOUND);
        }
        await this.repo.delete({ id });
        return true;
    }
};
CourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(course_entity_1.CourseEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CourseService);
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map