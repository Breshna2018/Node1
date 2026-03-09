import { FileGeneratedService } from './file-generated.service';
import { Controller, Get } from '@nestjs/common';


@Controller('file-generated')
export class FileGeneratedController {
    constructor(
  private readonly fileGeneratedService: FileGeneratedService
) {}

@Get()
async findAll() {
  return this.fileGeneratedService.getData();
}
}
