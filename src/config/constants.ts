export const DEFAULT_ALERT_TIMEOUT = 30 * 1000
export const WALLET_IDX = 0
export const DEV_DOC_URL =
  'https://developer.offchainlabs.com/docs/Chain_parameters/'
// seems like metamask switched rinkeby and kovan chain ids?
export const ROLLUP_FACTORIES: { [chainId: number]: string | undefined } = {
  // 3: '0xb391A11CAeE4FACD5d99335b3bc9daD237cb855e', // ropsten
  4: '0x78D2d992bcfBCd0905603284C83248E5B14378e2', // rinkeby
  42: '0xee1250962014364aCf506061E66e78e65b8bCEEC' // kovan
}
export const ARBOS_HASH = '0xa3121bbe88d1aa990bef989652a34411dcb8b9428764315801ded4d1ab6a7188'
