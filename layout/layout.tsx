import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Navbar from "@/components/header/navbar";
import Loading from "@/components/loading/loading";
import { IState, setShowSideBar } from "@/redux/sclice/clientSclice";
import { ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useDispatch, useSelector } from "react-redux";

interface IChildren {
  children: ReactElement;
}

export default function Layout({ children }: IChildren) {
  // redux hooks
  const dispatch = useDispatch();
  const showSideBar = useSelector(
    (state: IState) => state.uiSclice.showSideBar
  );
  return (
    <>
      <ErrorBoundary
        fallback={<h2 className="isError">Something went wrong</h2>}
      >
        <Suspense fallback={<Loading />}>
          <div className={`w-screen h-screen`}>
            <div className={`flex`}>
              <Header />
              <div
                className={`flex flex-col content w-[100%] h-screen  overflow-y-auto overflow-x-hidden relative`}
              >
                <Navbar />
                {/*BACKBROP*/}
                {/*bg-slate-900 bg-opacity-30 z-50 transition-opacity*/}
                <div
                  style={{
                    background: ` linear-gradient(90deg, rgba(1,0,17,0.7959383582534576) 100%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)`,
                  }}
                  className={`fixed w-screen h-screen inset-0 z-50 lg:hidden ${
                    showSideBar ? "" : "hidden"
                  }`}
                  onClick={() => dispatch(setShowSideBar())}
                ></div>
                <main>{children}</main>
                <Footer />
              </div>
            </div>
          </div>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
