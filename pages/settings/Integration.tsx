import { Page, Card, Button, Text, Thumbnail, InlineStack } from '@shopify/polaris';
import router from 'next/router';
import React from 'react';

export default function Integrations() {
  return (
    <Page fullWidth>
      <Card>
        <InlineStack gap="200" align="start">
          {/* Left - Thumbnail */}
          <Thumbnail
            source="https://referapi.shopjar.io/assets/images/klaviyo.jpg"
            alt="Klaviyo"
            size="large"
          />

          {/* Right - Text & Button */}
          <div className="text2-integrations">
            <Text as="h1" variant="headingMd">Klaviyo</Text>
            <Text as="p" variant="bodyLg">
              Klaviyo is a leading e-commerce marketing platform, empowering businesses to create personalized email campaigns, automate customer engagement, and drive sales growth with ease.
            </Text>
            <div className="button-integrations">
              <Button size="large" variant="primary" onClick={()=> router.push('/settings/integration/klaviyo')}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                    <path d="M16.5 13.125h-5.25M3.75 13.125H1.5M16.5 4.875h-2.25M6.75 4.875H1.5M5.25 10.875h4.5c.825 0 1.5.375 1.5 1.5v1.5c0 1.125-.675 1.5-1.5 1.5h-4.5c-.825 0-1.5-.375-1.5-1.5v-1.5c0-1.125.675-1.5 1.5-1.5ZM8.25 2.625h4.5c.825 0 1.5.375 1.5 1.5v1.5c0 1.125-.675 1.5-1.5 1.5h-4.5c-.825 0-1.5-.375-1.5-1.5v-1.5c0-1.125.675-1.5 1.5-1.5Z" stroke="currentColor" stroke-miterlimit="10" stroke-linejoin="round"></path>
                  </svg>
                  Configure
                </span>
              </Button>
            </div>
          </div>
        </InlineStack>
      </Card>
    </Page>
  );
}
