import NextHead from 'next/head';
import { useRouter } from 'next/router';

import {
  EuiFlexGroup, EuiFlexItem,
  EuiSpacer, EuiTitle,
} from '@elastic/eui';

import {
  Layout, Source,
  Loading,
} from '@nunchistudio/blacksmith-eui';

import axios from '../utils/axios';

const Page = (props) => {
  const meta = {
    title: 'Source',
  };

  const router = useRouter();
  const source_name = router.query.name || '';

  if (!router.isReady) {
    return (
      <EuiFlexGroup gutterSize="xl" className="wrapped">
        <EuiFlexItem grow={true} style={{ margin: '0 auto' }}>
          <Loading isLoading={true} />
        </EuiFlexItem>
      </EuiFlexGroup>
    );
  }

  return (
    <>
      <NextHead>
        <title>{meta.title} - Blacksmith</title>
      </NextHead>

      <Layout activeKey="sources" {...props}>
        <EuiFlexGroup gutterSize="xl" className="wrapped">
          <EuiFlexItem grow={true}>
            <EuiTitle size="m">
              <h1>{meta.title}</h1>
            </EuiTitle>
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer size="xl" />

        <Source axios={axios} source_name={source_name} {...props} />
      </Layout>
    </>
  );
};

export default Page;
