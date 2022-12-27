// Le fichier d'entrée de l'application qui utilise la fonction principale NestFactory pour créer une instance d'application Nest.
// Quelle que soit la plate-forme utilisée, elle expose sa propre interface d'application. Ceux-ci sont vus respectivement comme 
// NestExpressApplication et NestFastifyApplication.
// Lorsque vous transmettez un type à la NestFactory.create()méthode, l'app aura des méthodes disponibles 
// exclusivement pour cette plate-forme spécifique. Notez cependant que vous n'avez pas besoin de spécifier un type, sauf si vous souhaitez
//  réellement accéder à l'API de la plate-forme sous-jacente.


import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
   app.setGlobalPrefix('api');
    app.enableCors();
  await app.listen(8080);
}
bootstrap();
