import { Page, Layout, EmptyState } from "@shopify/polaris";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

export function EmptyStatePage() {
  function openShipmatesDashboard() {
    window.open("https://shipmates.app/dashboard/book?type=shopify");
  }

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <EmptyState
            heading="Successfully installed!"
            action={{
              content: "Open the Shipmates Dashboard",
              onAction: () => openShipmatesDashboard(),
            }}
            image={img}
            imageContained
          >
            <p>View your orders in the Shipmates dashboard.</p>
          </EmptyState>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
