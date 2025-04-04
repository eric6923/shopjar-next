import { Button, Icon, InlineStack, Page, TextField } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import { SearchIcon } from "@shopify/polaris-icons";

function Sales() {
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleTextFieldChange = useCallback(
    (value: string) => setTextFieldValue(value),
    []
  );
  return (
    <Page title="Sales">
        <div className="sales-textfield">
      <InlineStack gap="200">
        <TextField
          label=""
          value={textFieldValue}
          onChange={handleTextFieldChange}
          placeholder="Search by title"
          prefix={<Icon source={SearchIcon} />}
          autoComplete="off"
        />
        <Button variant="primary">Search</Button>
      </InlineStack>
      </div>
    </Page>
  );
}

export default Sales;
