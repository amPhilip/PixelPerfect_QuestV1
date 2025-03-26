const Footer = () => {
    return (
      <footer className="bg-[#242424] text-white p-6 text-sm">
        <div className="container mx-auto px-6 md:px-20 lg:px-32">
          {/* Mobile Layout (default positioning) */}
          <div className="block md:hidden">
            <div className="flex justify-between items-start">
              <h2 className="text-base font-semibold">Mirae Asset Center1</h2>
              <div className="flex flex-col gap-2">
                <button className="border border-gray-500 px-3 py-1.5 rounded-full text-white hover:bg-gray-700 text-xs flex items-center justify-between min-w-[100px]">
                  <span>FAMILY SITE</span>
                  <span>▼</span>
                </button>
                <button className="border border-gray-500 px-3 py-1.5 rounded text-white hover:bg-gray-700 text-xs">
                  미래에셋
                </button>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed">
              주소: 서울특별시 중구 수하동 67 미래에셋 센터원<br />
              ( 서울특별시 중구 을지로 5길 26 )
            </p>
            <p className="mt-2 text-xs">대표번호 : 02-6030-0100</p>
          </div>
  
          {/* Desktop & Medium Devices Layout */}
          <div className="hidden md:flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold">Mirae Asset Center1</h2>
              <p className="mt-1">
                주소: 서울특별시 중구 수하동 67 미래에셋 센터원<br />
                ( 서울특별시 중구 을지로 5길 26 )
              </p>
              <p className="mt-1">대표번호 : 02-6030-0100</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-gray-400 mt-2">개인정보처리방침</div>
              <div className="flex flex-col gap-2">
                <button className="border border-gray-500 px-4 py-2 rounded-full text-white hover:bg-gray-700 w-40 flex items-center justify-between">
                  <span>FAMILY SITE</span>
                  <span>▼</span>
                </button>
                <button className="border border-gray-500 px-4 py-2 rounded text-white hover:bg-gray-700 w-40">
                  미래에셋
                </button>
              </div>
            </div>
          </div>
  
          {/* Copyright Section */}
          <div className="mt-8 md:mt-16 text-gray-400 text-[10px] md:text-xs">
            COPYRIGHT(C) 2011 MIRAE ASSET CORPORATION, CO., Ltd. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  