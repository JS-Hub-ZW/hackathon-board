import React, { Fragment, ReactNode } from 'react';
import escapeHTML from 'escape-html';
import { Text } from 'slate';
import Link from 'next/link';
import { CustomNode } from '@/types/types';



export const SerializeToJSX = (children: CustomNode[]): ReactNode =>
  Array.from(children).map((node, i) => {
    if (Text.isText(node)) {
      let text = <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} key={i} />;

      if (node.bold) {
        text = <strong key={i}>{text}</strong>;
      }

      if (node.code) {
        text = <code key={i}>{text}</code>;
      }

      if (node.italic) {
        text = <em key={i}>{text}</em>;
      }

      return <Fragment key={i}>{text}</Fragment>;
    }


    if (!node || !node.children) {
      return null;
    }

    switch (node.type) {
      case 'h1':
        return (
          <h1 key={i}>
            {SerializeToJSX(node.children)}
          </h1>
        );
      case 'h6':
        return (
          <h6 key={i}>
            {SerializeToJSX(node.children)}
          </h6>
        );
      case 'quote':
        return (
          <blockquote key={i}>
            {SerializeToJSX(node.children)}
          </blockquote>
        );
      case 'ul':
        return (
          <ul key={i}>
            {SerializeToJSX(node.children)}
          </ul>
        );
      case 'ol':
        return (
          <ol key={i}>
            {SerializeToJSX(node.children)}
          </ol>
        );
      case 'li':
        return (
          <li key={i}>
            {SerializeToJSX(node.children)}
          </li>
        );
      case 'link':
        return (
          <Link href={`${escapeHTML(node.url || '')}`} key={i}>
            {SerializeToJSX(node.children)}
          </Link>
        );
      default:
        return (
          <div key={i}>
            {SerializeToJSX(node.children)}
          </div>
        );
    }
  });
