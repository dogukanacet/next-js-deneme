import Feed from "@components/Feed";

const Home = () => {
  return (
    <div className="w-full flex-col flex-center">
      <h1 className="head_text text-center">
        discover&share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quisquam
        suscipit fuga cum aspernatur quas! Ullam natus, excepturi, dolore iusto
        in libero illo sed nulla perspiciatis, quo eos cupiditate assumenda.
      </p>

      <Feed />
    </div>
  );
};

export default Home;
