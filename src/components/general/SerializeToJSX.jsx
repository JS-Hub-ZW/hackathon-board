import React, { Fragment } from 'react';
import escapeHTML from 'escape-html';
import { Text } from 'slate';

export const SerializeToJSX = (children) => Array.from(children).map((node, i) => {
  if (Text.isText(node)) {
    let text = <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />;

    if (node.bold) {
      text = (
        <strong key={i}>
          {text}
        </strong>
      );
    }

    if (node.code) {
      text = (
        <code key={i}>
          {text}
        </code>
      );
    }

    if (node.italic) {
      text = (
        <em key={i}>
          {text}
        </em>
      );
    }

    // Handle other leaf types here...

    return (
      <Fragment key={i}>
        {text}
      </Fragment>
    );
  }

  if (!node) {
    return null;
  }

  switch (node.type) {
    case 'h1':
      return (
        <h1 key={i}>
          {SerializeToJSX(node.children)}
        </h1>
      );
    // Iterate through all headings here...
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
        <a
          href={escapeHTML(node.url)}
          key={i}
        >
          {SerializeToJSX(node.children)}
        </a>
      );

    default:
      return (
        <p key={i}>
          {SerializeToJSX(node.children)}
        </p>
      );
  }
});