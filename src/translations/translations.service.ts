import { Injectable } from '@nestjs/common';
import { CreateTranslationDto } from './dto/create-translation.dto';
import { UpdateTranslationDto } from './dto/update-translation.dto';

const fs = require('fs');
const accountTranslations = JSON.parse(fs.readFileSync('src/i18n/en/account.json'));

@Injectable()
export class TranslationsService {
  create(createTranslationDto: CreateTranslationDto) {
    return 'This action adds a new translation';
  }

  findAll() {
    const confirm = accountTranslations.en.views.account.confirm;
    return confirm;
  }

  findOne(id: number) {
    return `This action returns a #${id} translation`;
  }

  update(id: number, updateTranslationDto: UpdateTranslationDto) {
    return `This action updates a #${id} translation`;
  }

  remove(id: number) {
    return `This action removes a #${id} translation`;
  }
}
