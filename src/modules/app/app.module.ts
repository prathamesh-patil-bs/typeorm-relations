import * as path from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        return {
          type: 'mysql',
          autoLoadEntities: true,
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          database: configService.get('DB_NAME'),
          username: configService.get('DB_USER'),
          password: configService.get('DB_PASSWORD'),
        };
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      sortSchema: true,
      driver: ApolloDriver,
      autoSchemaFile: path.join(
        process.cwd(),
        'src',
        'graphql',
        'schema.graphql',
      ),
      autoTransformHttpErrors: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
