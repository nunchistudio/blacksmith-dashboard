import NextHead from 'next/head';

import {
  EuiFlexGroup, EuiFlexItem,
  EuiEmptyPrompt, EuiCode,
  EuiSpacer,
} from '@elastic/eui';

import {
  Layout,
} from '@nunchistudio/blacksmith-eui';

const Page = (props) => {
  const meta = {
    title: 'Migrations',
  };

  return (
    <>
      <NextHead>
        <title>{meta.title} - Blacksmith</title>
      </NextHead>

      <EuiSpacer size="xl" />

      <Layout activeKey="wanderer" {...props}>
        <EuiFlexGroup gutterSize="xl" className="wrapped">
          <EuiFlexItem grow={true}>
            <EuiEmptyPrompt iconType="visVega" iconColor={null} titleSize="xs"
              title={<h2>Work In Progress</h2>}
              body={
                <p>
                  The front-end components and user experience for the <EuiCode>wanderer</EuiCode> adapter
                  will be coming soon. We are waiting for feedback before adding new features.
                </p>
              }
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </Layout>
    </>
  );
};

export default Page;
