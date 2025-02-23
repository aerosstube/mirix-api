import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import 'reflect-metadata/lite';

import { ApplicationModule } from './application.module';

function setupOpenApi(application: INestApplication): void {
	const builder = new DocumentBuilder();
	const configuration = builder.build();
	const document = SwaggerModule.createDocument(application, configuration);

	SwaggerModule.setup('swagger', application, document);
}

async function bootstrap(): Promise<void> {
	const application = await NestFactory.create(ApplicationModule);

	setupOpenApi(application);

	await application.listen(8020);
}

bootstrap().catch((error) => {
	console.error(error);
});
