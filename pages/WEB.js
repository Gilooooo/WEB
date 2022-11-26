import Hero from "../components/Main/Hero";
import Introduction from "../components/Main/Introduction";
import Services from "../components/Main/Services";
import Nav from "../components/Main/Nav";
import Subscription from "../components/Main/Subscription";

export default function WEB() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Introduction/>
      <Services/>
      <Subscription/>
    </div>
  );
}
