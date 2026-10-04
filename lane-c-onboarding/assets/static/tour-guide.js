export const tourGuideConfig = {
    animate: false,
    smoothScroll: true,
    allowClose: true,
    prevBtnText: "← Back",
    doneBtnText: "Exit",
    onDestroyed: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

export const pstxHomeTourGuide = {
    steps: [
        {
            popover: {
                title: "PSTX Guide",
                description: `
                <img class="d-block mx-auto mb-2" src="/assets/img/tours/raising-hand.svg" alt="Home Guide" width="220" height="220"/>
                <strong>Welcome to pitchIN's Secondary Trading Market!</strong><br><br>
                <p class="tw-text-sm">Buy and sell shares of your favourite equity-crowdfunded companies here.</p>      
                <br><br>
                <a href="mailto:pstx@pitchin.my" class="tw-underline tw-text-primary-lightest tw-mt-4 tw-text-sm hover:tw-text-primary-light" target="_blank">
                    Need quick help? Email us.   
                </a>
                `,
                side: "top",
                align: "center",
                showButtons: ["next", "close"],
                popoverClass: "driver-popover--first",
            },
        },
        {
            element: ".guide1-step-2",
            popover: {
                title: "How to buy a share?",
                description: `
                <p class="tw-text-sm"><strong>Choose</strong> any of the companies based on the counters available.</p>
                <p class="tw-text-sm">Once selected click <strong>Buy</strong> to open an order.</p>
                `,
                side: "top",
                align: "center",
            },

        },
        {
            element: ".guide1-step-2",
            popover: {
                title: "How to sell a share?",
                description: `
                <p class="tw-text-sm"><strong>Look for the counter that you own,</strong> tagged as 'Own Shares'.</p>
                <p class="tw-text-sm">Once selected click <strong>Sell</strong> to open an order.</p>
                `,
                side: "top",
                align: "center",
            },
        },
        {
            popover: {
                title: "How to top-up my PSTX Account?",
                description: `
                <p class="tw-text-sm">Log in & <strong>click your profile icon</strong> located at the top right menu.</p>
                <p class="tw-text-sm">Select <strong>PSTX Account,</strong> then click <strong>Top-up.</strong></p>
                <p class="tw-text-sm">Note: Ensure you have sufficient balance before trading.</p>
                `,
                side: "bottom",
                align: "start",
            },
        },
        {
            popover: {
                title: "PSTX guide",
                description: `
                <p class="tw-text-sm">That should cover the basics of trading on the PSTX!</p>
                <p class="tw-text-sm">For more tips, see our 
                <a href="https://www.pitchin.my/pstx/how-it-works" target="_blank" class="tw-underline tw-text-primary-lightest tw-mt-4 tw-text-sm hover:tw-text-primary-light"><strong>How It Works page.</a>
                </p>
                `,
                onPopoverRender: (popover) => {
                    const kbButton = document.createElement("a");
                    kbButton.innerText = "Get more help";
                    kbButton.href = "https://support.pitchin.my/hc/en-us";
                    kbButton.target = "_blank";
                    kbButton.classList.add("tg-ghost-btn");

                    popover.wrapper.appendChild(kbButton);
                },
            },
        },
    ],
};

export const pstxMarketDetailsTourGuide = {
    steps: [
        {
            popover: {
                title: "PSTX Share info",
                description: `
                <img class="d-block mx-auto mb-2" src="/assets/img/tours/lantern-guide.svg" alt="Market Details Guide" width="220" height="220"/>
             <strong>Welcome to the PSTX Share Info page.</strong><br><br>
              There is plenty of new features & information to digest around here. Want us to show you around?
              <br><br>
              <a href="mailto:pstx@pitchin.my" class="tw-underline tw-text-primary-lightest tw-mt-4 tw-text-sm hover:tw-text-primary-light" target="_blank">
              Need quick help? Email us.   
              </a>
            `,
                side: "top",
                align: "center",
                prevBtnText: "I'll manage",
                nextBtnText: "Sure!",
                popoverClass: "driver-popover--first",
            },
        },
        {
            popover: {
                title: "Share Info page 1/6",
                description: `
                <img class="d-block mx-auto mb-2" src="/assets/img/tours/critical-thinking.svg" alt="Market Details Guide Step 1" width="220" height="220"/>
              A <strong>Share Info</strong> page is where you go to <strong>trade</strong> a particular share. Every counter has its own page.<br><br>
              From <strong>price charts, financial summary, latest news & recent trades</strong>, you will find all the necessary data you need to make an informed investment right here on this page.
            `,
            },
        },
        {
            element: ".guide2-step-3",
            popover: {
                title: "Menu tabs 2/6",
                description: `
            Switch between these tabs to <strong>access market details, view your orders,</strong> gauge market sentiment based on <strong>recent trades</strong> and <strong>news</strong> - and more – all at your fingertips.
            `,
            },
        },
        {
            element: ".guide2-step-4",
            popover: {
                title: "Trading Chart 3/6",
                description: `
            Analyse the historical price movements via the <strong>Trading Chart</strong>, which allows you to customise the time frame, so you can identify trends & strategise your entry/exit.
            `,
            },
        },
        {
            element: ".guide2-step-5",
            popover: {
                title: "Financial Summary 4/6",
                description: `
            Tap into the <strong>key statistics</strong> instrumental in determining your bid/ask price & the overview of the business offering the shares right here in this panel...
            `,
            },
        },
        {
            element: ".guide2-step-6",
            popover: {
                title: "Trade 5/6",
                description: `
            ...and when you are ready to place your buy or sell order, seal the deal at the price you want by clicking <strong>Trade</strong>.
            `,
            },
        },
        {
            element: ".guide2-step-7",
            popover: {
                title: "Order Book 6/6",
                description: `
            The <strong>Order Book</strong> displays a list of buy and sell orders for this share.<br><br>
            Buy prices represent the highest amount the buyers are willing to pay per share, while Sell prices indicate the lowest amount the sellers are asking for per share.<br><br>
            <a href="/learn/trade/auto-matching-orders" target="_blank" class="font-weight-normal">See how we <span class="font-weight-bold">auto-match</span> your orders here</a>`,
            },
        },
        {
            popover: {
                title: "The end!",
                description: `
                <img class="d-block mx-auto mb-4" src="/assets/img/tours/high-five-hand.svg" alt="Home Guide Ends" width="220" height="220"/>
                Just like that, it looks like <strong>you are ready to start trading.</strong><br><br>
                All the best & feel free to revisit this guide whenever you need it!`,
                onPopoverRender: (popover) => {
                    const kbButton = document.createElement("a");
                    kbButton.innerText = "Get more help";
                    kbButton.href = "https://support.pitchin.my/hc/en-us";
                    kbButton.target = "_blank";
                    kbButton.classList.add("tg-ghost-btn");

                    popover.wrapper.appendChild(kbButton);
                },
            },
        },
    ],
};
