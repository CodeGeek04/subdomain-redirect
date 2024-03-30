import type { GetServerSideProps, NextPage } from "next";
import Register from "./Main";
import Client from "./Client";

type Props = { host: string | null };

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => ({ props: { host: context.req.headers.host || null } });

const Page: NextPage<Props> = ({ host }) => {
  return <p> Welcome host: {host}</p>;
};

export default Page;
