import React from 'react';
import Markdown from 'markdown-it';

const md = new Markdown();

function MarkdownRenderer({ content }) {
  const htmlContent = content;

  return (
    <div className='markDownHolder' dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default MarkdownRenderer;
