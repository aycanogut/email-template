import * as React from "react";

import {
  Body,
  Container,
  Head,
  Html,
  Row,
} from "@react-email/components";

import Image from "../components/Image";
import Header from "../components/Header";
import Text from "../components/Text";
import Link from "../components/Link";
import ImageGrid from "../components/ImageGrid";

export const EmailTemplate = () => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Row>
          <Header title='%100 Açık Sahne - In Memory of Tolga Akyıldız' />
          <Text textContent='Tolga Akyıldız was a Turkish journalist known for his music writings and organizations.
            Unfortunately, he passed away in April 2023.
            "100% Open Stage" was a series of concerts he organized for 9 years. Before his death, he announced that my favorite band, Second, would perform on the show. After he has gone, it was decided that this concert would be held in his memory.

            And throughout their performance, talented names such as Batu Akdeniz, Can Temiz, In Hoodies, Melis Karaduman, Nilipek, Padme, Samet Çiçek and Övünç Dan accompanied Second.

            It is an honor for me to prepare the poster for this meaningful event.
            Rest his soul in melodies 🖤🤘' />

          <Image
            linkUrl="https://efekaradagli.com/100-acik-sahne-in-memory-of-tolga-akyildiz"
            imageUrl='https://cdn.myportfolio.com/b560a0ed-ca38-4bd4-a052-9073d156c878/cecc6a31-1883-493c-b9f6-05eb5d008e52_rw_1200.jpg?h=6bd68f1030191eb2284fc07ce205498a'
            imageWidth="200px"
            centered
          />

          <Image
            linkUrl="https://efekaradagli.com/100-acik-sahne-in-memory-of-tolga-akyildiz"
            imageUrl='https://cdn.myportfolio.com/b560a0ed-ca38-4bd4-a052-9073d156c878/cecc6a31-1883-493c-b9f6-05eb5d008e52_rw_1200.jpg?h=6bd68f1030191eb2284fc07ce205498a'
            imageWidth="200px"
          />

          <Link url="https://efekaradagli.com/100-acik-sahne-in-memory-of-tolga-akyildiz" title="Detay Sayfasina Git" />

          <ImageGrid

            items={[
              {
                id: 1,
                linkUrl: "https://efekaradagli.com/100-acik-sahne-in-memory-of-tolga-akyildiz",
                imageUrl: "https://cdn.myportfolio.com/b560a0ed-ca38-4bd4-a052-9073d156c878/cecc6a31-1883-493c-b9f6-05eb5d008e52_rw_1200.jpg?h=6bd68f1030191eb2284fc07ce205498a",
                imageWidth: "80px",
                imageHeight: "auto",
                centered: true
              },
              {
                id: 2,
                linkUrl: "https://efekaradagli.com/100-acik-sahne-in-memory-of-tolga-akyildiz",
                imageUrl: "https://cdn.myportfolio.com/b560a0ed-ca38-4bd4-a052-9073d156c878/cecc6a31-1883-493c-b9f6-05eb5d008e52_rw_1200.jpg?h=6bd68f1030191eb2284fc07ce205498a",
                imageWidth: "80px",
                imageHeight: "auto",
                centered: true
              },
              {
                id: 3,
                linkUrl: "https://efekaradagli.com/100-acik-sahne-in-memory-of-tolga-akyildiz",
                imageUrl: "https://cdn.myportfolio.com/b560a0ed-ca38-4bd4-a052-9073d156c878/cecc6a31-1883-493c-b9f6-05eb5d008e52_rw_1200.jpg?h=6bd68f1030191eb2284fc07ce205498a",
                imageWidth: "80px",
                imageHeight: "auto",
                centered: true
              },
              {
                id: 4,
                linkUrl: "https://efekaradagli.com/100-acik-sahne-in-memory-of-tolga-akyildiz",
                imageUrl: "https://cdn.myportfolio.com/b560a0ed-ca38-4bd4-a052-9073d156c878/cecc6a31-1883-493c-b9f6-05eb5d008e52_rw_1200.jpg?h=6bd68f1030191eb2284fc07ce205498a",
                imageWidth: "80px",
                imageHeight: "auto",
                centered: true
              },
              {
                id: 5,
                linkUrl: "https://efekaradagli.com/100-acik-sahne-in-memory-of-tolga-akyildiz",
                imageUrl: "https://cdn.myportfolio.com/b560a0ed-ca38-4bd4-a052-9073d156c878/cecc6a31-1883-493c-b9f6-05eb5d008e52_rw_1200.jpg?h=6bd68f1030191eb2284fc07ce205498a",
                imageWidth: "80px",
                imageHeight: "auto",
                centered: true
              },
            ]} />
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
