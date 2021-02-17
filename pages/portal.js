import NextHead from 'next/head';

import {
  EuiFlexGroup, EuiFlexItem,
  EuiSpacer, EuiTitle,
} from '@elastic/eui';

import {
  Layout, CustomerPortal,
} from '@nunchistudio/blacksmith-eui';

const Page = (props) => {
  const meta = {
    title: 'Nunchi Customer Portal',
  };

  return (
    <>
      <NextHead>
        <title>{meta.title} - Blacksmith</title>
      </NextHead>

      <Layout {...props}>
        <EuiFlexGroup gutterSize="xl" className="wrapped-tight">
          <EuiFlexItem grow={true}>
            <EuiTitle size="m">
              <h1>{meta.title}</h1>
            </EuiTitle>
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer size="m" />

        <EuiFlexGroup gutterSize="xl" className="wrapped-tight">
          <EuiFlexItem grow={true}>
            <CustomerPortal />
          </EuiFlexItem>
        </EuiFlexGroup>
      </Layout>
    </>
  );
};

export default Page;
