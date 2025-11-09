"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarRange, UserRound } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface BlogItem {
  id: number;
  title: string;
  image: string;
  date: string;
  author: string;
  tag?: string;
  excerpt?: string;
}

const ITEMS_PER_PAGE = 6;

const BlogsListClient = ({ blogs }: { blogs: BlogItem[] }) => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const totalPages = Math.max(1, Math.ceil(blogs.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  return (
    <>
      {currentBlogs.map(({ id, title, image, date, author, excerpt }) => (
        <article className="flex flex-col gap-4 bg-card" key={id}>
          <div className="aspect-[16/9] w-full relative overflow-hidden">
            <Image src={image} alt="" fill className="object-cover" />
          </div>
          <Link href={`/blog/${id}`} className="p-5 space-y-4 group">
            <h1 className="text-2xl md:text-4xl font-bold instrument-font group-hover:underline">
              {title}
            </h1>
            <div className="flex gap-6 md:text-sm text-[10px] text-muted-foreground">
              <p className="flex items-center gap-2 whitespace-nowrap">
                <CalendarRange />{date}
              </p>
              <p className="flex items-center gap-2 whitespace-nowrap">
                <UserRound />{author}
              </p>
            </div>
            <p className="text-sm font-light text-secondary-foreground/50 line-clamp-3">
              {excerpt}
            </p>
          </Link>
        </article>
      ))}

      <div>
        <Pagination>
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious href={`/blog?page=${currentPage - 1}`} />
              </PaginationItem>
            )}

            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
              ) {
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink href={`/blog?page=${pageNumber}`} isActive={pageNumber === currentPage}>
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              } else if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationEllipsis />
                  </PaginationItem>
                );
              }
              return null;
            })}

            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext href={`/blog?page=${currentPage + 1}`} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default BlogsListClient;
