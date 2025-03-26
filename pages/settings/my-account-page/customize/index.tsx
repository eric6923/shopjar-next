import {
  Button,
  ButtonGroup,
  Icon,
  Card,
  InlineStack,
  Layout,
  LegacyCard,
  Page,
  Text,
} from "@shopify/polaris";
import { ArrowLeftIcon } from "@shopify/polaris-icons";
import router from "next/router";

export default function Customize() {
  return (
    <div>
      <div className="translation-icon">
        <Button variant="secondary" onClick={() => router.push("/settings")}>
          <Icon source={ArrowLeftIcon} tone="base" />
        </Button>
      </div>
      <div className="translation-text1">
        <Text as="h1" variant="headingLg">
          Referrer / Affiliate dashboard customizer
        </Text>
      </div>
      <div className="translation-buttongroup">
        <ButtonGroup>
          <Button size="large">Cancel</Button>
          <Button variant="primary" size="large">
            Save
          </Button>
        </ButtonGroup>
      </div>
      <Layout.Section variant="oneThird">
        <Card>

        </Card>
      </Layout.Section>

      <Layout.Section variant="oneThird">
        <Card></Card>
      </Layout.Section>
    </div>
  );
}
