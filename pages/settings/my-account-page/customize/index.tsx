import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Icon,
  InlineGrid,
  InlineStack,
  Text,
  Card,
  Box,
  Collapsible,
  TextField,
  Divider,
  UnstyledButton,
} from "@shopify/polaris";
import {
  ArrowLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ExitIcon,
} from "@shopify/polaris-icons";
import router from "next/router";

export default function Customize() {
  const [isPageTitleOpen, setIsPageTitleOpen] = useState(false);
  const [isReferralOpen, setIsReferralOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isRewardOpen, setIsRewardOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [isCustomcssOpen, setIsCustomcssOpen] = useState(false);

  const togglePageTitleCollapsible = () => {
    setIsPageTitleOpen(!isPageTitleOpen);
  };
  const toggleReferralCollapsible = () => {
    setIsReferralOpen(!isReferralOpen);
  };
  const toggleStatsCollapsible = () => {
    setIsStatsOpen(!isStatsOpen);
  };
  const toggleRewardCollapsible = () => {
    setIsRewardOpen(!isRewardOpen);
  };
  const toggleMessagesCollapsible = () => {
    setIsMessagesOpen(!isMessagesOpen);
  };
  const toggleCustomcssCollapsible = () => {
    setIsCustomcssOpen(!isCustomcssOpen);
  };

  function handleLogout() {
    alert("Logout Functionality");
  }

  return (
    <div>
      {/* Navigation and Header Section */}
      <div className="translation-icon">
        <Button variant="secondary" onClick={() => router.push("/settings")}>
          <Icon source={ArrowLeftIcon} tone="base" />
        </Button>
      </div>

      <div className="translation-text1">
        <Text as="h1" variant="headingLg">
          Referrer / Affiliate Dashboard Customizer
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

      {/* Inline Grid Section */}
      <Box padding="600" paddingBlockStart="400">
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            minHeight: "80vh",
          }}
        >
          <InlineGrid columns={["oneThird", "twoThirds"]} gap="400">
            {/* Left Box Content */}
            <Card>
              <div className="box-fixed">
                <Box padding="400">
                  <InlineStack align="space-between" blockAlign="center">
                    <Text as="p" variant="bodyLg">
                      PAGE TITLE
                    </Text>

                    <Button
                      variant="monochromePlain"
                      onClick={togglePageTitleCollapsible}
                      ariaExpanded={isPageTitleOpen}
                      size="large"
                      className="chevron-icon"
                      ariaControls="page-title-collapsible"
                    >
                      <Icon
                        source={
                          isPageTitleOpen ? ChevronUpIcon : ChevronDownIcon
                        }
                      />
                    </Button>
                  </InlineStack>

                  <Collapsible
                    open={isPageTitleOpen}
                    id="page-title-collapsible"
                    transition={{
                      duration: "500ms",
                      timingFunction: "ease-in-out",
                    }}
                    style={{ overflow: "visible" }}
                  >
                    <Box padding="400" paddingInline="400">
                      <div className="custom-textfield">
                        <TextField label="" autoComplete="off" />
                      </div>
                      <div className="custom-textfield">
                        <TextField
                          label="Referral Tab title"
                          autoComplete="off"
                        />
                      </div>
                      <div className="custom-textfield">
                        <TextField
                          label="Affiliate Tab title"
                          autoComplete="off"
                        />
                      </div>
                      <div className="custom-textfield">
                        <TextField label="Logout Text" autoComplete="off" />
                      </div>
                    </Box>
                  </Collapsible>
                </Box>
                <div className="divider">
                  <Divider />
                </div>
                <Box padding="400">
                  <InlineStack align="space-between" blockAlign="center">
                    <div className="referral-link">
                      <Text as="p" variant="bodyLg">
                        REFERRAL LINK
                      </Text>
                    </div>
                    <div className="referral-button">
                      <Button
                        variant="monochromePlain"
                        onClick={toggleReferralCollapsible}
                        ariaExpanded={isReferralOpen}
                        size="large"
                        className="chevron-icon"
                        ariaControls="page-title-collapsible"
                      >
                        <Icon
                          source={
                            isReferralOpen ? ChevronUpIcon : ChevronDownIcon
                          }
                        />
                      </Button>
                    </div>
                  </InlineStack>

                  <Collapsible
                    open={isReferralOpen}
                    id="page-title-collapsible"
                    transition={{
                      duration: "500ms",
                      timingFunction: "ease-in-out",
                    }}
                    style={{ overflow: "visible" }}
                  >
                    <Box padding="400" paddingInline="400">
                      <div className="custom-textfield">
                        <TextField
                          label="Referral link title"
                          autoComplete="off"
                        />
                      </div>
                      <div className="custom-textfield">
                        <TextField
                          label="Referral link share text"
                          autoComplete="off"
                        />
                      </div>
                    </Box>
                  </Collapsible>
                </Box>
                <Divider />
                <Box padding="400">
                  <InlineStack align="space-between" blockAlign="center">
                    <div className="referral-link">
                      <Text as="p" variant="bodyLg">
                        STATS
                      </Text>
                    </div>
                    <div className="referral-button">
                      <Button
                        variant="monochromePlain"
                        onClick={toggleStatsCollapsible}
                        ariaExpanded={isStatsOpen}
                        size="large"
                        className="chevron-icon"
                        ariaControls="page-title-collapsible"
                      >
                        <Icon
                          source={isStatsOpen ? ChevronUpIcon : ChevronDownIcon}
                        />
                      </Button>
                    </div>
                  </InlineStack>

                  <Collapsible
                    open={isStatsOpen}
                    id="page-title-collapsible"
                    transition={{
                      duration: "500ms",
                      timingFunction: "ease-in-out",
                    }}
                    style={{ overflow: "visible" }}
                  >
                    <Box padding="400" paddingInline="400">
                      <div className="custom-textfield">
                        <TextField
                          label="Total sales text"
                          autoComplete="off"
                        />
                      </div>
                      <div className="custom-textfield">
                        <TextField
                          label="Total rewards text"
                          autoComplete="off"
                        />
                      </div>
                    </Box>
                  </Collapsible>
                </Box>
                <Divider />
                <Box padding="400">
                  <InlineStack align="space-between" blockAlign="center">
                    <div className="referral-link">
                      <Text as="p" variant="bodyLg">
                        REWARD HISTORY
                      </Text>
                    </div>
                    <div className="referral-button">
                      <Button
                        variant="monochromePlain"
                        onClick={toggleRewardCollapsible}
                        ariaExpanded={isRewardOpen}
                        size="large"
                        className="chevron-icon"
                        ariaControls="page-title-collapsible"
                      >
                        <Icon
                          source={
                            isRewardOpen ? ChevronUpIcon : ChevronDownIcon
                          }
                        />
                      </Button>
                    </div>
                  </InlineStack>

                  <Collapsible
                    open={isRewardOpen}
                    id="page-title-collapsible"
                    transition={{
                      duration: "500ms",
                      timingFunction: "ease-in-out",
                    }}
                    style={{ overflow: "visible" }}
                  >
                    <Box padding="400" paddingInline="400">
                      <div className="custom-textfield">
                        <TextField label="Title" autoComplete="off" />
                      </div>
                      <div className="custom-textfield">
                        <TextField label="Date header" autoComplete="off" />
                      </div>
                      <div className="custom-textfield">
                        <TextField label="Customer header" autoComplete="off" />
                      </div>
                      <div className="custom-textfield">
                        <TextField
                          label="Order Value header"
                          autoComplete="off"
                        />
                      </div>
                      <div className="custom-textfield">
                        <TextField
                          label="Commission header"
                          autoComplete="off"
                        />
                      </div>
                      <div className="custom-textfield">
                        <TextField label="Status header" autoComplete="off" />
                      </div>
                      <div className="custom-textfield">
                        <TextField label="No rewards yet" autoComplete="off" />
                      </div>
                    </Box>
                  </Collapsible>
                </Box>
                <Divider />
                <Box padding="400">
                  <InlineStack align="space-between" blockAlign="center">
                    <div className="referral-link">
                      <Text as="p" variant="bodyLg">
                        MESSAGES
                      </Text>
                    </div>
                    <div className="referral-button">
                      <Button
                        variant="monochromePlain"
                        onClick={toggleMessagesCollapsible}
                        ariaExpanded={isMessagesOpen}
                        size="large"
                        className="chevron-icon"
                        ariaControls="page-title-collapsible"
                      >
                        <Icon
                          source={
                            isMessagesOpen ? ChevronUpIcon : ChevronDownIcon
                          }
                        />
                      </Button>
                    </div>
                  </InlineStack>

                  <Collapsible
                    open={isMessagesOpen}
                    id="page-title-collapsible"
                    transition={{
                      duration: "500ms",
                      timingFunction: "ease-in-out",
                    }}
                  >
                    <Box padding="400" paddingInline="400">
                      <div className="custom-textfield">
                        <TextField
                          label="Member blocked message"
                          autoComplete="off"
                        />
                      </div>
                      <div className="custom-textfield">
                        <TextField
                          label="Member programs disabled message"
                          autoComplete="off"
                        />
                      </div>
                    </Box>
                  </Collapsible>
                </Box>
                <Divider />
                <Box padding="400">
                  <InlineStack align="space-between" blockAlign="center">
                    <div className="referral-link">
                      <Text as="p" variant="bodyLg">
                        CUSTOM CSS
                      </Text>
                    </div>
                    <div className="referral-button">
                      <Button
                        variant="monochromePlain"
                        onClick={toggleCustomcssCollapsible}
                        ariaExpanded={isCustomcssOpen}
                        size="large"
                        className="chevron-icon"
                        ariaControls="page-title-collapsible"
                      >
                        <Icon
                          source={
                            isCustomcssOpen ? ChevronUpIcon : ChevronDownIcon
                          }
                        />
                      </Button>
                    </div>
                  </InlineStack>

                  <Collapsible
                    open={isCustomcssOpen}
                    id="page-title-collapsible"
                    transition={{
                      duration: "500ms",
                      timingFunction: "ease-in-out",
                    }}
                  >
                    <Box padding="400" paddingInline="400">
                      <div className="custom-textfield-customcss">
                        <TextField label="Custom css" autoComplete="off" />
                      </div>
                    </Box>
                  </Collapsible>
                </Box>
              </div>
            </Card>

            {/* Right Box Content (Dashboard Always Visible) */}
            <Card>
              <Box padding="400">
                <Text as="h2" variant="headingLg">
                  Referral Dashboard
                </Text>
                  <div className="logout-icon">
                <Icon source={ExitIcon} tone="base" />
                </div>
                <div className="logout-text">
                <Text as="p" variant="bodyLg">
                  Logout
                </Text>
                </div>

                {/* Dashboard content remains fully visible */}
                <Box padding="400"></Box>
              </Box>
            </Card>
          </InlineGrid>
        </div>
      </Box>
    </div>
  );
}
