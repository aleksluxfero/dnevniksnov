import { useBackButton } from "@/hooks/useBackButton";

const NotFoundPage = () => {
  useBackButton();
  return <div>Not found</div>;
};

export default NotFoundPage;
