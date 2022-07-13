// import { Controller, Get, Header } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// mydomain.com/
@Controller()
export class AppController {
  // dependency Injection
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // @Get()
  // @Header('Content-Type', 'text/html')
  // getHello(): {name: string} {
  //   return {name: 'Agbesanwa'};
  // }
}

// // mydomain.com/products/users
// @Controller('products')
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get('users')
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }
