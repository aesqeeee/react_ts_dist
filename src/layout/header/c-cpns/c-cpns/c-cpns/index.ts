import { lazy } from "react";

const SearchPage = lazy(() => import("./search"));
const CharactersPage = lazy(() => import("./characters"));
const LanguagePage = lazy(() => import("./language"));
const ThemePage = lazy(() => import("./theme"));
const MessagePage = lazy(() => import("./message"));
const FullScreenPage = lazy(() => import("./fullScreen"));

export {
  CharactersPage,
  SearchPage,
  LanguagePage,
  ThemePage,
  MessagePage,
  FullScreenPage
};
