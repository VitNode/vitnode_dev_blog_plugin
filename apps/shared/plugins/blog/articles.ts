import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { StringLanguage } from 'vitnode-shared/string-language.dto';
import { User } from 'vitnode-shared/user.dto';
import {
  PaginationObj,
  PaginationQuery,
} from 'vitnode-shared/utils/pagination.dto';

import { CategoryBlog } from './categories';

export class CreateArticlesAdminBlogBody {
  @ApiProperty()
  @ArrayMinSize(1)
  @IsArray()
  @IsNumber({}, { each: true })
  author_ids: number[];

  @ApiProperty()
  @IsNumber()
  category_id: number;

  @ApiProperty({ type: [StringLanguage] })
  @ArrayMinSize(1)
  content: StringLanguage[];

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  is_draft?: boolean;

  @ApiProperty()
  @IsString()
  slug: string;

  @ApiProperty({ type: [StringLanguage] })
  @ArrayMinSize(1)
  title: StringLanguage[];
}

export class ArticlesBlog {
  @ApiProperty({ type: [User] })
  authors: User[];

  @ApiProperty()
  category: CategoryBlog;

  @ApiProperty({ type: [StringLanguage] })
  content: StringLanguage[];

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  edited_at: Date;

  @ApiProperty()
  id: number;

  @ApiProperty()
  published_at: Date;

  @ApiProperty()
  slug: string;

  @ApiProperty({ type: [StringLanguage] })
  title: StringLanguage[];
}

export class ArticlesAdminBlog extends ArticlesBlog {
  @ApiProperty()
  is_draft: boolean;
}

export class ArticlesBlogQuery extends PaginationQuery {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  category_slug?: string;
}

export class ArticlesBlogObj extends PaginationObj {
  @ApiProperty({ type: [CategoryBlog] })
  categories: CategoryBlog[];

  @ApiProperty({ type: [ArticlesBlog] })
  edges: ArticlesBlog[];
}

export class ArticlesAdminBlogObj extends PaginationObj {
  @ApiProperty({ type: [CategoryBlog] })
  categories: CategoryBlog[];

  @ApiProperty({ type: [ArticlesAdminBlog] })
  edges: ArticlesAdminBlog[];
}
