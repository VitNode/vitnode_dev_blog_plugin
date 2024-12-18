'use server';

import { revalidatePath } from 'next/cache';
import {
  CategoryBlog,
  CreateCategoriesAdminBlogBody,
} from 'shared/blog/categories';
import { fetcher } from 'vitnode-frontend/api/fetcher';

export const createMutationApi = async (
  body: CreateCategoriesAdminBlogBody,
) => {
  try {
    await fetcher<CategoryBlog, CreateCategoriesAdminBlogBody>({
      url: '/admin/blog/categories',
      method: 'POST',
      body: body,
    });
  } catch (err) {
    const error = err as Error;
    if (error.message.includes('CATEGORY_ALREADY_EXISTS')) {
      return { message: 'CATEGORY_ALREADY_EXISTS' };
    }

    return { message: 'INTERNAL_SERVER_ERROR' };
  }

  revalidatePath('/[locale]/admin/(auth)/blog/articles', 'layout');
  revalidatePath('/[locale]/admin/(auth)/blog/categories', 'page');
};
