"use client";

import { SelectedWorkView } from "../../components/selected-work/selected-work-view";
import { MobileSelectedWorkView } from "../../components/mobile/mobile-selected-work-view";
import { useDesktopLayout } from "../../components/shared/use-desktop-layout";

const Page = () => {
  const isDesktop = useDesktopLayout();
  if (isDesktop === null) return null;
  return isDesktop ? <SelectedWorkView /> : <MobileSelectedWorkView />;
};
export default Page;
