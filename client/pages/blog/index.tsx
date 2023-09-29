import { MainSecondary } from "@/components/shared/MainSecondary/MainSecondary";
import { Blog } from "@/components/blog/Blog/Blog";

export default function BlogPage() {

  return (
    <>
      <MainSecondary image={"/assets/img/main-secondary/blog.png"} imageAlternativeText={"Blog img"}
                     subtitle={"Home / Blog"} title={"Blog"} />
      <Blog />
    </>
  );

}
