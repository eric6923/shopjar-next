import React, { ChangeEvent, useCallback, useState } from "react";
import {
  InlineGrid,
  Text,
  InlineStack,
  Card,
  Collapsible,
  Box,
  TextField,
  Button,
  Icon,
  Divider,
  ButtonGroup,
  Thumbnail,
  DropZone,
} from "@shopify/polaris";
import {
  ArrowLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@shopify/polaris-icons";
import router from "next/router";

function Index() {
  const [isChecked, setIsChecked] = useState(false);
  const [isPageTitleOpen, setIsPageTitleOpen] = useState(false);
  const [isReferralOpen, setIsReferralOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isRewardOpen, setIsRewardOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
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

  return (
    <div className="div-heading">
      <div className="translation-icon">
        <Button
          variant="secondary"
          onClick={() => router.push("/affiliate")}
          icon={ArrowLeftIcon}
        ></Button>
      </div>

      <div className="translation-text1">
            <Text as="h1" variant="headingLg">
            Customize Email Template - Notify when an affiliate earns a commission
              <label className="toggle-switch2">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <span className="slider round"></span>
              </label>
              <div className="second-toggle-text2">
              <Text as="p" variant="bodyLg">
                {isChecked ? "Live" : "Draft"}
              </Text>
              </div>
            </Text>
            
          </div>

      <div className="translation-buttongroup">
        <ButtonGroup>
          <Button size="large">Reset</Button>
          <Button variant="primary" size="large">
            Save
          </Button>
        </ButtonGroup>
      </div>
      <InlineGrid columns={["oneThird", "twoThirds"]}>
        <div className="card1">
          <Card>
            <Box padding="400">
              <InlineStack align="space-between" blockAlign="center">
                <Text as="p" variant="bodyLg">
                  IMAGE URL
                </Text>

                <Button
                  variant="monochromePlain"
                  onClick={togglePageTitleCollapsible}
                  ariaExpanded={isPageTitleOpen}
                  size="large"
                  ariaControls="page-title-collapsible"
                  icon={isPageTitleOpen ? ChevronUpIcon : ChevronDownIcon}
                ></Button>
              </InlineStack>

              <Collapsible
                open={isPageTitleOpen}
                id="page-title-collapsible"
                transition={{
                  duration: "500ms",
                  timingFunction: "ease-in-out",
                }}
                // style={{ overflow: "visible" }}
              >
                <Box padding="400" paddingInline="400">
                  <div className="custom-textfield">
                    <TextField label="Image URL" autoComplete="off" />
                    <div className="email-text1">
                      <Text as="p" variant="bodyLg">
                        Acceptable file types: JPG, PNG, JPEG
                      </Text>
                    </div>
                  </div>
                  <div className="email-btn">
                    <Button variant="primary">Upload Image</Button>
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
                    SUBJECT
                  </Text>
                </div>
                <div className="referral-button">
                  <Button
                    variant="monochromePlain"
                    onClick={toggleStatsCollapsible}
                    ariaExpanded={isStatsOpen}
                    size="large"
                    ariaControls="page-title-collapsible"
                    icon={isStatsOpen ? ChevronUpIcon : ChevronDownIcon}
                  ></Button>
                </div>
              </InlineStack>

              <Collapsible
                open={isStatsOpen}
                id="page-title-collapsible"
                transition={{
                  duration: "500ms",
                  timingFunction: "ease-in-out",
                }}
                // style={{ overflow: "visible" }}
              >
                <Box padding="400" paddingInline="400">
                  <div className="custom-textfield">
                    <TextField label="Subject Text" autoComplete="off" />
                    <Text as="h6" variant="headingSm">
                      Short codes available
                    </Text>
                    <Text as="p">{`{{friend_name}} -> Displays friend first and last name
{{friend_first_name}} -> Displays friend first name
{{friend_last_name}} -> Displays friend last name
{{affiliate_dashboard_url}} -> Member's Account Page Url
{{affiliate_name}} -> Displays affiliates first and last name
{{affiliate_first_name}} -> Displays affiliates first name
{{affiliate_last_name}} -> Displays affiliates last name`}</Text>
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
                    TITLE
                  </Text>
                </div>
                <div className="referral-button">
                  <Button
                    variant="monochromePlain"
                    onClick={toggleReferralCollapsible}
                    ariaExpanded={isReferralOpen}
                    size="large"
                    ariaControls="referral-link-collapsible"
                    icon={isReferralOpen ? ChevronUpIcon : ChevronDownIcon}
                  ></Button>
                </div>
              </InlineStack>

              <Collapsible
                open={isReferralOpen}
                id="referral-link-collapsible"
                transition={{
                  duration: "500ms",
                  timingFunction: "ease-in-out",
                }}
              >
                <Box padding="400" paddingInline="400">
                  <div className="custom-textfield">
                    <TextField label="Title Text" autoComplete="off" />
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
                    MESSAGE
                  </Text>
                </div>
                <div className="referral-button">
                  <Button
                    variant="monochromePlain"
                    onClick={toggleRewardCollapsible}
                    ariaExpanded={isRewardOpen}
                    size="large"
                    ariaControls="page-title-collapsible"
                    icon={isRewardOpen ? ChevronUpIcon : ChevronDownIcon}
                  ></Button>
                </div>
              </InlineStack>

              <Collapsible
                open={isRewardOpen}
                id="page-title-collapsible"
                transition={{
                  duration: "500ms",
                  timingFunction: "ease-in-out",
                }}
                // style={{ overflow: "visible" }}
              >
                <Box padding="400" paddingInline="400">
                <div className="custom-textfield-desc">
                    <TextField label="Message Text" autoComplete="off" />
                    <Text as="h6" variant="headingSm">
                      Short codes available
                    </Text>
                    <Text as="p">{`{{friend_name}} -> Displays friend first and last name
{{friend_first_name}} -> Displays friend first name
{{friend_last_name}} -> Displays friend last name
{{affiliate_dashboard_url}} -> Member's Account Page Url
{{affiliate_name}} -> Displays affiliates first and last name
{{affiliate_first_name}} -> Displays affiliates first name
{{affiliate_last_name}} -> Displays affiliates last name`}</Text>
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
                    FOOTER
                  </Text>
                </div>
                <div className="referral-button">
                  <Button
                    variant="monochromePlain"
                    onClick={toggleMessagesCollapsible}
                    ariaExpanded={isMessagesOpen}
                    size="large"
                    ariaControls="page-title-collapsible"
                    icon={isMessagesOpen ? ChevronUpIcon : ChevronDownIcon}
                  ></Button>
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
                    <TextField label="Footer Text" autoComplete="off" />
                  </div>
                </Box>
              </Collapsible>
            </Box>
            <div className="divider">
              <Divider />
            </div>
          </Card>
        </div>
        <div className="card2">
          <Card>
            <div className="inner-card">
              <Card>
                <div className="card2-img">
                  <img
                    src="https://spring-referral-testing.herokuapp.com/assets/images/template/app-image.png"
                    alt="app-image"
                    width={50}
                  />
                </div>
                <div className="affiliate-card2-text1">
                  <Text as="h1" variant="headingMd">
                  You've Got A Reward
                  </Text>
                </div>
                <div className="affliate-fourth-text1">
                  <Text as="p" variant="bodyMd">
                  {`Hey {{affiliate_name}},`}
                  </Text>
                </div>
                <div className="affliate-fourth-text2">
                  <Text as="p" variant="bodyMd">
                  {`Keep referring more friends and earn more rewards`}
                  </Text>
                </div>
                <div className="affliate-fourth-text4">
                  <Text as="p" variant="bodyMd">
                  {`Your referral url : {{affiliate_url}}`}
                  </Text>
                </div>
                
              </Card>
              <div className="affliate-fourth-text5">
                <Text as="p" variant="bodyMd">Thank you for shopping with us</Text>
                </div>
            </div>
          </Card>
        </div>
      </InlineGrid>
    </div>
  );
}

export default Index;