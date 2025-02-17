import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      // url: 'mongodb://localhost:27017',
      url: 'mongodb+srv://waseemm:waseem123@cluster0.j6f63.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',

      database: 'nest',
      useNewUrlParser: true,
      autoLoadEntities: true,
      synchronize: true,
    }),
    PetsModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
