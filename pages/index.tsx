import isInitialLoad from "../utils/middleware/isInitialLoad";
import { useRouter } from "next/router";
import React from "react";
import {
  Page,
  Card,
  Layout,
  Button,
  Text,
  Link,
  Box,
  BlockStack,
  InlineStack,
  Icon,
} from "@shopify/polaris";
import { HeartIcon } from "@shopify/polaris-icons";
import type { NextPage } from "next";

export async function getServerSideProps(context: any) {
  //DO NOT REMOVE THIS.
  return await isInitialLoad(context);
}

const SupportPage: NextPage = () => {
  return (
    <Page>
      <BlockStack gap="500">
        <Card padding="500">
          <BlockStack gap="400">
            <Text variant="headingMd" as="h2">
              Contact our support
            </Text>
            <Text variant="bodyLg" as="p">
              We can answer your queries and assist with customizing the app to
              suit your theme.
            </Text>

            <InlineStack gap="400" align="start">
              <Button variant="secondary" size="large">
                Contact with us
              </Button>
              <Box paddingBlockStart="150">
                <Link
                  url="mailto:support@shopjar.freshdesk.com"
                  monochrome={false}
                  target="_blank"
                >
                  support@shopjar.freshdesk.com
                </Link>
              </Box>
            </InlineStack>
          </BlockStack>
        </Card>

        <Card padding="500">
          <BlockStack gap="400">
            <Text variant="headingMd" as="h2">
              Get free setup assistance
            </Text>
            <Text variant="bodyLg" as="p">
              Schedule a Zoom meeting for help with widget styling, positioning,
              cart drawer integration or any other queries.
            </Text>

            <div>
              <Button
                variant="primary"
                size="large"
                onClick={() =>
                  window.open("https://zcal.co/t/shopjar/30min", "_blank")
                }
              >
                Schedule a meeting with us
              </Button>
            </div>
          </BlockStack>
        </Card>

        <Card padding="500">
          <BlockStack gap="400">
            <Text variant="headingMd" as="h1">
              Rate the app
            </Text>
            <Text variant="bodyLg" as="p">
              Your reviews keep our small team motivated to make the app even
              better.
            </Text>

            <div>
              <Button
                variant="secondary"
                size="large"
                onClick={() =>
                  window.open(
                    "https://apps.shopify.com/referral-and-affiliates#modal-show=WriteReviewModal",
                    "_blank"
                  )
                }
                icon={<Icon source={HeartIcon} />}
              >
                Rate us on the Shopify app store
              </Button>
            </div>
          </BlockStack>
        </Card>
      </BlockStack>
    </Page>
  );
};

export default SupportPage;
