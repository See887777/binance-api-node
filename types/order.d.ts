import { BinanceRestClient, OrderSide, OrderStatus, OrderType, TimeInForce } from './base';

export interface OrderEndpoints extends BinanceRestClient {
  order(payload: {
    symbol: string;
    side: OrderSide;
    type: OrderType;
    quantity?: string;
    quoteOrderQty?: string;
    price?: string;
    newClientOrderId?: string;
    stopPrice?: string;
    trailingDelta?: number;
    trailingTime?: number;
    icebergQty?: string;
    newOrderRespType?: string;
    timeInForce?: TimeInForce;
  }): Promise<{
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: OrderSide;
    marginBuyBorrowAmount: string;
    marginBuyBorrowAsset: string;
    fills: Array<{
      price: string;
      qty: string;
      commission: string;
      commissionAsset: string;
    }>;
  }>;
  orderOco(payload: {
    symbol: string;
    side: OrderSide;
    quantity: string;
    price: string;
    stopPrice: string;
    stopLimitPrice?: string;
    stopLimitTimeInForce?: TimeInForce;
    takeProfitPrice?: string;
    takeProfitLimitPrice?: string;
    takeProfitLimitTimeInForce?: TimeInForce;
    trailingDelta?: number;
    trailingTime?: number;
    icebergQty?: string;
    newOrderRespType?: string;
  }): Promise<{
    orderListId: number;
    contingencyType: string;
    listStatusType: string;
    listOrderStatus: string;
    listClientOrderId: string;
    transactTime: number;
    symbol: string;
    orders: Array<{
      symbol: string;
      orderId: number;
      clientOrderId: string;
    }>;
    orderReports: Array<{
      symbol: string;
      orderId: number;
      orderListId: number;
      clientOrderId: string;
      transactTime: number;
      price: string;
      origQty: string;
      executedQty: string;
      cummulativeQuoteQty: string;
      status: OrderStatus;
      timeInForce: TimeInForce;
      type: OrderType;
      side: OrderSide;
      stopPrice: string;
      workingTime: number;
      selfTradePreventionMode: string;
      fills: Array<{
        price: string;
        qty: string;
        commission: string;
        commissionAsset: string;
      }>;
    }>;
  }>;
  orderTest(payload: {
    symbol: string;
    side: OrderSide;
    type: OrderType;
    quantity?: string;
    quoteOrderQty?: string;
    price?: string;
    newClientOrderId?: string;
    stopPrice?: string;
    trailingDelta?: number;
    trailingTime?: number;
    icebergQty?: string;
    newOrderRespType?: string;
    timeInForce?: TimeInForce;
  }): Promise<{
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: OrderSide;
    marginBuyBorrowAmount: string;
    marginBuyBorrowAsset: string;
    fills: Array<{
      price: string;
      qty: string;
      commission: string;
      commissionAsset: string;
    }>;
  }>;
  getOrder(payload: { symbol: string; orderId?: number; origClientOrderId?: string }): Promise<{
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: OrderSide;
    marginBuyBorrowAmount: string;
    marginBuyBorrowAsset: string;
    fills: Array<{
      price: string;
      qty: string;
      commission: string;
      commissionAsset: string;
    }>;
  }>;
  getOrderOco(payload: { orderListId?: number; origClientOrderId?: string }): Promise<{
    orderListId: number;
    contingencyType: string;
    listStatusType: string;
    listOrderStatus: string;
    listClientOrderId: string;
    transactTime: number;
    symbol: string;
    orders: Array<{
      symbol: string;
      orderId: number;
      clientOrderId: string;
    }>;
    orderReports: Array<{
      symbol: string;
      orderId: number;
      orderListId: number;
      clientOrderId: string;
      transactTime: number;
      price: string;
      origQty: string;
      executedQty: string;
      cummulativeQuoteQty: string;
      status: OrderStatus;
      timeInForce: TimeInForce;
      type: OrderType;
      side: OrderSide;
      stopPrice: string;
      workingTime: number;
      selfTradePreventionMode: string;
      fills: Array<{
        price: string;
        qty: string;
        commission: string;
        commissionAsset: string;
      }>;
    }>;
  }>;
  cancelOrder(payload: { symbol: string; orderId?: number; origClientOrderId?: string; newClientOrderId?: string }): Promise<{
    symbol: string;
    origClientOrderId: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: OrderSide;
  }>;
  cancelOrderOco(payload: { symbol: string; orderListId?: number; listClientOrderId?: string; newClientOrderId?: string }): Promise<{
    orderListId: number;
    contingencyType: string;
    listStatusType: string;
    listOrderStatus: string;
    listClientOrderId: string;
    transactTime: number;
    symbol: string;
    orders: Array<{
      symbol: string;
      orderId: number;
      clientOrderId: string;
    }>;
    orderReports: Array<{
      symbol: string;
      orderId: number;
      orderListId: number;
      clientOrderId: string;
      transactTime: number;
      price: string;
      origQty: string;
      executedQty: string;
      cummulativeQuoteQty: string;
      status: OrderStatus;
      timeInForce: TimeInForce;
      type: OrderType;
      side: OrderSide;
      stopPrice: string;
      workingTime: number;
      selfTradePreventionMode: string;
      fills: Array<{
        price: string;
        qty: string;
        commission: string;
        commissionAsset: string;
      }>;
    }>;
  }>;
  cancelOpenOrders(payload: { symbol: string }): Promise<Array<{
    symbol: string;
    origClientOrderId: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: OrderSide;
  }>>;
  openOrders(payload?: { symbol?: string }): Promise<Array<{
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: OrderSide;
    marginBuyBorrowAmount: string;
    marginBuyBorrowAsset: string;
    fills: Array<{
      price: string;
      qty: string;
      commission: string;
      commissionAsset: string;
    }>;
  }>>;
  allOrders(payload: { symbol: string; orderId?: number; startTime?: number; endTime?: number; limit?: number }): Promise<Array<{
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: OrderSide;
    marginBuyBorrowAmount: string;
    marginBuyBorrowAsset: string;
    fills: Array<{
      price: string;
      qty: string;
      commission: string;
      commissionAsset: string;
    }>;
  }>>;
  allOrdersOCO(payload: { fromId?: number; startTime?: number; endTime?: number; limit?: number }): Promise<Array<{
    orderListId: number;
    contingencyType: string;
    listStatusType: string;
    listOrderStatus: string;
    listClientOrderId: string;
    transactTime: number;
    symbol: string;
    orders: Array<{
      symbol: string;
      orderId: number;
      clientOrderId: string;
    }>;
    orderReports: Array<{
      symbol: string;
      orderId: number;
      orderListId: number;
      clientOrderId: string;
      transactTime: number;
      price: string;
      origQty: string;
      executedQty: string;
      cummulativeQuoteQty: string;
      status: OrderStatus;
      timeInForce: TimeInForce;
      type: OrderType;
      side: OrderSide;
      stopPrice: string;
      workingTime: number;
      selfTradePreventionMode: string;
      fills: Array<{
        price: string;
        qty: string;
        commission: string;
        commissionAsset: string;
      }>;
    }>;
  }>>;
} 