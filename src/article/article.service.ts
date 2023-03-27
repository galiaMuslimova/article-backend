import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist';
import { Model } from 'mongoose';
import { CreateArticleDto } from './dto/create';
import { Article } from './schemas/article.schema';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<Article>,
  ) {}

  async createArticle(dto: CreateArticleDto): Promise<Article> {
    const article = await this.articleModel.create(dto);
    return article;
  }

  async getAllArticles(): Promise<Article[]> {
    const articles = await this.articleModel.find();
    return articles;
  }

  async getArticleById(id: string): Promise<Article> {
    return await this.articleModel.findById(id);
  }
}
