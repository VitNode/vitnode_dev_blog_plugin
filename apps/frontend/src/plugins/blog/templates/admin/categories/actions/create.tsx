'use client';

import { PlusIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';
import { Button } from 'vitnode-frontend/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'vitnode-frontend/components/ui/dialog';
import { Loader } from 'vitnode-frontend/components/ui/loader';

const Content = React.lazy(async () =>
  import('../create-edit/create-edit').then(module => ({
    default: module.CreateEditCategoryBlogAdmin,
  })),
);

export const CreateCategoryBlogAdmin = () => {
  const t = useTranslations('admin_blog.categories.create');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon /> {t('title')}
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('title')}</DialogTitle>
          <DialogDescription>{t('desc')}</DialogDescription>
        </DialogHeader>

        <React.Suspense fallback={<Loader />}>
          <Content />
        </React.Suspense>
      </DialogContent>
    </Dialog>
  );
};
