// src/modules/news/richTextFeatures.ts
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  HeadingFeature,
  BlocksFeature,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  OrderedListFeature,
  UnorderedListFeature,
  BlockquoteFeature,
  HorizontalRuleFeature,
  IndentFeature,
  ParagraphFeature,
  LinkFeature,
  AlignFeature
} from '@payloadcms/richtext-lexical'

import { ImageWithCaption } from '../blocks/imageWithCaption.block'
import { VideoBlock } from '../blocks/video.block'
import { GalleryBlock } from '../blocks/gallery.block'

export const customRichTextFeatures = () => [
  BlocksFeature({
    blocks: [
      ImageWithCaption,
      VideoBlock,
      GalleryBlock,
    ],
  }),
  HeadingFeature({}),
  InlineToolbarFeature(),
  FixedToolbarFeature(),
  BoldFeature(),
  ItalicFeature(),
  UnderlineFeature(),
  OrderedListFeature(),
  UnorderedListFeature(),
  BlockquoteFeature(),
  HorizontalRuleFeature(),
  IndentFeature(),
  ParagraphFeature(),
  AlignFeature(),
  LinkFeature()
]
