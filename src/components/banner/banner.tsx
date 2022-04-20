import Link from 'next/link';
import React from 'react';
import Image from "next/image"
import BannerImage from "@/assets/images/banner.jpg"
import { Product } from '@/types/product.types';

interface BannerProps {
  product: Product;
}

export const Banner = ({ product }: BannerProps) => {
  return (
    <div>
      <Link href={`/produto/${product.id}`}>
        <a>
          <Image
            src={BannerImage}
            alt="Banner de oferta do dia"
            width={1024}
            height={551}
            layout="responsive"
            unoptimized
          />
        </a>
      </Link>
    </div>
  );
}
