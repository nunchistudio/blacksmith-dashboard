import NextHead from 'next/head';

import {
  EuiFlexGroup, EuiFlexItem,
  EuiSpacer, EuiTitle,
} from '@elastic/eui';

import {
  Layout, Options,
} from '@nunchistudio/blacksmith-eui';

import axios from '../utils/axios';

const Page = (props) => {
  const meta = {
    title: 'Configuration',
  };

  return (
    <>
      <NextHead>
        <title>{meta.title} - Blacksmith</title>
      </NextHead>

      <Layout activeKey="options" {...props}>
        <EuiFlexGroup gutterSize="xl" className="wrapped-tight">
          <EuiFlexItem grow={true}>
            <EuiTitle size="m">
              <h1>{meta.title}</h1>
            </EuiTitle>
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer size="xl" />

        <Options axios={axios} {...props} />
      </Layout>
    </>
  );
};

export default Page;
