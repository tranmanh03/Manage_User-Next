

// const isAuth = false

import HomeBody from "@/components/HomePage/body-home-page";
import Footer from "@/components/HomePage/footer";

export default function Home() {
  // if(!isAuth) {
  //   redirect('/login')
  // }
  return (
    <>
     <HomeBody />
     <Footer />
    </>
  );
}
