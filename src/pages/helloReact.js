import React from 'react';

import Layout from '@theme/Layout';

function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',

          justifyContent: 'center',

          alignItems: 'center',

          height: '50vh',

          fontSize: '20px',
        }}>
        <h1>
          Edit <code>pages/hello.js</code> and save to reload.
        </h1>
      </div>
    </Layout>
  );
}

export default Hello;
