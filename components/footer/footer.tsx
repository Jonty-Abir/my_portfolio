export default function Footer() {
  return (
    <footer className="px-10 md:px-6 py-10 footer">
      <div className="mb-16 flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <span className="font-bold font-signature text-2xl hidden mxs:block">
            Abir Santra
          </span>
        </div>
        <div className="grow mt-4 md:mt-0 md:ml-12">
          <p className="font-semibold text-base text-gray-500 dark:text-gray-300">
            © 2023 Abir Santra
          </p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_65_10030)">
                <path
                  d="M24 12.7129C24 6.08547 18.6274 0.712891 12 0.712891C5.37258 0.712891 0 6.08547 0 12.7129C0 18.7023 4.3882 23.6669 10.125 24.5671V16.1816H7.07812V12.7129H10.125V10.0691C10.125 7.06164 11.9166 5.40039 14.6576 5.40039C15.9701 5.40039 17.3438 5.63477 17.3438 5.63477V8.58789H15.8306C14.34 8.58789 13.875 9.51297 13.875 10.4629V12.7129H17.2031L16.6711 16.1816H13.875V24.5671C19.6118 23.6669 24 18.7023 24 12.7129Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_65_10030">
                  <rect
                    width="24"
                    height="24"
                    fill="currentColor"
                    transform="translate(0 0.712891)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_65_10031)">
                <path
                  d="M7.55016 22.4629C16.6045 22.4629 21.5583 14.9596 21.5583 8.45475C21.5583 8.24381 21.5536 8.02819 21.5442 7.81725C22.5079 7.12035 23.3395 6.25714 24 5.26819C23.1025 5.66749 22.1496 5.92827 21.1739 6.04163C22.2013 5.4258 22.9705 4.45836 23.3391 3.31866C22.3726 3.89145 21.3156 4.2955 20.2134 4.5135C19.4708 3.72445 18.489 3.20201 17.4197 3.02694C16.3504 2.85188 15.2532 3.03394 14.2977 3.54499C13.3423 4.05603 12.5818 4.8676 12.1338 5.8542C11.6859 6.84081 11.5754 7.94751 11.8195 9.00319C9.86249 8.90498 7.94794 8.3966 6.19998 7.51099C4.45203 6.62538 2.90969 5.38233 1.67297 3.86241C1.0444 4.94613 0.852057 6.22854 1.13503 7.44898C1.418 8.66943 2.15506 9.73634 3.19641 10.4329C2.41463 10.4081 1.64998 10.1976 0.965625 9.81881V9.87975C0.964925 11.017 1.3581 12.1195 2.07831 12.9997C2.79852 13.8798 3.80132 14.4835 4.91625 14.7079C4.19206 14.906 3.43198 14.9349 2.69484 14.7923C3.00945 15.7703 3.62157 16.6258 4.44577 17.2392C5.26997 17.8527 6.26512 18.1935 7.29234 18.2141C5.54842 19.584 3.39417 20.327 1.17656 20.3235C0.783287 20.3229 0.390399 20.2988 0 20.2513C2.25286 21.6966 4.87353 22.4643 7.55016 22.4629Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_65_10031">
                  <rect
                    width="24"
                    height="24"
                    fill="currentColor"
                    transform="translate(0 0.712891)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_65_10032)">
                <path
                  d="M12 2.87383C15.2063 2.87383 15.5859 2.88789 16.8469 2.94414C18.0188 2.9957 18.6516 3.19258 19.0734 3.35664C19.6313 3.57227 20.0344 3.83477 20.4516 4.25195C20.8734 4.67383 21.1313 5.07227 21.3469 5.63008C21.5109 6.05195 21.7078 6.68945 21.7594 7.85664C21.8156 9.12226 21.8297 9.50195 21.8297 12.7035C21.8297 15.9098 21.8156 16.2895 21.7594 17.5504C21.7078 18.7223 21.5109 19.3551 21.3469 19.777C21.1313 20.3348 20.8687 20.7379 20.4516 21.1551C20.0297 21.577 19.6313 21.8348 19.0734 22.0504C18.6516 22.2145 18.0141 22.4113 16.8469 22.4629C15.5813 22.5191 15.2016 22.5332 12 22.5332C8.79375 22.5332 8.41406 22.5191 7.15313 22.4629C5.98125 22.4113 5.34844 22.2145 4.92656 22.0504C4.36875 21.8348 3.96563 21.5723 3.54844 21.1551C3.12656 20.7332 2.86875 20.3348 2.65313 19.777C2.48906 19.3551 2.29219 18.7176 2.24063 17.5504C2.18438 16.2848 2.17031 15.9051 2.17031 12.7035C2.17031 9.49727 2.18438 9.11758 2.24063 7.85664C2.29219 6.68477 2.48906 6.05195 2.65313 5.63008C2.86875 5.07227 3.13125 4.66914 3.54844 4.25195C3.97031 3.83008 4.36875 3.57227 4.92656 3.35664C5.34844 3.19258 5.98594 2.9957 7.15313 2.94414C8.41406 2.88789 8.79375 2.87383 12 2.87383ZM12 0.712891C8.74219 0.712891 8.33438 0.726953 7.05469 0.783203C5.77969 0.839453 4.90313 1.0457 4.14375 1.34102C3.35156 1.65039 2.68125 2.0582 2.01563 2.72852C1.34531 3.39414 0.9375 4.06445 0.628125 4.85195C0.332812 5.61602 0.126563 6.48789 0.0703125 7.76289C0.0140625 9.04727 0 9.45508 0 12.7129C0 15.9707 0.0140625 16.3785 0.0703125 17.6582C0.126563 18.9332 0.332812 19.8098 0.628125 20.5691C0.9375 21.3613 1.34531 22.0316 2.01563 22.6973C2.68125 23.3629 3.35156 23.7754 4.13906 24.0801C4.90313 24.3754 5.775 24.5816 7.05 24.6379C8.32969 24.6941 8.7375 24.7082 11.9953 24.7082C15.2531 24.7082 15.6609 24.6941 16.9406 24.6379C18.2156 24.5816 19.0922 24.3754 19.8516 24.0801C20.6391 23.7754 21.3094 23.3629 21.975 22.6973C22.6406 22.0316 23.0531 21.3613 23.3578 20.5738C23.6531 19.8098 23.8594 18.9379 23.9156 17.6629C23.9719 16.3832 23.9859 15.9754 23.9859 12.7176C23.9859 9.45977 23.9719 9.05195 23.9156 7.77227C23.8594 6.49727 23.6531 5.6207 23.3578 4.86133C23.0625 4.06445 22.6547 3.39414 21.9844 2.72852C21.3188 2.06289 20.6484 1.65039 19.8609 1.3457C19.0969 1.05039 18.225 0.844141 16.95 0.787891C15.6656 0.726953 15.2578 0.712891 12 0.712891Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M12 6.54883C8.59688 6.54883 5.83594 9.30977 5.83594 12.7129C5.83594 16.116 8.59688 18.877 12 18.877C15.4031 18.877 18.1641 16.116 18.1641 12.7129C18.1641 9.30977 15.4031 6.54883 12 6.54883ZM12 16.7113C9.79219 16.7113 8.00156 14.9207 8.00156 12.7129C8.00156 10.5051 9.79219 8.71445 12 8.71445C14.2078 8.71445 15.9984 10.5051 15.9984 12.7129C15.9984 14.9207 14.2078 16.7113 12 16.7113Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M19.8469 6.30503C19.8469 7.10191 19.2 7.74409 18.4078 7.74409C17.6109 7.74409 16.9688 7.09722 16.9688 6.30503C16.9688 5.50816 17.6156 4.86597 18.4078 4.86597C19.2 4.86597 19.8469 5.51284 19.8469 6.30503Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_65_10032">
                  <rect
                    width="24"
                    height="24"
                    fill="currentColor"
                    transform="translate(0 0.712891)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.7609 7.41685C23.7609 7.41685 23.5266 5.76216 22.8047 5.0356C21.8906 4.07935 20.8688 4.07466 20.4 4.01841C17.0438 3.77466 12.0047 3.77466 12.0047 3.77466H11.9953C11.9953 3.77466 6.95625 3.77466 3.6 4.01841C3.13125 4.07466 2.10938 4.07935 1.19531 5.0356C0.473438 5.76216 0.24375 7.41685 0.24375 7.41685C0.24375 7.41685 0 9.36216 0 11.3028V13.1215C0 15.0622 0.239062 17.0075 0.239062 17.0075C0.239062 17.0075 0.473437 18.6622 1.19062 19.3887C2.10469 20.345 3.30469 20.3122 3.83906 20.4153C5.76094 20.5981 12 20.6543 12 20.6543C12 20.6543 17.0438 20.645 20.4 20.4059C20.8688 20.3497 21.8906 20.345 22.8047 19.3887C23.5266 18.6622 23.7609 17.0075 23.7609 17.0075C23.7609 17.0075 24 15.0668 24 13.1215V11.3028C24 9.36216 23.7609 7.41685 23.7609 7.41685ZM9.52031 15.3293V8.58403L16.0031 11.9684L9.52031 15.3293Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-evenly lg:space-x-12 w-[100%]">
        <div className="mb-4">
          <h4 className="font-medium text-xl md:text-[26px] md:leading-[30.3px] lg:text-[31px] lg:leading-[40.3px] text-gray-700 dark:text-gray-100">
            Newsletter
          </h4>
          <p className="text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400 font-medium mt-4 w-[320px] md:w-[391px]">
            When new update available we will informed you via email about the
            new updates.
          </p>
          <form className="mt-4 flex items-center space-x-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
              type="email"
              placeholder="Email"
            />
            <button className="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:ring-offset-1 dark:hover:bg-indigo-700 dark:hover:text-gray-100 disabled:opacity-50 dark:focus:ring-indigo-400 disabled:pointer-events-none dark:focus:ring-offset-gray-900 bg-indigo-600 dark:bg-indigo-600 text-white hover:bg-indigo-700 h-10 py-2 px-4">
              Subscribe
            </button>
          </form>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-8 lg:mt-0">
          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-100 mb-6">
              Our Stores
            </p>
            <ul className="flex flex-col space-y-4 font-medium text-[14px] text-gray-500 dark:text-gray-400">
              <li>Washington</li>
              <li>New Hampshire</li>
              <li>Maine</li>
              <li>Texas</li>
              <li>Indiana</li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-100 mb-6">
              Services
            </p>
            <ul className="flex flex-col space-y-4 font-medium text-[14px] text-gray-500 dark:text-gray-400">
              <li>UI / UX Design</li>
              <li>App Development</li>
              <li>API reference</li>
              <li>API status</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-100 mb-6">
              Legal
            </p>
            <ul className="flex flex-col space-y-4 font-medium text-[14px] text-gray-500 dark:text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Disclaimer</li>
              <li>Media Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
