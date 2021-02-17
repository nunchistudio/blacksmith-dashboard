import NextHead from 'next/head';

import {
  EuiFlexGroup, EuiFlexItem,
  EuiSpacer, EuiTitle,
} from '@elastic/eui';

import {
  Layout, Store,
} from '@nunchistudio/blacksmith-eui';

import axios from '../utils/axios';

const Page = (props) => {
  const meta = {
    title: 'Events & Jobs',
  };

  return (
    <>
      <NextHead>
        <title>{meta.title} - Blacksmith</title>
      </NextHead>

      <Layout activeKey="store" {...props}>
        <EuiFlexGroup gutterSize="xl" className="wrapped">
          <EuiFlexItem grow={true}>
            <EuiTitle size="m">
              <h1>{meta.title}</h1>
            </EuiTitle>
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer size="xl" />

        <Store axios={axios} {...props} />
      </Layout>
    </>
  );
};

export default Page;
