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
  Checkbox,
  hsbToHex,
  Popover,
  ColorPicker,
  FormLayout,
  Form,
} from "@shopify/polaris";
import {
  ArrowLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@shopify/polaris-icons";
import router from "next/router";

function Index() {
  const [verifyOtpTextPopoverActive, setVerifyOtpTextPopoverActive] =
    useState(false);
  const [isPageTitleOpen, setIsPageTitleOpen] = useState(false);
  const [isImageUrlOpen, setIsImageUrlOpen] = useState(false);
  const [isReferralOpen, setIsReferralOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isAdditionOpen, setIsAdditionOpen] = useState(false);
  const [isCustomOpen, setIsCustomOpen] = useState(false);
  const [isRewardOpen, setIsRewardOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [sendOtpBgPopoverActive, setSendOtpBgPopoverActive] = useState(false);
  
  const toggleVerifyOtpTextPopover = useCallback(
    () => setVerifyOtpTextPopoverActive((active) => !active),
    []
  );
  const toggleSendOtpBgPopover = useCallback(
    () => setSendOtpBgPopoverActive((active) => !active),
    []
  );
  const [textColor, setTextColor] = useState({
    hue: 0,
    brightness: 0.6,
    saturation: 0.7,
  });
  const [bgColor, setBgColor] = useState({
    hue: 200,
    brightness: 0.6,
    saturation: 0.7,
  });
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
  const toggleImageUrlCollapsible = () => {
    setIsImageUrlOpen(!isImageUrlOpen);
  };
  const toggleAdditionalCollapsible = () => {
    setIsAdditionOpen(!isAdditionOpen);
  };
  const toggleCustomCollapsible = () => {
    setIsCustomOpen(!isCustomOpen);
  };

  //CheckBox Handlers
  const [checked, setChecked] = useState(false);
  const handleChange = useCallback(
    (newChecked: boolean) => setChecked(newChecked),
    []
  );
  //Checkbox for Phone Label Stuff
  const [checked2, setChecked2] = useState(false);
  const handleChange2 = useCallback(
    (newChecked: boolean) => setChecked2(newChecked),
    []
  );
  //Paypal Enabled
  const [checked3, setChecked3] = useState(false);
  const handleChange3 = useCallback(
    (newChecked: boolean) => setChecked3(newChecked),
    []
  );

  //Paypal Required Fields
  const [checked4, setChecked4] = useState(false);
  const handleChange4 = useCallback(
    (newChecked: boolean) => setChecked4(newChecked),
    []
  );

  //Address Line1 Enabled and Required
  const [checked5, setChecked5] = useState(false);
  const handleChange5 = useCallback(
    (newChecked: boolean) => setChecked5(newChecked),
    []
  );
  const [checked6, setChecked6] = useState(false);
  const handleChange6 = useCallback(
    (newChecked: boolean) => setChecked6(newChecked),
    []
  );

  //Address Line2 Enabled and Required
  const [checked7, setChecked7] = useState(false);
  const handleChange7 = useCallback(
    (newChecked: boolean) => setChecked7(newChecked),
    []
  );
  const [checked8, setChecked8] = useState(false);
  const handleChange8 = useCallback(
    (newChecked: boolean) => setChecked8(newChecked),
    []
  );

  //City Enabled and Required
  const [checked9, setChecked9] = useState(false);
  const handleChange9 = useCallback(
    (newChecked: boolean) => setChecked9(newChecked),
    []
  );
  const [checked10, setChecked10] = useState(false);
  const handleChange10 = useCallback(
    (newChecked: boolean) => setChecked10(newChecked),
    []
  );

  //ZipCode Enabled and Required
  const [checked11, setChecked11] = useState(false);
  const handleChange11 = useCallback(
    (newChecked: boolean) => setChecked11(newChecked),
    []
  );
  const [checked12, setChecked12] = useState(false);
  const handleChange12 = useCallback(
    (newChecked: boolean) => setChecked12(newChecked),
    []
  );

  //Country Enabled and Required
  const [checked13, setChecked13] = useState(false);
  const handleChange13 = useCallback(
    (newChecked: boolean) => setChecked13(newChecked),
    []
  );
  const [checked14, setChecked14] = useState(false);
  const handleChange14 = useCallback(
    (newChecked: boolean) => setChecked14(newChecked),
    []
  );

  //State Enabled and Required
  const [checked15, setChecked15] = useState(false);
  const handleChange15 = useCallback(
    (newChecked: boolean) => setChecked15(newChecked),
    []
  );
  const [checked16, setChecked16] = useState(false);
  const handleChange16 = useCallback(
    (newChecked: boolean) => setChecked16(newChecked),
    []
  );

  //Website Enabled and Required - PROMOTION
  const [checked17, setChecked17] = useState(false);
  const handleChange17 = useCallback(
    (newChecked: boolean) => setChecked17(newChecked),
    []
  );
  const [checked18, setChecked18] = useState(false);
  const handleChange18 = useCallback(
    (newChecked: boolean) => setChecked18(newChecked),
    []
  );

  //Planning Enables and Required - PROMOTION
  const [checked19, setChecked19] = useState(false);
  const handleChange19 = useCallback(
    (newChecked: boolean) => setChecked19(newChecked),
    []
  );
  const [checked20, setChecked20] = useState(false);
  const handleChange20 = useCallback(
    (newChecked: boolean) => setChecked20(newChecked),
    []
  );

  //Social Media - FaceBook
  const [checked21, setChecked21] = useState(false);
  const handleChange21 = useCallback(
    (newChecked: boolean) => setChecked21(newChecked),
    []
  );
  const [checked22, setChecked22] = useState(false);
  const handleChange22 = useCallback(
    (newChecked: boolean) => setChecked22(newChecked),
    []
  );
  //Social Media - Instagram
  const [checked23, setChecked23] = useState(false);
  const handleChange23 = useCallback(
    (newChecked: boolean) => setChecked23(newChecked),
    []
  );
  const [checked24, setChecked24] = useState(false);
  const handleChange24 = useCallback(
    (newChecked: boolean) => setChecked24(newChecked),
    []
  );
  //Social Media - Youtube
  const [checked25, setChecked25] = useState(false);
  const handleChange25 = useCallback(
    (newChecked: boolean) => setChecked25(newChecked),
    []
  );
  const [checked26, setChecked26] = useState(false);
  const handleChange26 = useCallback(
    (newChecked: boolean) => setChecked26(newChecked),
    []
  );
  //Social Media - TikTok
  const [checked27, setChecked27] = useState(false);
  const handleChange27 = useCallback(
    (newChecked: boolean) => setChecked27(newChecked),
    []
  );
  const [checked28, setChecked28] = useState(false);
  const handleChange28 = useCallback(
    (newChecked: boolean) => setChecked28(newChecked),
    []
  );

  //Form Handlers
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    paypalEmail: '',
    websites: '',
    promotionPlan: ''
  });

  const handleChange122 = (e:any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="div-heading">
      <div className="translation-icon">
        <Button
          variant="secondary"
          onClick={() => router.push("/affliate")}
          icon={ArrowLeftIcon}
        ></Button>
      </div>

      <div className="translation-text1">
        <Text as="h1" variant="headingLg">
          Customize Affiliate signup form
          {/* <div className="toogle-switch-affliate"> */}
                        <label className="toggle-switch2">
                          <input type="checkbox" defaultChecked />
                          <span className="slider round"></span>
                        </label>
                      {/* </div> */}
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
        <div className="affliate-signup-card1">
          <Card>
            <div className="customize">
              <Text as="h1" variant="headingMd">
                Customize
              </Text>
            </div>
            <div className="divider1">
              <Divider />
            </div>
            <div className="custom-textfield2">
              <TextField
                label="Page Title"
                autoComplete="off"
                helpText="Shopify page title"
              ></TextField>
            </div>
            <div className="affliate-divider-space">
              <Box padding="400">
                <InlineStack align="space-between" blockAlign="center">
                  <Text as="p" variant="bodyLg">
                    SUBTITLE & DESCRIPTION
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
                      <TextField label="Subtitle" autoComplete="off" />
                    </div>
                    <div className="custom-textfield-desc">
                      <TextField label="Description" autoComplete="off" />
                    </div>
                  </Box>
                </Collapsible>
              </Box>
            </div>
            <div className="divider">
              <Divider />
            </div>
            <Box padding="400">
              <InlineStack align="space-between" blockAlign="center">
                <div className="referral-link">
                  <Text as="p" variant="bodyLg">
                    INPUT FIELDS
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
                    <TextField label="First name label" autoComplete="off" />
                  </div>
                  <div className="custom-textfield">
                    <TextField
                      label="First name placeholder text"
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-textfield">
                    <TextField label="Last name label" autoComplete="off" />
                  </div>
                  <div className="custom-textfield">
                    <TextField
                      label="Last name placeholder text"
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-checkbox">
                    <Checkbox
                      label="Required Field?"
                      checked={checked}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="custom-textfield">
                    <TextField label="Email label" autoComplete="off" />
                  </div>
                  <div className="custom-textfield">
                    <TextField
                      label="Email placeholder text"
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-textfield">
                    <TextField label="Phone label" autoComplete="off" />
                  </div>
                  <div className="custom-textfield">
                    <TextField
                      label="Phone placeholder text"
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-checkbox">
                    <Checkbox
                      label="Required Field?"
                      checked={checked2}
                      onChange={handleChange2}
                    />
                  </div>
                  {/* Enabled and Required Sample */}
                  <div className="custom-textfield">
                    <TextField label="Paypal label" autoComplete="off" />
                  </div>
                  <div className="custom-textfield">
                    <TextField
                      label="Paypal placeholder text"
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-checkbox">
                    <Checkbox
                      label="Enabled?"
                      checked={checked3}
                      onChange={handleChange3}
                    />
                  </div>
                  <div className="custom-checkbox-new">
                    <Checkbox
                      label="Required Field?"
                      checked={checked4}
                      onChange={handleChange4}
                    />
                  </div>
                  <div className="custom-textfield">
                    <TextField
                      label="Address Line 1 label"
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-textfield">
                    <TextField
                      label="Address Line 1 placeholder text"
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-checkbox">
                    <Checkbox
                      label="Enabled?"
                      checked={checked5}
                      onChange={handleChange5}
                    />
                  </div>
                  <div className="custom-checkbox-new">
                    <Checkbox
                      label="Required Field?"
                      checked={checked6}
                      onChange={handleChange6}
                    />
                  </div>

                  {/* Address Line 2 Stuff */}
                  <div className="custom-textfield">
                    <TextField
                      label="Address Line 2 label"
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-textfield">
                    <TextField
                      label="Address Line 2 placeholder text"
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-checkbox">
                    <Checkbox
                      label="Enabled?"
                      checked={checked7}
                      onChange={handleChange7}
                    />
                  </div>
                  <div className="custom-checkbox-new">
                    <Checkbox
                      label="Required Field?"
                      checked={checked8}
                      onChange={handleChange8}
                    />
                  </div>

                  {/* City Stuff */}
                  <div className="custom-textfield">
                    <TextField label="City label" autoComplete="off" />
                  </div>
                  <div className="custom-textfield">
                    <TextField
                      label="City placeholder text"
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-checkbox">
                    <Checkbox
                      label="Enabled?"
                      checked={checked9}
                      onChange={handleChange9}
                    />
                  </div>
                  <div className="custom-checkbox-new">
                    <Checkbox
                      label="Required Field?"
                      checked={checked10}
                      onChange={handleChange10}
                    />
                  </div>

                  {/* ZipCode Stuff */}
                  <div className="custom-textfield">
                    <TextField label="Zip code label" autoComplete="off" />
                  </div>
                  <div className="custom-textfield">
                    <TextField
                      label="Zip code placeholder text"
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-checkbox">
                    <Checkbox
                      label="Enabled?"
                      checked={checked11}
                      onChange={handleChange11}
                    />
                  </div>
                  <div className="custom-checkbox-new">
                    <Checkbox
                      label="Required Field?"
                      checked={checked12}
                      onChange={handleChange12}
                    />
                  </div>

                  {/* Country Stuff */}
                  <div className="custom-textfield">
                    <TextField label="Country label" autoComplete="off" />
                  </div>
                  <div className="custom-textfield">
                    <TextField
                      label="Country placeholder text"
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-checkbox">
                    <Checkbox
                      label="Enabled?"
                      checked={checked13}
                      onChange={handleChange13}
                    />
                  </div>
                  <div className="custom-checkbox-new">
                    <Checkbox
                      label="Required Field?"
                      checked={checked14}
                      onChange={handleChange14}
                    />
                  </div>

                  {/* State Stuff */}
                  <div className="custom-textfield">
                    <TextField label="State label" autoComplete="off" />
                  </div>
                  <div className="custom-textfield">
                    <TextField
                      label="State placeholder text"
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-checkbox">
                    <Checkbox
                      label="Enabled?"
                      checked={checked15}
                      onChange={handleChange15}
                    />
                  </div>
                  <div className="custom-checkbox-new">
                    <Checkbox
                      label="Required Field?"
                      checked={checked16}
                      onChange={handleChange16}
                    />
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
                    PROMOTION
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
                  {/* Website Lead */}
                  <div className="custom-textfield">
                    <TextField label="Websites Label" autoComplete="off" />
                  </div>
                  <div className="custom-textfield">
                    <TextField
                      label="Websites placeholder text"
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-checkbox">
                    <Checkbox
                      label="Enabled?"
                      checked={checked17}
                      onChange={handleChange17}
                    />
                  </div>
                  <div className="custom-checkbox-new">
                    <Checkbox
                      label="Required Field?"
                      checked={checked18}
                      onChange={handleChange18}
                    />
                  </div>

                  {/* Planning Label */}
                  <div className="custom-textfield">
                    <TextField label="Planning label" autoComplete="off" />
                  </div>
                  <div className="custom-textfield">
                    <TextField
                      label="Planning placeholder text"
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-checkbox">
                    <Checkbox
                      label="Enabled?"
                      checked={checked19}
                      onChange={handleChange19}
                    />
                  </div>
                  <div className="custom-checkbox-new">
                    <Checkbox
                      label="Required Field?"
                      checked={checked20}
                      onChange={handleChange20}
                    />
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
                    SOCIAL MEDIA
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
                  {/* FaceBook Link */}
                  <div className="custom-textfield">
                    <TextField label="Facebook link Label" autoComplete="off" />
                  </div>
                  <div className="custom-textfield">
                    <TextField
                      label="Facebook link placeholder text"
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-checkbox">
                    <Checkbox
                      label="Enabled?"
                      checked={checked21}
                      onChange={handleChange21}
                    />
                  </div>
                  <div className="custom-checkbox-new">
                    <Checkbox
                      label="Required Field?"
                      checked={checked22}
                      onChange={handleChange22}
                    />
                  </div>
                  {/* Instagram Link */}
                  <div className="custom-textfield">
                    <TextField
                      label="Instagram link Label"
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-textfield">
                    <TextField
                      label="Instagram link placeholder text"
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-checkbox">
                    <Checkbox
                      label="Enabled?"
                      checked={checked23}
                      onChange={handleChange23}
                    />
                  </div>
                  <div className="custom-checkbox-new">
                    <Checkbox
                      label="Required Field?"
                      checked={checked24}
                      onChange={handleChange24}
                    />
                  </div>
                  {/* Youtube Link */}
                  <div className="custom-textfield">
                    <TextField label="YouTube link Label" autoComplete="off" />
                  </div>
                  <div className="custom-textfield">
                    <TextField
                      label="YouTube link placeholder text"
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-checkbox">
                    <Checkbox
                      label="Enabled?"
                      checked={checked25}
                      onChange={handleChange25}
                    />
                  </div>
                  <div className="custom-checkbox-new">
                    <Checkbox
                      label="Required Field?"
                      checked={checked26}
                      onChange={handleChange26}
                    />
                  </div>
                  {/* TikTok Link */}
                  <div className="custom-textfield">
                    <TextField label="TikTok link Label" autoComplete="off" />
                  </div>
                  <div className="custom-textfield">
                    <TextField
                      label="TikTok link placeholder text"
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-checkbox">
                    <Checkbox
                      label="Enabled?"
                      checked={checked27}
                      onChange={handleChange27}
                    />
                  </div>
                  <div className="custom-checkbox-new">
                    <Checkbox
                      label="Required Field?"
                      checked={checked28}
                      onChange={handleChange28}
                    />
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
                    REQUEST BUTTON
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
                    <TextField label="Request Button Text" autoComplete="off" />
                  </div>
                  <div className="btn-backgroundcolor">
                    <Text variant="bodyMd" as="span">
                      Button Text Color
                    </Text>
                    <Popover
                      active={verifyOtpTextPopoverActive}
                      activator={
                        <div
                          style={{
                            width: "40px",
                            height: "25px",
                            borderRadius: "6px",
                            border: "1px solid #ccc",
                            backgroundColor: hsbToHex(textColor),
                            cursor: "pointer",
                          }}
                          onClick={toggleVerifyOtpTextPopover}
                        />
                      }
                      onClose={toggleVerifyOtpTextPopover}
                    >
                      <Popover.Section>
                        <ColorPicker
                          onChange={setTextColor}
                          color={textColor}
                        />
                      </Popover.Section>
                    </Popover>
                  </div>
                  <div className="btn-backgroundcolor2">
                    <Text variant="bodyMd" as="span">
                      Button Background Color
                    </Text>
                    <Popover
                      active={sendOtpBgPopoverActive}
                      activator={
                        <div
                          style={{
                            width: "40px",
                            height: "25px",
                            borderRadius: "6px",
                            border: "1px solid #ccc",
                            backgroundColor: hsbToHex(bgColor),
                            cursor: "pointer",
                          }}
                          onClick={toggleSendOtpBgPopover}
                        />
                      }
                      onClose={toggleSendOtpBgPopover}
                    >
                      <Popover.Section>
                        <ColorPicker onChange={setBgColor} color={bgColor} />
                      </Popover.Section>
                    </Popover>
                  </div>
                </Box>
              </Collapsible>
            </Box>
            <div className="divider">
              <Divider />
            </div>
            <Box padding="400">
              <InlineStack align="space-between" blockAlign="center">
                <Text as="p" variant="bodyLg">
                  IMAGE URL
                </Text>

                <Button
                  variant="monochromePlain"
                  onClick={toggleImageUrlCollapsible}
                  ariaExpanded={isImageUrlOpen}
                  size="large"
                  ariaControls="page-title-collapsible"
                  icon={isImageUrlOpen ? ChevronUpIcon : ChevronDownIcon}
                ></Button>
              </InlineStack>

              <Collapsible
                open={isImageUrlOpen}
                id="page-title-collapsible"
                transition={{
                  duration: "500ms",
                  timingFunction: "ease-in-out",
                }}
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
                ADDITIONAL INFO
                </Text>
              </div>
              <div className="referral-button">
                <Button
                  variant="monochromePlain"
                  onClick={toggleAdditionalCollapsible}
                  ariaExpanded={isAdditionOpen}
                  size="large"
                  ariaControls="page-title-collapsible"
                  icon={isAdditionOpen ? ChevronUpIcon : ChevronDownIcon}
                ></Button>
              </div>
            </InlineStack>

            <Collapsible
              open={isAdditionOpen}
              id="page-title-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
            >
              <Box padding="400" paddingInline="400">
                <div className="custom-textfield">
                  <TextField
                    label="Title"
                    autoComplete="off"
                  />
                </div>
                <div className="custom-textfield-desc">
                  <TextField label="Description" autoComplete="off" />
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
                CUSTOM CSS
                </Text>
              </div>
              <div className="referral-button">
                <Button
                  variant="monochromePlain"
                  onClick={toggleCustomCollapsible}
                  ariaExpanded={isCustomOpen}
                  size="large"
                  ariaControls="page-title-collapsible"
                  icon={isCustomOpen ? ChevronUpIcon : ChevronDownIcon}
                ></Button>
              </div>
            </InlineStack>

            <Collapsible
              open={isCustomOpen}
              id="page-title-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
            >
              <Box padding="400" paddingInline="400">
                <div className="custom-textfield-desc">
                  <TextField label="Custom css" autoComplete="off" />
                </div>
              </Box>
            </Collapsible>
          </Box>
          </Card>
        </div>

        {/* Right Side Card */}
        <div className="card2">
          <Card>
          <div className="affiliate-container">
      <div className="affiliate-wrapper">
        <div className="form-section">
          <h1 className="form-title">Affiliate signup form</h1>
          <p className="form-subtitle">Complete the form and submit to join our affiliate program</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  First Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleChange122}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleChange122}
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange122}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange122}
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Paypal Email</label>
              <input
                type="email"
                name="paypalEmail"
                placeholder="Enter your Paypal Email address"
                value={formData.paypalEmail}
                onChange={handleChange122}
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">List the website(s) you will use to send traffic?</label>
              <input
                type="text"
                name="websites"
                placeholder="Enter websites"
                value={formData.websites}
                onChange={handleChange122}
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">How you are planning to promote us?</label>
              <textarea
                name="promotionPlan"
                placeholder="Enter your plan"
                value={formData.promotionPlan}
                onChange={handleChange122}
                className="form-input"
                // rows="3"
              />
            </div>
            
            <button type="submit" className="submit-button">
              Join
            </button>
          </form>
        </div>
        
        <div className="info-section">
          <div className="image-container">
            <img 
              src="https://spring-referral-testing.herokuapp.com/assets/images/template/affiliate-partnership.png"
              alt="Affiliate partnership illustration" 
              className="illustration-image"
            />
          </div>
          
          <div className="info-content">
            <h2 className="info-title">Join and grow with us</h2>
            <p className="info-text">
              Share our products and services to your friends, network & clients and earn a commission for each affiliate sale. Get started by signing up for our affiliate program
            </p>
          </div>
        </div>
      </div>
    </div>
          </Card>
        </div>
      </InlineGrid>
    </div>
  );
}

export default Index;
