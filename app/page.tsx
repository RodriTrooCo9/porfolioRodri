import CoverParticle from "@/components/cover-particle";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";

export default function Home() {
  return (
    <>
      <TransitionPage />

        <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
          <CoverParticle />
          <Introduction />
        </div> 

    </>
  
  );
}
