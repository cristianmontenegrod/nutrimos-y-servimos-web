import BaseLayout from "./BaseLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";

function PublicLayout() {
  return (
    <BaseLayout
      header={<Header />}
      footer={<Footer />}
    />
  );
}

export default PublicLayout;