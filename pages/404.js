import NextHead from 'next/head';

import {
  EuiFlexGroup, EuiFlexItem,
  EuiSpacer,
} from '@elastic/eui';

import { Loading } from '@nunchistudio/blacksmith-eui';

const Page = () => {
  const meta = {
    title: 'Resource Not Found',
  };

  return (
    <>
      <NextHead>
        <title>{meta.title} - Blacksmith</title>
      </NextHead>

      <EuiSpacer size="xl" />

      <EuiFlexGroup gutterSize="xl" className="wrapped">
        <EuiFlexItem grow={true}>
          <Loading isLoading={false} statusCode={404} />
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
};

export default Page;
