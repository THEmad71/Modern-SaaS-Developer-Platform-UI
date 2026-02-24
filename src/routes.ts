import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Introduction from "./components/docs/Introduction";
import Installation from "./components/docs/Installation";
import ComponentPage from "./components/docs/ComponentPage";
import ComponentsLibrary from "./components/docs/ComponentsLibrary";
import CommunityBrowse from "./components/community/Browse";
import CommunitySubmit from "./components/community/Submit";
import StudioPortfolio from "./components/studio/Portfolio";
import StudioOrder from "./components/studio/Order";
import Playground from "./components/playground/Playground";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Introduction },
      { path: "installation", Component: Installation },
      { path: "components", Component: ComponentsLibrary },
      { path: "components/:componentId", Component: ComponentPage },
      { path: "community", Component: CommunityBrowse },
      { path: "community/submit", Component: CommunitySubmit },
      { path: "studio", Component: StudioPortfolio },
      { path: "studio/order", Component: StudioOrder },
      { path: "playground", Component: Playground },
    ],
  },
]);