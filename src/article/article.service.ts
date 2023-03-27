import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist';
import { Model } from 'mongoose';
import { CreateArticleDto } from './dto/create';
import { Article } from './schemas/article.schema';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name)
    private articleModel: Model<Article>,
  ) {}

  async createArticle(dto: CreateArticleDto): Promise<Article[]> {
    console.log('article', dto);
    const article = await this.articleModel.create(dto);
    console.log(article);
    return article;
  }

  async getAllArticles(): Promise<Article[]> {
    console.log('get');
    const articles = await this.articleModel.find();
    console.log(articles);
    return articles;
  }

  async getArticleById(id: string): Promise<Article> {
    return await this.articleModel.findById(id);
  }
}
