import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('ProductService')
  GetProducts(@Payload() getInfo: any) {
    console.log(getInfo);

    return {
      product_id: 'balateste',
      name: 'teste',
      description: 'produto muito legal',
    };
  }
}
