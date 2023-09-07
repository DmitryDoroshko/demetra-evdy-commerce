import Image from "next/image";

interface IMainSecondaryProps {
  image: string;
  imageAlternativeText: string;
  subtitle: string;
  title: string;
}

export function MainSecondary({
                                image,
                                imageAlternativeText,
                                subtitle,
                                title
                              }: IMainSecondaryProps) {
  return (
      <section className="main-secondary">
        <Image src={image} alt={imageAlternativeText} width={1920} height={230} className="main-secondary__img"/>
        <div className="container">
          <div className="main-secondary__inner">
            <div className="main-secondary__content">
              <h2 className="main-secondary__subtitle">{subtitle}</h2>
              <h1 className="main-secondary__title">{title}</h1>
            </div>
          </div>
        </div>
      </section>
  );
}
