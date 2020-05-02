export const copyright = "&copy; UpStamps 2020";
export const urls = {
  docs: "https://docs.upstamps.com",
  code: "https://docs.upstamps.com/src-getting-started",
  api: "https://services.upstamps.com/api",
  privacy: "https://upstamps.com/#/privacy",
  terms: "https://upstamps.com/#/terms",
  pricing: "https://upstamps.com/#/pricing"
};
export const isDevMode: boolean = process.env.NODE_ENV === "development";

export const plans = {
  sandbox: {
    id: "sandbox",
    paddleId: 590898,
    price: "0€"
  },
  basic: {
    id: "591611",
    paddleId: 591611,
    price: "$9"
  },
  pro: {
    id: "591612",
    paddleId: 591612,
    price: "$29"
  },
  enterprise: {
    id: "591613",
    paddleId: 591613,
    price: "$79"
  }
};
