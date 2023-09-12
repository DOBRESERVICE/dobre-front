import { Helmet } from "react-helmet";

export const Market = () => {
  return (
    <div>
      <Helmet
        title='MARKET'
        meta={[
          { name: "description", content: "market descr" },
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Страница Market нашего Dobre" },
          { property: "og:url", content: "https://test.com/" },
          {
            property: "og:image",
            content:
              "https://blog.promopult.ru/wp-content/uploads/2019/02/checklist01-1200x630.png",
          },
          {
            property: "og:description",
            content: "Тестовое описание страницы Market нашего Dobre",
          },
        ]}
      />
      <h1>MARKET</h1>
    </div>
  );
};
