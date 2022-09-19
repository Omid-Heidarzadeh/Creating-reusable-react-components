import React from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

class CodeExample extends React.Component {
  render() {
    return (
      <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
        {this.props.children}
      </SyntaxHighlighter>
    );
  }
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CodeExample;
