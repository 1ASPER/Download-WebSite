import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Slide = (): JSX.Element => {
  // App download stats data
  const downloadStats = [
    {
      count: "2 569",
      icon: "https://c.animaapp.com/m9pwerpz2b8bsR/img/group.png",
    },
    {
      count: "534",
      icon: "https://c.animaapp.com/m9pwerpz2b8bsR/img/tabler-download.svg",
    },
  ];

  // Features data
  const features = [
    {
      title: "QR scanning",
      description: "Scan the QR code on the product with the built-in scanner.",
      icon: "https://c.animaapp.com/m9pwerpz2b8bsR/img/group-56.png",
      bgColor: "bg-[#eeeeee]",
      textColor: "text-black",
    },
    {
      title: "AI based",
      description:
        "AI provides personalized recommendations based on the user's shopping history.",
      icon: "https://c.animaapp.com/m9pwerpz2b8bsR/img/group-55.png",
      bgColor: "bg-[#ff3758]",
      textColor: "text-white",
    },
    {
      title: "Multi-selecting",
      description:
        "The app allows users to scan and add multiple products to their cart quickly and easily.",
      icon: "https://c.animaapp.com/m9pwerpz2b8bsR/img/vector-1.svg",
      bgColor: "bg-[#eeeeee]",
      textColor: "text-black",
    },
    {
      title: "Digital receipt",
      description:
        "At the end of the shopping process, you receive a virtual receipt.",
      icon: "https://c.animaapp.com/m9pwerpz2b8bsR/img/group-2.png",
      bgColor: "bg-[#5e6375]",
      textColor: "text-white",
    },
  ];

  // Authenticity cards data
  const authenticityCards = [
    {
      id: "01",
      title: "Local adaptation",
      description:
        "We take into account the specifics of the Kyrgyzstan market, integrating features that really simplify the shopping process. For example, our application supports popular local payment systems and offers personalized discounts from local stores.",
    },
    {
      id: "02",
      title: "Technology without complexity",
      description:
        "We developed an intuitive interface so that even users without experience with smart devices can easily use our service.",
    },
    {
      id: "03",
      title: "Time saving and personalization",
      description: (
        <>
          <span>
            The application synchronizes with our cart, allowing shoppers to{" "}
          </span>
          <span className="font-bold">see the amount of their purchases</span>
          <span> in real time, receive personalized offers and </span>
          <span className="font-bold">
            recommendations based on preferences.
          </span>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center relative bg-white overflow-hidden">
      {/* Header */}
      <header className="flex w-full items-center justify-between px-[139px] py-[13px] relative bg-white shadow-[0px_1px_0px_#cbcbcb] z-10">
        <div className="flex items-center">
          <img
            className="w-[58px] h-[45px]"
            alt="AsiaCart Logo"
            src="https://c.animaapp.com/m9pwerpz2b8bsR/img/image-9.png"
          />
          <img
            className="w-[134px] h-[29px] ml-[10px]"
            alt="AsiaCart Text"
            src="https://c.animaapp.com/m9pwerpz2b8bsR/img/image-8.png"
          />
        </div>

        <nav className="flex items-center gap-[50px]">
          <a
            href="#who-are-we"
            className="[font-family:'Tw_Cen_MT-Regular',Helvetica] font-normal text-black text-[32px]"
          >
            who are we
          </a>
          <a
            href="#contact-us"
            className="[font-family:'Tw_Cen_MT-Regular',Helvetica] font-normal text-black text-[32px]"
          >
            contact us
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full bg-white py-[154px]">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-col gap-[78px] max-w-[723px]">
            <div className="flex flex-col gap-[37px]">
              <h1 className="[font-family:'Tw_Cen_MT-Regular',Helvetica] font-normal text-black text-[96px] leading-[96px]">
                Make your shopping easier
              </h1>
              <p className="[font-family:'Tw_Cen_MT-Regular',Helvetica] font-normal text-black text-[32px]">
                Shopping smart with AsiaCart
              </p>
            </div>

            <div className="flex gap-[68px]">
              <div className="flex flex-col items-center">
                <Button className="h-[81px] px-[21px] py-[27px] bg-[#ec2649] rounded-2xl [font-family:'Tw_Cen_MT-Regular',Helvetica] text-xl text-white flex items-center">
                  <img
                    className="w-[18px] h-[21px] mr-[10px]"
                    alt="Apple Icon"
                    src="https://c.animaapp.com/m9pwerpz2b8bsR/img/vector.svg"
                  />
                  Download for APPLE
                </Button>
                <div className="flex justify-center gap-[40px] mt-[10px]">
                  <div className="flex items-center gap-[5px]">
                    <img
                      className="w-4 h-4"
                      alt="Download icon"
                      src="https://c.animaapp.com/m9pwerpz2b8bsR/img/tabler-download.svg"
                    />
                    <span className="[font-family:'Tw_Cen_MT-Regular',Helvetica] text-[#474a52] text-sm">1 035</span>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <img
                      className="w-4 h-4"
                      alt="Seen icon"
                      src="https://c.animaapp.com/m9pwerpz2b8bsR/img/group.png"
                    />
                    <span className="[font-family:'Tw_Cen_MT-Regular',Helvetica] text-[#474a52] text-sm">1 284</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <Button className="h-[81px] px-[21px] py-[27px] bg-[#ec2649] rounded-2xl [font-family:'Tw_Cen_MT-Regular',Helvetica] text-xl text-white flex items-center">
                  <img
                    className="w-[22.12px] h-[13.63px] mr-[10px]"
                    alt="Android Icon"
                    src="https://c.animaapp.com/m9pwerpz2b8bsR/img/mask-group.png"
                  />
                  Download for ANDROID
                </Button>
                <div className="flex justify-center gap-[40px] mt-[10px]">
                  <div className="flex items-center gap-[5px]">
                    <img
                      className="w-4 h-4"
                      alt="Download icon"
                      src="https://c.animaapp.com/m9pwerpz2b8bsR/img/tabler-download.svg"
                    />
                    <span className="[font-family:'Tw_Cen_MT-Regular',Helvetica] text-[#474a52] text-sm">534</span>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <img
                      className="w-4 h-4"
                      alt="Seen icon"
                      src="https://c.animaapp.com/m9pwerpz2b8bsR/img/group.png"
                    />
                    <span className="[font-family:'Tw_Cen_MT-Regular',Helvetica] text-[#474a52] text-sm">2 569</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-[730px] h-[885px]">
            <img
              className="absolute w-[417px] h-[850px] top-0 right-0"
              alt="iPhone Pro"
              src="https://c.animaapp.com/m9pwerpz2b8bsR/img/iphone-16-pro.png"
            />
            <img
              className="absolute w-[468px] h-[885px] top-[-131px] left-0"
              alt="iPhone Pro"
              src="https://c.animaapp.com/m9pwerpz2b8bsR/img/iphone-16-pro-1.png"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex-1 ${feature.bgColor} p-[60px] flex flex-col items-start`}
          >
            <img
              className="w-[80px] h-[80px] mb-[40px]"
              alt={feature.title}
              src={feature.icon}
            />
            <h2
              className={`[font-family:'Tw_Cen_MT-Bold',Helvetica] font-bold ${feature.textColor} text-[40px] mb-4`}
            >
              {feature.title}
            </h2>
            <p
              className={`[font-family:'Tw_Cen_MT-Regular',Helvetica] font-normal ${feature.textColor} text-[32px] leading-[38px]`}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      {/* Who Are We Section */}
      <section
        id="who-are-we"
        className="relative w-full py-[100px] bg-[#474a52] flex items-center"
      >
        <div className="container mx-auto flex justify-between items-center">
          <img
            className="w-[447px] h-[360px]"
            alt="Team Logo"
            src="https://c.animaapp.com/m9pwerpz2b8bsR/img/group-50.png"
          />

          <div className="flex flex-col gap-[39px] max-w-[855px]">
            <h2 className="[font-family:'Tw_Cen_MT-Bold',Helvetica] font-bold text-white text-8xl">
              WHO ARE WE
            </h2>
            <p className="[font-family:'Tw_Cen_MT-Bold',Helvetica] font-bold text-white text-[32px]">
              We are third-year students at TSI AUCA College, and our team —
              ASIACART (FIP team #9) — was formed in 2024. Coming from different
              academic backgrounds, we've united to develop an innovative mobile
              app that streamlines the supermarket shopping experience. ASIACART
              is designed to help users shop faster and more efficiently, saving
              time and avoiding long lines through smart, user-friendly
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Authenticity Section */}
      <section className="relative w-full py-[71px] bg-white overflow-hidden">
        <div className="container mx-auto relative">
          <div className="absolute w-[833px] h-[833px] top-[85px] right-[-400px] bg-[#ec2649] rounded-[416.5px] blur-[42.25px] opacity-50" />

          <h2 className="absolute w-[561px] left-[-216px] top-[390px] -rotate-90 [font-family:'Tw_Cen_MT-Bold',Helvetica] font-bold text-black text-8xl">
            AUTHENTICITY
          </h2>

          <div className="flex flex-col gap-[57px] ml-[300px]">
            {authenticityCards.map((card, index) => (
              <Card
                key={index}
                className="w-[1040px] rounded-[50px] shadow-[17px_12px_22.8px_6px_#00000057] relative overflow-hidden"
              >
                <CardContent className="p-12 flex items-start gap-16">
                  <div className="flex-shrink-0 w-[94px] h-[94px] bg-[#e7e7e7] rounded-full flex items-center justify-center">
                    <div className="[font-family:'Tw_Cen_MT_Std-Regular',Helvetica] font-normal text-black text-5xl text-center">
                      {card.id}
                    </div>
                  </div>

                  <div>
                    <h3 className="[font-family:'Tw_Cen_MT_Std-Bold',Helvetica] font-bold text-black text-5xl mb-4">
                      {card.title}
                    </h3>

                    <div className="[font-family:'Tw_Cen_MT_Std-Regular',Helvetica] font-normal text-black text-[32px]">
                      {card.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section
        id="contact-us"
        className="relative w-full py-[100px] bg-[#161614] flex flex-col items-center justify-center"
      >
        <h2 className="[font-family:'Tw_Cen_MT-Bold',Helvetica] font-bold text-[#ec2649] text-8xl text-center mb-16">
          contact us
        </h2>
        <img
          className="w-[613px] h-[262px] object-cover"
          alt="Contact Information"
          src="https://c.animaapp.com/m9pwerpz2b8bsR/img/image-79.png"
        />
      </section>
    </div>
  );
};
