import json2md from 'json2md';
import React from 'react';
import SyntaxHighlighter from 'react-native-syntax-highlighter'; // 2.0.0
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs'; // 7.0.1

const Question = ({ question }) => {
  return (
    <SyntaxHighlighter
      style={atomOneDark}
      customStyle={{ padding: 20, marginTop: 20 }}
      language={question.code.language}
      fontSize={18}
      highlighter="hljs"
    >
      {json2md(question.code.content)}
    </SyntaxHighlighter>
  );
};
export default Question;
