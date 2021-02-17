import NextHead from 'next/head';

import {
  EuiFlexGroup, EuiFlexItem,
  EuiSpacer, EuiTitle,
} from '@elastic/eui';

import {
  Layout, Destinations,
} from '@nunchistudio/blacksmith-eui';

import axios from '../utils/axios';

const Page = (props) => {
  const meta = {
    title: 'Destinations',
  };

  return (
    <>
      <NextHead>
        <title>{meta.title} - Blacksmith</title>
      </NextHead>

      <Layout activeKey="destinations" {...props}>
        <EuiFlexGroup gutterSize="xl" className="wrapped-tight">
          <EuiFlexItem grow={true}>
            <EuiTitle size="m">
              <h1>{meta.title}</h1>
            </EuiTitle>
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer size="xl" />

        <Destinations axios={axios} {...props} />
      </Layout>
    </>
  );
};

export default Page;
