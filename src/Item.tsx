import { Helmet } from "react-helmet";

export const Item = () => {
  return (
    <div>
      <Helmet
        title='ITEM'
        meta={[
          { name: "description", content: "item descr" },
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Страница Item нашего Dobre" },
          { property: "og:url", content: "https://test.net/" },
          {
            property: "og:image",
            content: "https://hamsterpunk.net/seo-image.png",
          },
          {
            property: "og:description",
            content: "Тестовое описание страницы Item нашего Dobre",
          },
        ]}
      />
      <h1>ITEM</h1>
    </div>
  );
};
