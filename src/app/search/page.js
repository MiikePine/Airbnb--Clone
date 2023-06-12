import { SearchPage } from "./SearchPage";

async function getData() {
  const res = await fetch("https://www.jsonkeeper.com/b/5NPS");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <main>
      <SearchPage data={data} />
    </main>
  );
}