import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Coop',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Henhouse',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x896eDE222D3f7f3414e136a2791BDB08AAa25Ce0',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/viking-swap/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/viking-swap',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/cockswap/",
      },
      {
        label: "Docs",
        href: "https://github.com/cockswap/",
      },
      {
        label: "Blog",
        href: "https://cockswap.medium.com/",
      },
    ],
  }
// {
// label: 'Audit by Hacken',
// icon: 'HelmetIcon',
// href: 'https://www.vikingswap.finance/files/vikingHackenAudit.pdf',
// }
]

export default config
