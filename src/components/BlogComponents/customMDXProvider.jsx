// app/components/MDXProvider.js
import { MDXProvider } from '@mdx-js/react';

const components = {
  h1: (props) => <h1 className='' {...props} />,
  h2: (props) => <h2 style={{ color: 'blue' }} {...props} />,
  p: (props) => <p style={{ fontSize: '18px' }} {...props} />,
  // Add more components as needed
};

const CustomMDXProvider = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default CustomMDXProvider;
