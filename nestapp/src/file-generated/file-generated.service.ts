import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';

@Injectable()
export class FileGeneratedService {

  async getData() {
    const filePath = path.join(process.cwd(), 'data', 'demo.json');
    const fileContents = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContents);
  }

}