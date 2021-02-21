import json2md from 'json2md';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { View } from 'react-native';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const renderers = {
  code: ({ language, value }) => {
    return (
      <View>
        <SyntaxHighlighter
          style={dracula}
          language={language}
          children={value}
          customStyle={{ margin: 0, fontSize: 14, borderRadius: 0 }}
        />
      </View>
    );
  },
};
const Question = ({ content }) => {
  return <ReactMarkdown renderers={renderers} children={json2md(content)} />;
};
export default Question;
