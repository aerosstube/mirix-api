import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';

import { GlobalExceptionFilter, RequestValidationPipe } from '@core/nest';

import { RequestStoreMiddleware, RequestStoreModule } from '@core-module/request-store';

import { ControllerModule } from './controller.module';

@Module({
	imports: [RequestStoreModule, ControllerModule],

	providers: [
		{
			provide: APP_PIPE,
			useClass: RequestValidationPipe,
		},

		{
			provide: APP_FILTER,
			useClass: GlobalExceptionFilter,
		},
	],
})
class ApplicationModule implements NestModule {
	public configure(consumer: MiddlewareConsumer): void {
		consumer.apply(RequestStoreMiddleware).forRoutes('*');
	}
}

export { ApplicationModule };
