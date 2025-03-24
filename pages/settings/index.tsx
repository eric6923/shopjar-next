'use client'
import React, { useState } from 'react';
import {
  Page,
  Card,
  Layout,
  Tabs,
  Text,
  LegacyStack,
  Box,
  Icon,
  InlineStack,
  PageActions,
  Button
} from '@shopify/polaris';
import {  MegaphoneIcon } from '@shopify/polaris-icons';

import styles from './styles.module.css'

const SettingsPage = () => {
  const [selected, setSelected] = useState(0);

  const handleTabChange = (selectedTabIndex) => {
    setSelected(selectedTabIndex);
  };

  const tabs = [
    {
      id: 'general',
      content: 'General',
    },
    {
      id: 'email-domains',
      content: 'Email Domains',
    },
    {
      id: 'integration',
      content: 'Integration',
    },
    {
      id: 'advanced',
      content: 'Advanced',
    },
  ];

  return (
    <Page fullWidth title="Settings">
      <Card>
        <Box padding="500">
          <LegacyStack distribution="trailing">
            <PageActions
              primaryAction={
                <Button variant='primary'>Save</Button>
              }
              secondaryActions={[
                {
                  content: 'Cancel',
                },
              ]}
            />
          </LegacyStack>
        </Box>

        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted />
        
        <Box paddingInlineStart="600" paddingInlineEnd="600" paddingBlockStart="500" paddingBlockEnd="600">
          {selected === 0 && (
            <Box>
              <Box paddingBlockEnd="500">
                <Text as="h2" variant="headingMd">Manage Programs</Text>
              </Box>
              
              <Box paddingBlockEnd="500">
                <Text as="p" variant="bodyMd" color="subdued">
                  This setting allows you to enable / disable the programs globally.
                </Text>
              </Box>

              {/* <BoxGroup> */}
                <Box paddingBlockStart="400" paddingBlockEnd="400" paddingInlineStart="400" paddingInlineEnd="400" 
                  borderColor="border" borderWidth="025" borderRadius="150">
                  <InlineStack blockAlign="center" gap="500" wrap={false}>
                    <Box paddingInlineEnd="400">
                      {/* <Icon source={UserAddIcon} color="base" /> */}
                    </Box>
                    <Box fill>
                      <Text as="span" fontWeight="semibold">Referral</Text>
                    </Box>
                    <Box>
                      <label className="toggle-switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round"></span>
                      </label>
                    </Box>
                  </InlineStack>
                </Box>

                <Box paddingBlockStart="400" paddingBlockEnd="400" paddingInlineStart="400" paddingInlineEnd="400" 
                  borderColor="border" borderWidth="025" borderRadius="150">
                  <InlineStack blockAlign="center" gap="500" wrap={false}>
                    <Box paddingInlineEnd="400">
                      <Icon source={MegaphoneIcon} color="base" />
                    </Box>
                    <Box fill>
                      <Text as="span" fontWeight="semibold">Affiliate</Text>
                    </Box>
                    <Box>
                      <label className="toggle-switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round"></span>
                      </label>
                    </Box>
                  </InlineStack>
                </Box>
              {/* </BoxGroup> */}
            </Box>
          )}

          {selected === 1 && <Box><Text as="p">Email Domains content here</Text></Box>}
          {selected === 2 && <Box><Text as="p">Integration content here</Text></Box>}
          {selected === 3 && <Box><Text as="p">Advanced content here</Text></Box>}
        </Box>
      </Card>
    </Page>
  );
};

export default SettingsPage;