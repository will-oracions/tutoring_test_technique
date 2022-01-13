import { UserModule } from '@Users/user.module';
export declare class AppModule {
    static forRoot(connectionOptions: any): {
        module: typeof AppModule;
        imports: (import("@nestjs/common").DynamicModule | typeof UserModule)[];
        controllers: any[];
        providers: any[];
    };
}
