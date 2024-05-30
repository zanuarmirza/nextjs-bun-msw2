import { getData } from "services/fetch-dummy";
import { DataClientSide } from "./components/data-client";

type Params = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Params) {
    return { title: `Post: ${params.slug}` };
}

export default async function Page({ params }: Params) {
    const data = await getData()
    return (
        <div>
            <h1>Slug: {params.slug}</h1>
            <hr />
            <h1>server data</h1>
            <p>{JSON.stringify(data)}</p>
            <h1>client data</h1>
            <DataClientSide />
        </div>);
}
