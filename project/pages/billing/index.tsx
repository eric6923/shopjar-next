import React from "react";
import {
  Page,
  Card,
  Layout,
  Button,
  Text,
  List,
  BlockStack,
  InlineStack,
  Icon,
  Box,
  Divider,
} from "@shopify/polaris";
import { StarIcon } from "@shopify/polaris-icons";
import type { NextPage } from "next";

const BillingPage: NextPage = () => {
  return (
    <Page fullWidth>
      <Box
        paddingBlockStart="800"
        paddingBlockEnd="800"
        paddingInlineStart="800"
        paddingInlineEnd="800"
      >
        <Layout>
          <Layout.Section variant="oneThird">
            <Card>
              <Box paddingBlockStart="800" paddingBlockEnd="800">
                <BlockStack gap="800">
                  <BlockStack gap="400" align="center">
                    <Text
                      variant="headingLg"
                      as="h2"
                      alignment="center"
                      fontWeight="semibold"
                    >
                      ESSENTIAL
                    </Text>
                    <Text
                      variant="heading3xl"
                      as="p"
                      alignment="center"
                      fontWeight="bold"
                    >
                      $7
                      <Text as="span" variant="bodyMd" fontWeight="bold">
                        /month.
                      </Text>
                    </Text>
                  </BlockStack>

                  <Box
                    paddingBlockStart="400"
                    paddingBlockEnd="400"
                    paddingInlineStart="2400"
                    paddingInlineEnd="2400"
                  >
                    <InlineStack align="center">
                      <List type="bullet" gap="loose">
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Customer Referrals
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Unique referral links
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Unlimited members
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Unlimited orders
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Unlimited rewards
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Landing Page
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Post purchase popup
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Email Notifications
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Referral popup widget
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Email Support
                          </Text>
                        </List.Item>
                        <Box opacity="0">
                          <List.Item>
                            <Text as="p" variant="bodyLg">
                              Placeholder
                            </Text>
                          </List.Item>
                        </Box>
                      </List>
                    </InlineStack>
                  </Box>
                </BlockStack>
              </Box>

              <Box
                paddingBlockStart="500"
                paddingBlockEnd="500"
                paddingInlineStart="400"
                paddingInlineEnd="400"
              >
                <InlineStack align="center">
                  <Button
                    variant="primary"
                    size="large"
                    icon={<Icon source={StarIcon} />}
                  >
                    Upgrade to Essential
                  </Button>
                </InlineStack>
              </Box>
            </Card>
          </Layout.Section>

          <Layout.Section variant="oneThird">
            <Card>
              <Box paddingBlockStart="800" paddingBlockEnd="800">
                <BlockStack gap="800">
                  <BlockStack gap="400" align="center">
                    <Text
                      variant="headingLg"
                      as="h2"
                      alignment="center"
                      fontWeight="semibold"
                    >
                      STARTER
                    </Text>
                    <Text
                      variant="heading3xl"
                      as="p"
                      alignment="center"
                      fontWeight="bold"
                    >
                      $12
                      <Text as="span" variant="bodyMd" fontWeight="bold">
                        /month.
                      </Text>
                    </Text>
                  </BlockStack>

                  <Box
                    paddingBlockStart="400"
                    paddingBlockEnd="400"
                    paddingInlineStart="2400"
                    paddingInlineEnd="400"
                  >
                    <InlineStack align="center">
                      <List type="bullet" gap="loose">
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Features in free +
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Affiliate Marketing
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Unlimited Affiliates
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Unique Affiliate Links & Coupons
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Affiliate Sign up form
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Affiliate Portal
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Passwordless Login
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Tiered Commissions & Rules
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Payouts
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Email Notifications
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Priority Email Support
                          </Text>
                        </List.Item>
                      </List>
                    </InlineStack>
                  </Box>
                </BlockStack>
              </Box>

              <Box
                paddingBlockStart="500"
                paddingBlockEnd="500"
                paddingInlineStart="1000"
                paddingInlineEnd="400"
              >
                <InlineStack align="center">
                  <Button
                    variant="primary"
                    size="large"
                    icon={<Icon source={StarIcon} />}
                  >
                    Upgrade to Starter
                  </Button>
                </InlineStack>
              </Box>
            </Card>
          </Layout.Section>

          <Layout.Section variant="oneThird">
            <Card>
              <Box paddingBlockStart="800" paddingBlockEnd="800">
                <BlockStack gap="800">
                  <BlockStack gap="400" align="center">
                    <Text
                      variant="headingLg"
                      as="h2"
                      alignment="center"
                      fontWeight="semibold"
                    >
                      GROWTH
                    </Text>
                    <Text
                      variant="heading3xl"
                      as="p"
                      alignment="center"
                      fontWeight="bold"
                    >
                      $29
                      <Text as="span" variant="bodyMd" fontWeight="bold">
                        /month.
                      </Text>
                    </Text>
                  </BlockStack>

                  <Box
                    paddingBlockStart="400"
                    paddingBlockEnd="400"
                    paddingInlineStart="2400"
                    paddingInlineEnd="2400"
                  >
                    <InlineStack align="center">
                      <List type="bullet" gap="loose">
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Everything in Starter +
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            PayPal Payouts
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Automated / Scheduled Payouts via PayPal
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Tremendous GiftCard Payouts
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Anti fraud Detection
                          </Text>
                        </List.Item>
                        <List.Item>
                          <Text as="p" variant="bodyLg">
                            Free Setup & Onboarding (worth $100)
                          </Text>
                        </List.Item>
                        <Box opacity="0">
                          <List.Item>
                            <Text as="p" variant="bodyLg">
                              Placeholder
                            </Text>
                          </List.Item>
                        </Box>
                        <Box opacity="0">
                          <List.Item>
                            <Text as="p" variant="bodyLg">
                              Placeholder
                            </Text>
                          </List.Item>
                        </Box>
                        <Box opacity="0">
                          <List.Item>
                            <Text as="p" variant="bodyLg">
                              Placeholder
                            </Text>
                          </List.Item>
                        </Box>
                        
                      </List>
                    </InlineStack>
                  </Box>
                </BlockStack>
              </Box>

              <Box
                paddingBlockStart="500"
                paddingBlockEnd="500"
                paddingInlineStart="400"
                paddingInlineEnd="400"
              >
                <InlineStack align="center">
                  <Button
                    variant="primary"
                    size="large"
                    icon={<Icon source={StarIcon} />}
                  >
                    Upgrade to Growth
                  </Button>
                </InlineStack>
              </Box>
            </Card>
          </Layout.Section>
        </Layout>
      </Box>
    </Page>
  );
};

export default BillingPage;
