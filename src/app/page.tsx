import Header from "./components/header";
import Hero from "./components/hero";
import Workmanagement from "./components/workmanagement";
import Worktogether from "./components/worktogether";
import Customize from "./components/customize";
import Chooseplan from "./components/chooseplan";
import Yourwork from "./components/yourwork";
import YourData from "./components/yourdata";
import Oursponsors from "./components/oursponsors";
import Apps from "./components/apps";
import Testimonial from "./components/testimonial";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Workmanagement />
      <Worktogether />
      <Customize />
      <Chooseplan />
      <Yourwork />
      <YourData />
      <Oursponsors />
      <Apps />
      <Testimonial />
      <Footer />
    </div>
  );
}
