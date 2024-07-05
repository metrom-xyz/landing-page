export const METROM_X_ACCOUNT = "https://twitter.com/metromxyz";

export const METROM_TELEGRAM = "https://t.me/metrom_xyz";

export const METROM_MEDIUM = "https://medium.com/@metromxyz";

export const METROM_CONTRACTS_REPO = "https://github.com/metrom-xyz/contracts";

export const METROM_DAPP_LINK =
    process.env.ENVIRONMENT === "development"
        ? "https://app.dev.metrom.xyz"
        : process.env.ENVIRONMENT === "staging"
          ? "https://app.staging.metrom.xyz"
          : "https://app.metrom.xyz";
