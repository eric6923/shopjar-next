import {
  Button,
  Icon,
  InlineStack,
  Page,
  TextField,
  Box,
  Text,
  Pagination,
} from "@shopify/polaris";
import { SearchIcon } from "@shopify/polaris-icons";
import React, { useCallback, useState } from "react";

function Payouts() {
  const [textFieldValue, setTextFieldValue] = useState("");
  const [pageInput, setPageInput] = useState("1");

  const handleTextFieldChange = useCallback(
    (value: string) => setTextFieldValue(value),
    []
  );

  const handlePageInputChange = useCallback(
    (value: string) => setPageInput(value),
    []
  );

  const handleGoToPage = useCallback(() => {
    // Add your page navigation logic here
    console.log(`Navigating to page ${pageInput}`);
  }, [pageInput]);

  return (
    <Page title="Payouts">
      <div className="sales-textfield">
        <InlineStack gap="200">
          <TextField
            label=""
            value={textFieldValue}
            onChange={handleTextFieldChange}
            placeholder="Search by email, name"
            prefix={<Icon source={SearchIcon} />}
            autoComplete="off"
          />
          <Button variant="primary">Search</Button>
        </InlineStack>
      </div>

      <Box
        paddingBlockStart="400"
        paddingBlockEnd="400"
        paddingInlineStart="400"
        paddingInlineEnd="400"
      >
        <InlineStack align="space-between" blockAlign="center">
          <Text variant="bodyMd" as="p">
            Showing 1 out of 1
          </Text>
          <InlineStack gap="200" blockAlign="center">
            <Pagination
              hasPrevious={false}
              onPrevious={() => {}}
              hasNext={false}
              onNext={() => {}}
            />
            <Text variant="bodyMd" as="span">
              Jump to page
            </Text>
            <div style={{ width: "60px" }}>
              <TextField
                value={pageInput}
                onChange={handlePageInputChange}
                autoComplete="off"
                labelHidden
                label="Page number"
              />
            </div>
            <Button onClick={handleGoToPage}>Go</Button>
          </InlineStack>
        </InlineStack>
      </Box>
    </Page>
  );
}

export default Payouts;
