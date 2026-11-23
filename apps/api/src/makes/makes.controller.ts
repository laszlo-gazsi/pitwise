import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateMakeDto } from './dto/create-make.dto.js';
import { UpdateMakeDto } from './dto/update-make.dto.js';
import { MakesService } from './makes.service.js';

@Controller('makes')
export class MakesController {
  private readonly makesService: MakesService;

  constructor(makesService: MakesService) {
    this.makesService = makesService;
  }

  @Post()
  create(@Body() createMakeDto: CreateMakeDto) {
    return this.makesService.create(createMakeDto);
  }

  @Get()
  findAll() {
    return this.makesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.makesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateMakeDto: UpdateMakeDto) {
    return this.makesService.update(id, updateMakeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.makesService.remove(id);
  }
}
