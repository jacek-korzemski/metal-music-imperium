import * as React from "react"
import { Button, Layout } from "@m-m-m/components"

const IndexPage = () => {
  const headerContent = () => <h1>Hello!</h1>;

  return (
    <Layout
      header={headerContent}
    >
      Hello world <Button variant={'warning'}> Hello </Button>
    </Layout>
  );
};

export default IndexPage

export const Head = () => <title>Home Page</title>
