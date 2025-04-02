import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Icon,
  Page,
  Tabs,
  Text,
  Toast,
} from "@shopify/polaris";
import { ArrowLeftIcon } from "@shopify/polaris-icons";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import RewardClaimWidget from "./Referral";
import Referral from "./Referral";
import Affliate from "./Affliate";
import MyAccount from "./MyAccount";
export default function index() {
  const router = useRouter();
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),
    []
  );
  const tabs = [
    {
      id: "all-customers-4",
      content: "Referral",
      accessibilityLabel: "All customers",
      panelID: "all-customers-content-4",
    },
    {
      id: "accepts-marketing-4",
      content: "Affliate",
      panelID: "accepts-marketing-content-4",
    },
    {
      id: "repeat-customers-4",
      content: "MyAccount",
      panelID: "repeat-customers-content-4",
    },
  ];
  return (
    <div>
      <div className="translation-icon">
        <Button variant="secondary" onClick={() => router.push("/settings")}
          icon={ArrowLeftIcon}
          >
        </Button>
      </div>
      <div className="translation-text1">
        <Text as="h1" variant="headingLg">
          Translation
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

      <Page fullWidth>
        <Card>
          <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} />

            {selected === 0 && (
            
                <Referral/>
         
            )}
            {selected === 1 && (
            
            <Affliate/>
     
        )}
        {selected === 2 && (
            
            <MyAccount/>
     
        )}



          
        </Card>
      </Page>
    </div>
  );
}
