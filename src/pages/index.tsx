import type { GetServerSideProps, NextPage } from "next";
import Register from "./Main";
import Client from "./Client";

type Props = { host: string | null };

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => ({ props: { host: context.req.headers.host || null } });

const Page: NextPage<Props> = ({ host }) => {
  console.log("host", host);
  const subdomain = host?.split(":")[0].split(".")[0];
  if (subdomain === "localhost" || subdomain === "www") {
    return <p> Welcome Host {subdomain}</p>;
  }
  return <Client host={subdomain ? subdomain : "google"} />;
};

export default Page;
