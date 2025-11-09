'use server'
import React, { Suspense } from 'react';
import blogs from '@/data/blogs.json';
import BlogsListClient from '@/components/blog/BlogsListClient';

const BlogsPage = () => {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading posts…</div>}>
      <BlogsListClient blogs={blogs} />
    </Suspense>
  );
};

export default BlogsPage;