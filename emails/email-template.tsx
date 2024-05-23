import * as React from "react";

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Text,
} from "@react-email/components";

import { render } from '@react-email/render';

export const EmailTemplate = () => (
  <Html>
    <Head />
    <Preview>Log in with this magic link</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Efe Karadağlı</Heading>
        <Row>
          <Heading
            style={{
              ...text,
              color: "#ababab",
              marginTop: "14px",
              marginBottom: "16px",
            }}
          >
            %100 Açık Sahne - In Memory of Tolga Akyıldız
          </Heading>

          <Text
            style={{
              ...text,
              color: "#ababab",
              marginTop: "14px",
              marginBottom: "16px",
            }}
          >
            Tolga Akyıldız was a Turkish journalist known for his music writings and organizations.
            Unfortunately, he passed away in April 2023.
            "100% Open Stage" was a series of concerts he organized for 9 years. Before his death, he announced that my favorite band, Second, would perform on the show. After he has gone, it was decided that this concert would be held in his memory.

            And throughout their performance, talented names such as Batu Akdeniz, Can Temiz, In Hoodies, Melis Karaduman, Nilipek, Padme, Samet Çiçek and Övünç Dan accompanied Second.

            It is an honor for me to prepare the poster for this meaningful event.
            Rest his soul in melodies 🖤🤘
          </Text>

          <Link
            href="https://efekaradagli.com/100-acik-sahne-in-memory-of-tolga-akyildiz"
            target="_blank"
            style={{
              ...link,
              display: "block",
              marginBlock: "16px",
            }}
          >
            <Img
              src="https://cdn.myportfolio.com/b560a0ed-ca38-4bd4-a052-9073d156c878/cecc6a31-1883-493c-b9f6-05eb5d008e52_rw_1200.jpg?h=6bd68f1030191eb2284fc07ce205498a"
              width="100%"
              height="100%"
            />
          </Link>

          <Link
            href="https://efekaradagli.com/100-acik-sahne-in-memory-of-tolga-akyildiz"
            target="_blank"
            style={{
              ...link,
              display: "block",
              marginBlock: "16px",
            }}
          >
            Detay sayfasına git
          </Link>
        </Row>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};

const html = render(<EmailTemplate />, {
  pretty: true,
});

console.log(html);