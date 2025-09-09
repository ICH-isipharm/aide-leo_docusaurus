import React from 'react';
import Layout from '@theme/Layout';

export default function Contact() {
  return (
    <Layout title="Contact support" description="Page de contact LEO">
      <div style={{padding: '2rem', maxWidth: '720px', margin: '0 auto'}}>
        <h1>Contact support</h1>
        <p>
          Besoin d’aide avec LEO ? Vous pouvez nous écrire à :
          <a href="mailto:support@tondomaine.com"> support@tondomaine.com</a>
        </p>
        <p>
          Ou consultez la <a href="/docs/faq">FAQ</a> pour les questions fréquentes.
        </p>
      </div>
    </Layout>
  );
}