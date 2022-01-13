"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const setup_1 = require("./db/setup");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const PORT = process.env.PORT || 9901;
    const app = await core_1.NestFactory.create(app_module_1.AppModule.forRoot(await (0, typeorm_1.getConnectionOptions)(process.env.NODE_ENV)));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Technical test API')
        .setDescription('This is a quick documentation for the test, just to see the endpoints')
        .setVersion('1.0')
        .addTag('Test')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('doc', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(PORT);
    await (0, setup_1.runMigrations)();
    common_1.Logger.log(`Server is running on port ${PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map