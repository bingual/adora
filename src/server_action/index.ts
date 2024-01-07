'use server';

import 'server-only';
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';

import { SignupFormTypes } from '@/types/type';
import db from '@/utils/db';

export const signup = async (formData: SignupFormTypes) => {
  const { username, password, name, email } = formData;

  const saltRound = 10; // 패스워드 자리수
  const salt = await bcrypt.genSalt(saltRound); // 패스워드 생성
  const hashedPassword = await bcrypt.hash(password.trim(), salt); // 패스워드 패턴

  await db.user.create({
    data: {
      username: username,
      name: name,
      email: email,
      password: hashedPassword,
    },
  });

  redirect('/auth/signin');
};

export const confirmUsername = async (username: string) => {
  return !!(await db.user.findFirst({
    select: {
      username: true,
    },
    where: {
      username: username,
    },
  }));
};

export const getBrandList = async (sort?: boolean) => {
  return db.brand.findMany({
    orderBy: {
      ...(sort
        ? {
            brand_name: 'asc',
          }
        : { idx: 'asc' }),
    },
    include: {
      brand_groups: true,
    },
  });
};

export const getBrandDetail = async (page: number, take: number, idx?: number, sort?: number) => {
  const [productList, productCount] = await Promise.all([
    db.product.findMany({
      take: take,
      skip: take * (page - 1),
      where: {
        ...(idx && {
          brand: {
            idx: idx,
          },
        }),
      },
      orderBy: {
        ...(sort === 0 && {
          created_at: 'desc',
        }),
        ...(sort === 1 && {
          product_name: 'asc',
        }),
        ...(sort === 2 && {
          price: 'asc',
        }),
        ...(sort === 3 && {
          price: 'desc',
        }),
        ...(sort === 4 && {
          brand_name: 'asc',
        }),
        ...(sort === 5 && {
          views: 'desc',
        }),
      },
      include: {
        brand: true,
      },
    }),
    db.product.count({
      where: {
        ...(idx && {
          brand: {
            idx: idx,
          },
        }),
      },
    }),
  ]);

  return { productList, productCount };
};

export const getProductList = async (
  page: number,
  take: number,
  option?: {
    brand_name?: string;
    product_name?: string;
    category?: string;
    stock_quantity?: number;
    limit?: number;
  },
) => {
  const { brand_name, product_name, category, stock_quantity, limit } = {
    ...option,
  };

  const [productList, productCount] = await Promise.all([
    db.product.findMany({
      take: take,
      skip: take * (page - 1),
      orderBy: {
        product_name: 'asc',
      },
      where: {
        ...(brand_name && {
          brand_name: {
            contains: brand_name,
          },
        }),
        ...(product_name && {
          product_name: {
            contains: product_name,
          },
        }),
        ...(category && {
          category: {
            contains: category,
          },
        }),
        ...(stock_quantity && {
          stock_quantity: {
            gte: stock_quantity,
          },
        }),
      },
    }),
    db.product.count({
      ...(limit && {
        take: limit,
      }),
      where: {
        ...(brand_name && {
          brand_name: {
            contains: brand_name,
          },
        }),
        ...(product_name && {
          product_name: {
            contains: product_name,
          },
        }),
        ...(category && {
          category: {
            contains: category,
          },
        }),
        ...(stock_quantity && {
          stock_quantity: {
            gte: stock_quantity,
          },
        }),
      },
    }),
  ]);

  return { productList, productCount };
};
