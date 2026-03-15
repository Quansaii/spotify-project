import React from "react";

export function Header() {
  return (
    <>
      <div className="w-full h-14 bg-black flex justify-between items-center px-8">
        <div className="w-8">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png"
            alt="Spotify"
            className="w-full"
          />
        </div>
        <div>
          <div className="w-120 flex gap-4">
            <button className="w-12 bg-[#1f1f1f] flex justify-center items-center rounded-full px-2 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M6 19h3.692v-5.077q0-.343.233-.575q.232-.233.575-.233h3q.343 0 .576.233q.232.232.232.575V19H18v-8.692q0-.154-.067-.28t-.183-.22L12.366 5.75q-.154-.134-.366-.134t-.365.134L6.25 9.808q-.115.096-.183.22t-.067.28zm-1 0v-8.692q0-.384.172-.727t.474-.565l5.385-4.078q.423-.323.966-.323t.972.323l5.385 4.077q.303.222.474.566q.172.343.172.727V19q0 .402-.299.701T18 20h-3.884q-.344 0-.576-.232q-.232-.233-.232-.576v-5.076h-2.616v5.076q0 .344-.232.576T9.885 20H6q-.402 0-.701-.299T5 19m7-6.711"
                  stroke-width="0.5"
                  stroke="#fff"
                />
              </svg>
            </button>
            
            <div class="flex items-center gap-3 bg-[#222] border border-white/20 rounded-full px-4 py-2 w-full max-w-2xl focus-within:border-white/50 transition-all">
              <svg
                class="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              <input
                type="text"
                placeholder="Что хочешь включить?"
                class="bg-transparent border-none outline-none flex-1 text-white placeholder-gray-500 text-sm flex items-center"
              />

              <div class="h-6 w-px bg-gray-700 mx-1"></div>

              <button class="text-gray-400 hover:text-white transition-colors">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 7H4V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V7Z"
                    stroke-width="2"
                  />
                  <path
                    d="M16 7V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V7"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
