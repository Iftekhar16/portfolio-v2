"use client";

import { AboutView } from "../../components/about/about-view";
import { MobileAboutView } from "../../components/mobile/mobile-about-view";
import { useDesktopLayout } from "../../components/shared/use-desktop-layout";

const Page = () => {
  const isDesktop = useDesktopLayout();
  if (isDesktop === null) return null;
  return isDesktop ? <AboutView /> : <MobileAboutView />;
};
export default Page;
