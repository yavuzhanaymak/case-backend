import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import environment from 'tools/environment/environment';

import { GroupModule } from './group/group.module';

import { RoleModule } from './role/role.module';
import { TotalModule } from './total/total.module';
import { LoginModule } from './login/login.module';
import { TokenMiddleware } from 'libs/middlewares/token.middleware';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'libs/guards/auth.guard';
import { UploadModule } from './upload/upload.module';
import { MulterModule } from '@nestjs/platform-express';
 import { SubcontractorModule } from './subcontractor/subcontractor.module';
import { WorkplacesModule } from './workplaces/workplaces.module';
import { TicketModule } from './ticket/ticket.module';
import { PaymentModule } from './payment/payment.module';
import { CaseModule } from './case/case.module';
@Module({
  imports: [
    UserModule,
    RoleModule,
    GroupModule,
    TotalModule,
    LoginModule,
    UploadModule,
    WorkplacesModule,
    SubcontractorModule,
    TicketModule,
    PaymentModule,
    CaseModule,
    MulterModule.register({
      dest: './uploads',
    }),
    MongooseModule.forRoot(environment.mongoUrl),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
