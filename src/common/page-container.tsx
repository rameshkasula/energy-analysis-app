/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */

// import { Helmet } from 'react-helmet';
import { Helmet, HelmetProvider } from "react-helmet-async";

type Props = {
  description?: string;
  children: JSX.Element | JSX.Element[];
  title?: string;
};

const PageContainer = ({ title, description, children }: Props) => (
  <HelmetProvider>
    <div>
      <Helmet>
        <title>{title} | Energy Analysis </title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </div>
  </HelmetProvider>
);

export default PageContainer;
