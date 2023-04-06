import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <main className="container mx-auto">
      <Header />
      <section className="flex">
        <div className="w-1/2">1</div>
        <div className="w-1/2">2</div>
      </section>
    </main>
  );
};

export default Home;
