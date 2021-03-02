import NextHead from 'next/head';

import '../styles/design.scss';

function Dashboard({ Component, pageProps }) {

  let defaults = {};
  if (process.env.NODE_ENV !== 'production') {
    defaults = {
      iconNunchi: '/assets/nunchi/symbol.svg',
      iconBlacksmith: '/assets/blacksmith/symbol.svg',
      linkToPortal: '/portal',
      linkToHome: '/',
      linkToStore: '/',
      linkToEvent: '/store/event?event_id=:event_id',
      linkToJob: '/store/job?job_id=:job_id',
      linkToWanderer: '/wanderer',
      linkToSources: '/sources',
      linkToSource: '/sources/source?source_name=:source_name',
      linkToTrigger: '/sources/trigger?source_name=:source_name&trigger_name=:trigger_name',
      linkToDestinations: '/destinations',
      linkToDestination: '/destinations/destination?destination_name=:destination_name',
      linkToAction: '/destinations/action?destination_name=:destination_name&action_name=:action_name',
      linkToOptions: '/options',
    };
  }

  return (
    <>
      <NextHead>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/assets/blacksmith/favicon.ico" />
      </NextHead>

      <Component {...pageProps} {...defaults} />
    </>
  );
};

export default Dashboard;
