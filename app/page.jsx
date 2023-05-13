import Feed from '@/components/feed'

const Home = () => {
  return (
     <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI Prompt Suggestions 
        </span>  
      </h1>

      <p className="desc text-center ">
        PromptSwap is a decentralised generator of AI Prompt suggestions for OpenAI's GPT-3.
      </p>

      <Feed />
      </section>
  )
}

export default Home