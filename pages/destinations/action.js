import NextHead from 'next/head';
import { useRouter } from 'next/router';

import {
  EuiFlexGroup, EuiFlexItem,
  EuiSpacer, EuiTitle,
} from '@elastic/eui';

import {
  Layout, Action,
  Loading,
} from '@nunchistudio/blacksmith-eui';

import axios from '../../utils/axios';

const Page = (props) => {
  const meta = {
    title: 'Action',
  };

  const router = useRouter();
  const destination_name = router.query.destination_name || '';
  const action_name = router.query.action_name || '';

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

      <Layout activeKey="destinations" {...props}>
        <EuiFlexGroup gutterSize="xl" className="wrapped">
          <EuiFlexItem grow={true}>
            <EuiTitle size="m">
              <h1>{meta.title}</h1>
            </EuiTitle>
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer size="xl" />

        <Action axios={axios} destination_name={destination_name} action_name={action_name} {...props} />
      </Layout>
    </>
  );
};

export default Page;
