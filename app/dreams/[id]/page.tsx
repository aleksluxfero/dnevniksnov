import { Page } from "@/components/Page";

export default async function Dream({ params }: { params: { id: string } }) {
  return (
    <Page nav={true}>
      <div>Сон {params.id}</div>
    </Page>
  );
}
