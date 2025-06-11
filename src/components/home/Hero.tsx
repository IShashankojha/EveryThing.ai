import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left side - Text content */}
            <div className="flex-1 space-y-6">
                <h1 className="text-3xl font-bold tracking-tight">
                    Shaping the Next Generation of
                    <span className="text-secondary"> HR Tech Recruitment.</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-[600px]">
                    At Everything Talent, we help you launch your recruitment into a new dimension.
                </p>
                <div className="flex gap-4">
                    <Button size="lg" variant="outline" className=" dark:bg-white dark:text-black">
                        Start for Free Today
                    </Button>
                </div>
            </div>

            {/* Right side - Image */}
            <div className="flex-1 relative h-[400px] w-full md:w-[500px]">
                <Image
                    src="/heroBg2.webp" // Replace with your image path
                    alt="Hero Image"
                    fill
                    className="object-cover rounded-lg"
                    priority
                />
            </div>
        </section>
    );
};

export default Hero;