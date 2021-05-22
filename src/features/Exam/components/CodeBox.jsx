import React from 'react';
import SyntaxHighlighter from 'react-native-syntax-highlighter'; // 2.0.0
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs'; // 7.0.1

const CodeBox = ({ code, language }) => {
  return (
    <SyntaxHighlighter
      style={atomOneDark}
      customStyle={{ padding: 20, marginTop: 24, marginBottom: 24 }}
      language={language}
      fontSize={18}
      highlighter="hljs"
    >
      {code}
    </SyntaxHighlighter>
  );
};
export default CodeBox;
