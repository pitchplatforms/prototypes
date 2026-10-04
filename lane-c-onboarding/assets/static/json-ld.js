import { environment } from '../../environments/environment';

export const ldToList = (ld) => {
    if (!ld) return [];

    return ld.mainEntity.map((item, itemIndex) => {
        return {
            id: itemIndex,
            question: item.name,
            answer: item.acceptedAnswer.text,
            open: false,
        };
    });
};

export const whyInvestFaqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Who can invest in ECF?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Anyone, local or foreign, can invest as long as they are at least 18 years of age. Companies can also invest as corporate investors.",
            },
        },
        // Note: Hide this until later
        // {
        //     "@type": "Question",
        //     name: "How do I earn returns?",
        //     acceptedAnswer: {
        //         "@type": "Answer",
        //         text: "Most of the companies that raise funds through pitchIN are at the early or growth stage. Typically, these companies do not offer dividends immediately. ",
        //     },
        // },
        {
            "@type": "Question",
            name: "What is the tax incentive?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The incentive would only be eligible to claim from January 2023 onwards. The ECF investment must be made within the period of 1 January 2021 to 31 December 2023. <a href='/learn/invest/equity-crowdfunding-tax-incentive-for-investors'>Read more &raquo;</a>",
            },
        },
        {
            "@type": "Question",
            name: "Can I change my mind after investing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, you can request a refund of your investment at any time until the end of the ECF campaign, plus an additional cooling-off period of six (6) business days from the campaign end date.",
            },
        },
    ],
};

export const orderListFaqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How long does it take for my open order to be matched?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `
                This depends on how active the market is for a particular company. You’ll have to wait for another investor who is interested in buying or selling this company’s shares.<br><br>
                Do take note that orders will only be executed during <a href="/learn/trade/market-operating-hours">Market Operating Hours</a> and orders are reset every Friday 10:00 p.m.
                `,
            },
        },
        {
            "@type": "Question",
            name: "Does the order book reset on Friday affect the orders I placed?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `
                    If your order has already been matched and executed, the reset will not affect your order.
                    <br><br>
                    If your order is not yet matched (or only partially matched) by Thursday 5.00 p.m., it will be cancelled during the <a href="https://www.pitchin.my/learn/trade/market-operating-hours">Order Book Reset</a> at Friday 10.00 p.m.
                    <br><br>
                    You may create a new order when the market resumes the following week.
                `,
            },
        },
        {
            "@type": "Question",
            name: "What does a rejected or suspended order mean?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "This means the order could not be placed for various reasons, including an incorrect password, or the buy/sell price being too high or low against the last traded price. Please try to place the order again. It may also be due to automated market surveillance triggers, in which case we will review and resolve.",
            },
        },
        {
            "@type": "Question",
            name: "What does a partially matched or executed order mean?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `When you place an order to buy or sell a certain number of shares at a specified price, the order may not always be filled in its entirety in a single transaction. Instead, it can be executed in multiple transactions over time, depending on market conditions and available liquidity.<br><br>
                Partially matched orders are still open and eligible to fulfil the remaining quantity.
                `,
            },
        },
        {
            "@type": "Question",
            name: "How long is my open order valid for before I have to renew it?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `
                Unfulfilled orders will either be:<br><br>
                <ul>
                    <li>maintained on the order book until you cancel them; or</li>
                    <li>automatically cancelled by the system every Friday 10.00 p.m. during the <a href="/learn/trade/market-operating-hours">Order Book Reset</a>.</li>
                </ul>
                `,
            },
        },
    ],
};

export const PSTXFaqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is a Secondary Market?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A Secondary Market is where shares of companies can be traded. In the case of the PSTX, Traders can trade the shares of a growing number of companies that have raised funds through Equity Crowdfunding (ECF) on pitchIN.",
            },
        },
        {
            "@type": "Question",
            name: "Are there fees for trading?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `Yes, see our <a href="/learn/trade/pstx-fee-structure">Learning Portal</a> for more information.`,
            },
        },
        {
            "@type": "Question",
            name: "How can I buy or sell shares on the PSTX?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `
                    To sell on PSTX, you need to be a current shareholder of any of the companies listed. 
                    You may list your share on PSTX by visiting the Share Information page and <a href="https://www.pitchin.my/learn/trade/making-an-order">creating a Sell Order</a>.
                    <br><br>
                    PSTX operates on a cash upfront basis. To buy you need to be <a href="https://www.pitchin.my/login">logged in</a> and ensure a sufficient balance in your <a href="https://www.pitchin.my/pstx/account">PSTX account</a>. 
                    You can <a href="/learn/trade/making-an-order">create a Buy Order</a> by visiting the Share Information page of the company.
                `,
            },
        },
        {
            "@type": "Question",
            name: "Why aren't all companies listed for trade on the PSTX?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `
                There are several reasons why there may be companies which are currently not available for trading on PSTX:
                <br><br>
                <ul>
                    <li>Can only be listed 6 months after an ECF campaign;</li>
                    <li>Undergoing current corporate exercises that involve shareholding changes;</li>
                    <li>Have plans to list later or are undecided about listing;</li>
                    <li>Concurrently engaging in other fundraising endeavours.</li>
                </ul>
                <br><br>
                Visit the <a href="/learn/trade/about-businesses-listed-on-the-pstx">Learning Portal</a> for more information.
                `,
            },
        },
    ],
};

export const shareInfoMarketFaqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How do I buy shares?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `
                Refer to the following steps:
                <br><br>
                <ol>    
                    <li>Ensure you have sufficient balance in your <a href="/pstx/account">PSTX Account</a>.</li>
                    <li><a href="/learn/trade/making-an-order">Select Buy on the financial summary</a>.</li>
                </ol>
                `,
            },
        },
        {
            "@type": "Question",
            name: "Can I amend my buy/sell price after posting it on the market?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `
                If an order is already matched, no.<br><br>
                If partially matched, you can cancel the rest of the order and place a new order.<br><br>
                If an order is open and pending a match, you may cancel the order and create a new order with a new buy/sell price.
                 `,
            },
        },
        {
            "@type": "Question",
            name: "Can I place an order when the market is closed?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `
                Order entries can be placed between Tuesday 10.00 a.m. until Thursday 5.00 p.m. Order matching will take place between Wednesday to Thursday, 10.00 a.m. to 5.00 p.m. The Order Book will reset every Friday at 10.00 p.m.<br><br>
                Learn more about <a href="/learn/trade/market-operating-hours">our Market Operating Hours schedule</a>.
                `,
            },
        },
    ],
};

export const shareInfoOrdersFaqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How long does it take for my open order to be matched?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `
                This depends on how active the market is for a particular company. You’ll have to wait for another investor who is interested in buying or selling this company’s shares.<br><br>
                Do take note that orders will only be executed during <a href="/learn/trade/market-operating-hours">Trading Hours</a>. Unmatched orders remain on the Order Book until Friday 10.00 p.m. of the fourth trading week from the date placed, or until you cancel them.
                `,
            },
        },
        {
            "@type": "Question",
            name: "Does the order book reset on Friday affect the orders I placed?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `
                    If your order has already been matched and executed, the reset will not affect your order.
                    <br><br>
                    If your order has not yet expired, it will remain on the Order Book after the Friday reset — no action needed on your end.
                    <br><br>
                    If your order has expired, it will be removed during the <a href="https://www.pitchin.my/learn/trade/market-operating-hours">Order Book Reset</a> at Friday 10.00 p.m. of the fourth trading week from the date it was placed. You may place a new order when the market resumes the following week.
                `,
            },
        },
        {
            "@type": "Question",
            name: "What does a rejected or suspended order mean?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "This means the order could not be placed for various reasons, including an incorrect password, or the buy/sell price being too high or low against the last traded price. Please try to place the order again. It may also be due to automated market surveillance triggers, in which case we will review and resolve.",
            },
        },
        {
            "@type": "Question",
            name: "What does a partially matched or executed order mean?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `When you place an order to buy or sell a certain number of shares at a specified price, the order may not always be filled in its entirety in a single transaction. Instead, it can be executed in multiple transactions over time, depending on market conditions and available liquidity.<br><br>
                Partially matched orders remain open and eligible to fulfil the remaining quantity during <a href="/learn/trade/market-operating-hours">Trading Hours</a> until Friday 10.00 p.m. of the fourth trading week from the date the order was placed, or until you cancel the remaining quantity.
                `,
            },
        },
        {
            "@type": "Question",
            name: "How long is my open order valid?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `
Unfulfilled orders remain on the Order Book until Friday 10.00 p.m. of the fourth trading week from the date they were placed, after which they are automatically removed during the <a href="https://www.pitchin.my/learn/trade/market-operating-hours">Order Book Reset</a>. You can also cancel your order at any time before it expires.
                `,
            },
        },
    ],
};

export const portfolioFaqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How do I download my digital certificate?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Refer to Actions column and click on the Digital Certificate link.",
            },
        },
        {
            "@type": "Question",
            name: "What does a “pending” counter mean?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `A pending counter indicates that the share is not currently listed for trading. <a href="https://support.pitchin.my/hc/en-us/articles/14124182061085" target="_blank">Learn more about this here</a>.`,
            },
        },
        {
            "@type": "Question",
            name: "What does nominee ownership mean?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `
                Investors who participate in Equity Crowdfunding campaigns through pitchIN become part of the pitchIN nominee structure, which means that pitchIN acts as a nominee or representative for all investors in the campaign.<br><br>
                Shares traded in the PSTX are also held in <a href="/learn/invest/be-a-part-of-pitchins-nominee-structure">the nominee structure</a>.<br><br>
                This simplifies the investment process for investors and allows pitchIN to hold and manage the shares on behalf of the investors, ensuring that the investors' rights and interests are protected in the event of any changes or issues that may arise.
            `,
            },
        },
        {
            "@type": "Question",
            name: "What happens if I buy/sell my shares outside of PSTX?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `
                You will need to inform us immediately at 
                <a href="mailto:pstx@pitchin.my" target="blank">pstx@pitchin.my</a>
                 and supplement several details outlined further in our 
                <a href="https://www.pitchin.my/learn/trade/about-pitchin-secondary-trading-market" target="_blank">
                Learning Portal.
                </a>
            `,
            },
        },
    ],
};

export const walletFaqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the PSTX Account for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `
                This account is to store funds to use for trading on PSTX.<br><br>
                Note: you are not required to have a PSTX Account to take part in <a href="/equity">Equity Crowdfunding (ECF)</a> or <a href="${environment.ieoBaseUrl}">Token Crowdfunding (TCF)</a>.
                `,
            },
        },
        {
            "@type": "Question",
            name: "Is there a top up or withdrawal fee?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `No, <a href="/learn/trade/pstx-fee-structure">trading fees</a> will only apply when you buy or sell shares.`,
            },
        },
        {
            "@type": "Question",
            name: "How long does a withdrawal take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It takes up to 7 working days for the amount to be reflected in your bank account. Withdrawal requests submitted before 3.00 p.m. will be processed on the same day.",
            },
        },
        {
            "@type": "Question",
            name: "What does it mean when my transaction is declined?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `
                This means the transaction could not be verified, or the deposited funds is not the same as the intended amount. An email will be sent for more information. No funds have been debited or credited.<br><br>
                Please contact <a href='mailto:pstx@pitchin.my'>pstx@pitchin.my</a> if you think there has been a mistake.
            `,
            },
        },
        {
            "@type": "Question",
            name: "Why is my PSTX Account top up not yet reflected in my balance?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `
                For top ups using offline methods (bank transfer, cheques or SWIFT), it may take up to 3-5 business days for it to be reflected in your account.<br><br>
                If you have yet to see your top up amount beyond the stated period, contact us for assistance at <a href='mailto:pstx@pitchin.my'>pstx@pitchin.my</a>.
            `,
            },
        }
    ],
};

export const HowItWorksFaqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is pitchIN Secondary Trading Market?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "pitchIN Secondary Trading Market (PSTX) is the Secondary Market that enables Equity Crowdfunding investors or investors who missed out on these campaigns, to trade their shares and effortlessly manage their portfolios with a greater degree of freedom.",
            },
        },
        {
            "@type": "Question",
            name: "What is a Secondary Market?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A Secondary Market is where shares of companies can be traded. In the case of the PSTX, Traders can freely trade the shares of eligible companies that have raised funds through Equity Crowdfunding.",
            },
        },
        {
            "@type": "Question",
            name: "How do I top up my PSTX Account?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `
                <ol>
                    <li>Click on your profile icon dropdown menu.</li>
                    <li>Select <a href="/pstx/account">PSTX Account</a>.</li>
                    <li>Click Top Up.</li>
                    <li>Select your preferred payment method.</li>
                    <li>Complete transaction and wait for payment confirmation. You may track your top up status via the <a href="/pstx/account">Transaction History</a>.</li>
                </ol>
            `,
            },
        },
        {
            "@type": "Question",
            name: "How do I create an order?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `
                <ol>
                    <li>Ensure you have an existing account with us.</li>
                    <li>Browse the <a href="/pstx">PSTX page</a> and select a Business.</li>
                    <li>On the Share Information page, click Buy or Sell.</li>
                    <li>Set your desired order type and price.</li>
                    <li>Review and submit your order.</li>
                </ol>
                <br><br>
                Need more help? See our detailed guide <a href="https://support.pitchin.my/hc/en-us/articles/13239137056925" target="_blank">here</a>.
                `,
            },
        },
        {
            "@type": "Question",
            name: "How do I sign up to start trading?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `<a href="/sign-up">Sign up here</a> to begin your trading journey with PSTX.`,
            },
        },
        {
            "@type": "Question",
            name: "How do I sell the ECF shares I currently own?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `
                <ol>
                    <li>Ensure you have an existing account with us.</li>
                    <li>Browse the <a href="/pstx">PSTX page</a> and select the Business of which you own shares in. (Tip: look for the 'Own Shares' tag).</li>
                    <li>On the Share Information page, click Sell.</li>
                    <li>Set your desired order type and price.</li>
                    <li>Review and submit your order.</li>
                </ol><br><br>
                Need more help? See our detailed guide <a href="https://support.pitchin.my/hc/en-us/articles/13239173308701-How-do-I-sell-shares-or-place-a-sell-order-" target="_blank">here</a>.
            `,
            },
        },
    ],
};

export const howToRaiseFaqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How do I sign up and apply to fundaise?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Any business (Sdn Bhd, Bhd, LLP) registered in Malaysia can apply to fundraise. Firstly, <a href='/sign-up/register/4' target='_blank' class='tw-underline'>register as an issuer</a>, verify your account and create an Equity or Token Crowdfunding application. You’ll be required to upload some documents including your latest audited reports and business plan. An analyst will be in touch to discuss next steps.",
            },
        },
        {
            "@type": "Question",
            name: "How long does it take to complete an Equity or Token Crowdfunding campagin?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It typically takes 6 months for a company to complete a campaign. This will depend on many factors including readiness of the company and the size of investment. Every company has to complete due diligence which takes a minimum of 4-6 weeks.",
            },
        },
        {
            "@type": "Question",
            name: "Is it Equity & Token Crowdfunding legal in Malaysia?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Equity Crowdfunding has been legal in Malaysia since 2015 & Token Crowdfunding since 2022, through approved operators. pitchIN is a Recognised Market Operator (RMO) with the Securities Commission of Malaysia to offer both these services.",
            },
        },
        {
            "@type": "Question",
            name: "How much does it cost to raise funds?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Application to fundraise is free.  If an application is succesful, a nominal onboarding fee is charged. A success fee based on the amount raised is applicable at the end of a succesful campaign. For more details on <a href='/learn/raise/types-of-fees-for-issuers' target='_blank' class='tw-underline'>ECF fees</a>  & <a href='/learn/token-issue/tcf-fee-structure' target='_blank' class='tw-underline'>TCF fees</a>, visit the <a href='/learn' target='_blank' class='tw-underline'>learning portal</a>. We recommend allocating a budget for marketing your crowdfunding campaign. ",
            },
        }
    ],
}

export const shariahComplianceFaqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What kind of returns can I expect from Shariah-compliant campaigns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `The returns from Shariah-compliant investments can be diverse, ranging from modest and stable income to high-growth opportunities. <a href="https://support.pitchin.my/hc/en-us/articles/23231296737693-As-an-investor-what-kind-of-return-can-I-expect-from-Shariah-compliant-campaigns" target="_blank">Read more here.</a>`,
        },
      },
      {
        "@type": "Question",
        name: "How does pitchIN ensure ongoing Shariah compliance throughout the fundraising process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Our Shariah Advisors will provide their advice and consultation through pitchIN’s engagements with Issuers from the start of the fundraising stage and continuously during the post-fundraising stage.<br><br>
          There is also an additional measure of transparency whereby our Shariah Advisors will conduct a Shariah Compliance Review every year as monitoring Shariah status based on the issuer’s latest audited financial statements and Self-Declaration Checklists.<br><br>
          This is comparable to the Shariah compliance review undertaken for public-listed companies.`,
        },
      },
      {
        "@type": "Question",
        name: "Can non-Muslim investors invest in Shariah-compliant campaigns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Despite it being Shariah-compliant, it is not only limited to Muslims. It is available and accessible to anyone.`,
        },
      },
      {
        "@type": "Question",
        name: "What happens if a company in which I have invested violates Shariah principles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `If there is non-compliance by the Issuer, pitchIN will work with the Issuer to rectify the non-compliance factor within a certain period, e.g., 1-2 months. To guide the Issuer through this process, we will provide a rectification plan to the Issuer with guidance from our Shariah Advisors.<br><br>
          In the event that the Issuer did not comply with the rectification plan or has expressed its desire to proceed with the non-compliance factor, pitchIN may declare the Issuer as Shariah non-compliant.<br><br>
          Since the reclassification as Shariah non-compliant may result in certain implications to the Shariah-compliant deal (i.e., exit by Investors), the reclassification will only be carried out as a last resort.`,
        },
      },
    ],
  };
  