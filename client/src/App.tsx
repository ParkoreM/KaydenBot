import "./App.css";
import banner from "./assets/banner.png";
import nav from "./assets/nav.png";
import kayden from "./assets/kaydenBot.jpg";
import tbox from "./assets/tbox.png";

function App() {
  return (
    <div className="App flex flex-col h-screen overflow-hidden overflow-y-scroll">
      <div className="banner-container w-screen h-1/8 items-center pr-4">
        <img className="banner w-screen h-1/8" src={banner} alt="Banner" />
      </div>
      <div className="nav-container w-1/2 h-11 ml-7 mt-6 flex flex-row">
        <img className="nav w-18 h-9" src={nav} alt="Nav" />
        <div className="font-pf text-gray-100 text-lg ml-1 mt-1">
          AI ASSISTANT
        </div>
      </div>
      <div className="title-container w-1/4 h-1/8">
        <div className="font-pf text-gray-200 text-3xl ml-9 mt-1">
          AI ASSISTANT
        </div>
      </div>
      <div className="kayden-bot-container flex flex-row w-full h-3/4 justify-center mt-8">
        <img
          className="kayden-bot w-1/4 h-7/8 ml-[380px] mt-8"
          src={kayden}
          alt="Kayden"
        />
        <img
          className="text-box w-3/8 h-7/8 mb-[116px] object-scale-down"
          src={tbox}
          alt="TBox"
        />
        <div className="absolute inset-0 flex flex-col whitespace-pre-line font-pf text-gray-400 items-center justify-center mb-[135px] ml-[740px] text-xl">
          I would recommend either the{" "}
          <a
            href="https://ferriswheelpress.ca/collections/the-bijou-fountain-pen-collection/products/the-bijou-fountain-pen-forget-me-not"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline font-semibold"
          >
            The Bijou Fountain Pen - Forget Me Not
          </a>
          or the{" "}
          <a
            href="https://ferriswheelpress.ca/collections/the-carousel-fountain-pens/products/the-carousel-fountain-pen-billowing-blush"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline font-semibold"
          >
            The Carousel Fountain Pen - Billowing Blush
          </a>
          as a gift for your mother!
        </div>
      </div>
      <div className="typing-box flex flex-row justify-center h-1/4 overflow-hidden">
        <div className="text-container w-2/3 h-14 flex flex-col justify-center rounded-full mt-4 mr-4">
          <textarea
            id="message"
            rows="1"
            placeholder="Message Kayden Bot . . ."
            class="w-full p-4 pl-6 bg-gray-300 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-gray-100 resize-none overflow-hidden font-pf"
            oninput="this.style.height = 'auto'; this.style.height = this.scrollHeight + 'px'"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
