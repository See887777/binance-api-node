import { BinanceRestClient } from './base';
import { OrderType, OrderSide, TimeInForce } from './base';

export interface MarginAsset {
  asset: string;
  borrowed: string;
  free: string;
  interest: string;
  locked: string;
  netAsset: string;
}

export interface MarginAccountInfo {
  borrowEnabled: boolean;
  marginLevel: string;
  totalAssetOfBtc: string;
  totalLiabilityOfBtc: string;
  totalNetAssetOfBtc: string;
  tradeEnabled: boolean;
  transferEnabled: boolean;
  userAssets: MarginAsset[];
}

export interface MarginIsolatedAsset {
  asset: string;
  borrowEnabled: boolean;
  borrowed: string;
  free: string;
  interest: string;
  locked: string;
  netAsset: string;
  netAssetOfBtc: string;
  repayEnabled: boolean;
  totalAsset: string;
}

export interface MarginIsolatedSymbol {
  baseAsset: MarginIsolatedAsset;
  quoteAsset: MarginIsolatedAsset;
  symbol: string;
  isolatedCreated: boolean;
  marginLevel: string;
  marginLevelStatus: 'EXCESSIVE' | 'NORMAL' | 'MARGIN_CALL' | 'PRE_LIQUIDATION' | 'FORCE_LIQUIDATION';
  marginRatio: string;
  indexPrice: string;
  liquidatePrice: string;
  liquidateRate: string;
  tradeEnabled: boolean;
}

export interface MarginIsolatedAccount {
  assets: MarginIsolatedSymbol[];
  totalAssetOfBtc: string;
  totalLiabilityOfBtc: string;
  totalNetAssetOfBtc: string;
}

export interface MarginMaxBorrow {
  amount: string;
  borrowLimit: string;
}

export interface MarginOrderParams {
  symbol: string;
  isIsolated?: 'TRUE' | 'FALSE';
  side: OrderSide;
  type: OrderType;
  quantity?: string;
  quoteOrderQty?: string;
  price?: string;
  stopPrice?: string;
  newClientOrderId?: string;
  icebergQty?: string;
  newOrderRespType?: 'ACK' | 'RESULT' | 'FULL';
  sideEffectType?: 'NO_SIDE_EFFECT' | 'MARGIN_BUY' | 'AUTO_REPAY';
  timeInForce?: TimeInForce;
  recvWindow?: number;
}

export interface MarginOrderOcoParams extends Omit<MarginOrderParams, 'type'> {
  stopLimitPrice?: string;
  stopLimitTimeInForce?: TimeInForce;
  takeProfitPrice?: string;
  takeProfitLimitPrice?: string;
  takeProfitLimitTimeInForce?: TimeInForce;
  takeProfitIcebergQty?: string;
  stopLossPrice?: string;
  stopLossLimitPrice?: string;
  stopLossLimitTimeInForce?: TimeInForce;
  stopLossIcebergQty?: string;
  stopIcebergQty?: string;
  limitIcebergQty?: string;
  limitTimeInForce?: TimeInForce;
}

export interface MarginEndpoints extends BinanceRestClient {
  // Account endpoints
  marginAccountInfo(): Promise<MarginAccountInfo>;
  marginIsolatedAccount(params: { symbols: string }): Promise<MarginIsolatedAccount>;
  marginMaxBorrow(params: { asset: string; isolatedSymbol?: string }): Promise<MarginMaxBorrow>;
  marginCreateIsolated(params: { base: string; quote: string }): Promise<{ success: boolean; symbol: string }>;
  marginIsolatedTransfer(params: {
    asset: string;
    symbol: string;
    transFrom: 'SPOT' | 'ISOLATED_MARGIN';
    transTo: 'SPOT' | 'ISOLATED_MARGIN';
    amount: string;
  }): Promise<{ tranId: number }>;
  marginIsolatedTransferHistory(params: {
    symbol: string;
    asset?: string;
    transFrom?: 'SPOT' | 'ISOLATED_MARGIN';
    transTo?: 'SPOT' | 'ISOLATED_MARGIN';
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
  }): Promise<{
    rows: Array<{
      amount: string;
      asset: string;
      status: string;
      timestamp: number;
      txId: number;
      transFrom: string;
      transTo: string;
    }>;
    total: number;
  }>;
  disableMarginAccount(params: { symbol: string }): Promise<{ success: boolean; symbol: string }>;
  enableMarginAccount(params: { symbol: string }): Promise<{ success: boolean; symbol: string }>;
  marginAccount(): Promise<MarginAccountInfo>;

  // Order endpoints
  marginOrder(params: MarginOrderParams): Promise<any>;
  marginOrderOco(params: MarginOrderOcoParams): Promise<any>;
  marginCancelOrder(params: {
    symbol: string;
    orderId?: number;
    origClientOrderId?: string;
    newClientOrderId?: string;
  }): Promise<any>;
  marginOpenOrders(params?: { symbol?: string; isIsolated?: string }): Promise<any[]>;
  marginCancelOpenOrders(params: { symbol: string; isIsolated?: string }): Promise<any[]>;
  marginGetOrder(params: {
    symbol: string;
    isIsolated?: string;
    orderId?: string;
    origClientOrderId?: string;
  }): Promise<any>;
  marginGetOrderOco(params: {
    orderListId?: number;
    symbol?: string;
    isIsolated?: boolean;
    listClientOrderId?: string;
  }): Promise<any>;

  // Loan endpoints
  marginLoan(params: { asset: string; amount: string }): Promise<{ tranId: number }>;
  marginRepay(params: { asset: string; amount: string }): Promise<{ tranId: number }>;
} 