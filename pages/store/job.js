import NextHead from 'next/head';
import { useRouter } from 'next/router';

import {
  EuiFlexGroup, EuiFlexItem,
  EuiSpacer, EuiTitle,
} from '@elastic/eui';

import {
  Layout, Job,
  Loading,
} from '@nunchistudio/blacksmith-eui';

import axios from '../../utils/axios';

const Page = (props) => {
  const meta = {
    title: 'Job',
  };

  const router = useRouter();
  const job_id = router.query.id || '';

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

      <Layout activeKey="store" {...props}>
        <EuiFlexGroup gutterSize="xl" className="wrapped">
          <EuiFlexItem grow={true}>
            <EuiTitle size="m">
              <h1>{meta.title}</h1>
            </EuiTitle>
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer size="xl" />

        <Job axios={axios} job_id={job_id} {...props} />
      </Layout>
    </>
  );
};

export default Page;
