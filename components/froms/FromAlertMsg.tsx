function FromAlertMsg({
  success,
  error,
  info,
  setShowAlert,
  showAlert,
}: {
  success?: any;
  error?: any;
  info?: any;
  setShowAlert: any;
  showAlert: any;
}) {
  return (
    <section
      className={` ${
        (showAlert && success) || (showAlert && error) || (showAlert && info)
          ? "flex"
          : "hidden"
      }  justify-center items-center `}
    >
      <div>
        <div
          className={`inline-flex min-w-80 px-4 py-2 rounded-sm text-sm ${
            success &&
            "bg-emerald-100 border border-emerald-200 text-emerald-600"
          } ${info && "bg-blue-100 border border-blue-200 text-blue-600"} ${
            error && "bg-rose-100 border border-rose-200 text-rose-600"
          }`}
        >
          <div className="flex w-full justify-between items-start">
            <div className="flex">
              <svg
                className="w-6 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z" />
              </svg>
              <div>{success && " User Updated succesfully."}</div>
              <div>{info && info}</div>
              <div>{error && error}</div>
            </div>
            <button
              type="button"
              onClick={() => setShowAlert(false)}
              className="opacity-70 hover:opacity-80 ml-3 mt-[3px]"
            >
              <div className="sr-only">Close</div>
              <svg className="w-4 h-4 fill-current">
                <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FromAlertMsg;
