import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url("/images/landing-page.png")'}}>
      <div className="text-center text-black mt-[-200px] ">
        <h1 className="text-4xl font-bold mb-4">Create Resume for Free</h1>
        <p className="text-lg mb-8">100% free, no login required, unlimited downloads</p>
        <Link href={"/make"}>
          <Button>Create Resume for Free</Button>
        </Link>
      </div>
    </div>
  );
};


