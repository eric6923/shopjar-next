import React, { useCallback, useState } from 'react';
import {InlineGrid, Text, InlineStack, Card, Collapsible, Box, TextField, Button, Icon, Divider, ButtonGroup, Thumbnail, DropZone} from '@shopify/polaris';
import { ArrowLeftIcon, ChevronDownIcon, ChevronUpIcon } from '@shopify/polaris-icons';
import router from 'next/router';


function Index() {
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
      
    function handleFileChange(event: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.');
    }

  return (
    <div className='div-heading'>
        <div className="translation-icon">
    <Button variant="secondary" onClick={() => router.push("/settings")}>
      <Icon source={ArrowLeftIcon} tone="base" />
    </Button>
  </div>

  <div className="translation-text1">
    <Text as="h1" variant="headingLg">
      Customize OTP Email Page
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
    <InlineGrid columns={['oneThird', 'twoThirds']}>
        <div className="card1">
        <Card label="oneThird">
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
                            className="chevron-icon"
                            ariaControls="page-title-collapsible"
                          >
                            <Icon
                              source={isPageTitleOpen ? ChevronUpIcon : ChevronDownIcon}
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
                              <TextField label="Image URL" autoComplete="off" />
                              <div className="email-text1">
                              <Text as="p" variant="bodgLg">Acceptable file types: JPG, PNG, JPEG</Text>
                              </div>
                            </div>
                            <div className="email-btn">
        <Button variant='primary'>Upload Image</Button>
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
                                                  className="chevron-icon"
                                                  ariaControls="referral-link-collapsible"
                                                >
                                                  <Icon
                                                    source={isReferralOpen ? ChevronUpIcon : ChevronDownIcon}
                                                  />
                                                </Button>
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
                                                  SUBJECT
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
                                                  <TextField label="Subject Text" autoComplete="off" />
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
                                                  className="chevron-icon"
                                                  ariaControls="page-title-collapsible"
                                                >
                                                  <Icon
                                                    source={isRewardOpen ? ChevronUpIcon : ChevronDownIcon}
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
                                                  <TextField label="Message Text" autoComplete="off" />
                                                </div>
                                                <div className="email-text">
                                                <Text as="p">
  {"{{OTP}} -> OTP verification code\n"}
  {"{{affiliate_dashboard_url}} -> Member's Account Page Url\n"}
  {"{{affiliate_name}} -> Displays referrer / affiliate first and last name\n"}
  {"{{affiliate_first_name}} -> Displays referrer / affiliate first name\n"}
  {"{{affiliate_last_name}} -> Displays referrer / affiliate last name"}
</Text>
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
                                                  className="chevron-icon"
                                                  ariaControls="page-title-collapsible"
                                                >
                                                  <Icon
                                                    source={isMessagesOpen ? ChevronUpIcon : ChevronDownIcon}
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
                                                    label="Footer Text"
                                                    autoComplete="off"
                                                  />
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
        <Card label="twoThirds">
            
        <div className="inner-card">
        <Card>
        <div className="card2-img">
            <img src="https://spring-referral-testing.herokuapp.com/assets/images/template/app-image.png" alt="app-image" width={50}/>
            </div>
            <div className="card2-text1">
            <Text as ="h1" variant='headingMd'>Verification code for your account</Text>
            </div>
            <div className="card2-text2">
            <Text as="p" variant='bodyMd'>To verify your account and access the dashboard, copy the code provided below and paste it into the verification form</Text>
            </div>
            <div className="card2-text3">
            <Text as="p" variant='bodyMd'>Verification Code: OTP</Text>
            </div>
        </Card>
        </div>
        </Card>
        </div>
    </InlineGrid>
    </div>
  );
}


export default Index;