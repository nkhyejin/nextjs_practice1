import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];

  return (
    <>
      <Seo title={title} />
      <h2>{title || "Loading..."}</h2>
    </>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}
