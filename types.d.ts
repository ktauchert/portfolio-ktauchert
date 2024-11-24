export interface SanityImage {
  _type: string;
  asset: {
    _ref: string;
    width: string;
    height: string;
    loading: boolean;
    alt: string;
    _type: string;
  };
  alt?: string;
}

export interface SanityBlock {
  _type: string;
  _key: string;
  style?: string;
  list?: string;
  children?: SanityBlock[];
  markDefs?: {
    _key: string;
    _type: string;
    href?: string;
  }[];
  text?: string;
  asset?: {
    _ref: string;
    _type: string;
  };
}
export type Post = {
  title: string;
  slug: { current: string };
  publishedAt: string;
  category: string;
  summary: string;
  mainImage: SanityImage;
  body: SanityBlock; 
};
