"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUserDto = exports.toCourseDto = void 0;
const toCourseDto = (data) => {
    const { id, title } = data;
    const course = { id, title };
    return course;
};
exports.toCourseDto = toCourseDto;
const toUserDto = (data) => {
    const { id, firstName, lastName, email, birthday, role, accountStatus, parent, } = data;
    const user = {
        id,
        firstName,
        lastName,
        email,
        birthday,
        role,
        accountStatus,
        parent,
    };
    return user;
};
exports.toUserDto = toUserDto;
//# sourceMappingURL=mapper.js.map