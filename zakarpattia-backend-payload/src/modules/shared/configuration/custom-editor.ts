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
  AlignFeature
} from '@payloadcms/richtext-lexical'
import { CustomLinkFeature } from '../rich-text-features/customLink.feature'


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
  CustomLinkFeature
]