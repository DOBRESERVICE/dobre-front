import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

type Test = [
  {
    category: string;
    description: string;
  }
];

export const Home = () => {
  const [testMeta, setTestMeta] = useState<Test | null>(null);

  const fetchTestData = () => {
    fetch(
      "http://ec2-3-120-174-49.eu-central-1.compute.amazonaws.com:7000/dev/test"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTestMeta(data);
      });
  };

  console.log("testMeta", testMeta);

  useEffect(() => {
    fetchTestData();
  }, []);
  return (
    <div>
      {testMeta && (
        <Helmet
          title={testMeta[0].category}
          meta={[
            { property: "description", content: testMeta[0].category },
            { property: "og:type", content: "website" },
            { property: "og:title", content: testMeta[0].category },
            { property: "og:url", content: "https://test.ru/" },
            {
              property: "og:image",
              content:
                "https://hsto.org/r/w1560/webt/dd/bj/ed/ddbjedwsswlaapzkfxs33ddfflw.png",
            },
            {
              property: "og:description",
              content: testMeta[0].description,
            },
          ]}
        />
      )}
      <h1>HOME</h1>
    </div>
  );
};
