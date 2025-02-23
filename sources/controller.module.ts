import { Module } from '@nestjs/common';

import { LibreOfficeRestModule } from '@domain/libre-office/rest';
import { PuppeteerRestModule } from '@domain/puppeteer/rest';

const controllerModules = [LibreOfficeRestModule, PuppeteerRestModule];

@Module({
	imports: [...controllerModules],

	exports: [...controllerModules],
})
export class ControllerModule {}
