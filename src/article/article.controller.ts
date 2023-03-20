import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  createArticle(
    @Body()
    dto: CreateArticleDto,
  ) {
    return this.articleService.createArticle(dto);
  }

  @Get()
  getAllArticles() {
    return this.articleService.getAllArticles();
  }

  @Get(':id')
  getArticleById(
    @Param('id')
    id: string,
  ) {
    return this.articleService.getArticleById(id);
  }
}
