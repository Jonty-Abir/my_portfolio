"use client";

import Footer from "@/components/footer/footer";
import GustHeader from "@/components/header/gustHeader";
import { IState } from "@/redux/sclice/clientSclice";
import { ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useDispatch, useSelector } from "react-redux";

interface IChildren {
  children: ReactNode;
}

function GustLayout({ children }: IChildren) {
  // redux hooks
  const dispatch = useDispatch();
  const showSideBar = useSelector(
    (state: IState) => state.uiSclice.showSideBar
  );
  return (
    <>
      <div className=" flex flex-col gap-y-8">
        <header className="">
          <GustHeader />
        </header>
        <main>
          <ErrorBoundary
            fallback={<h2 className="isError">Something went wrong</h2>}
          >
            <Suspense fallback={<h2 className="loading">loading...</h2>}>
              {children}
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default GustLayout;
