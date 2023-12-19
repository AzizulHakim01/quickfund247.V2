import React from "react";
import Layout from "../components/Layout";
import FaqComponent from "./FaqComponent";

const Faq = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  FAQ
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  Any Questions? Look Here
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <FaqComponent
                header="What is Lorem Ipsum?"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea;"
              />
              <FaqComponent
                header="Why do we use it??"
                text="t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ."
              />
              <FaqComponent
                header="Where does it come from??"
                text="IContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem ."
              />
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <FaqComponent
                header="Where can I get some?"
                text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
              />
              <FaqComponent
                header="Where can I get some??"
                text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
              />
              <FaqComponent
                header="Where can I get some??"
                text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="1440"
            height="886"
            viewBox="0 0 1440 886"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="1308.65"
                y1="1142.58"
                x2="602.827"
                y2="-418.681"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3056D3" stop-opacity="0.36" />
                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </Layout>
  );
};

export default Faq;