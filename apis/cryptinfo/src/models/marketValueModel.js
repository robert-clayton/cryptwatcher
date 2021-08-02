/**
 * @openapi
 *  definitions:
 *      MarketValue:
 *          type: object
 *          required: [id, date, ticker, positive, negative, neutral]
 *          properties:
 *              id:
 *                  type: integer
 *              date:
 *                  type: integer
 *              ticker:
 *                  type: string
 *              priceUSD:
 *                  type: number
 *                  format: float
 *      MarketValues:
 *          type: array
 *          items:
 *              $ref: '#definitions/MarketValue'
 */
export default class MarketValue {
    constructor (id, date, ticker, priceUSD) {
        this.id = id;
        this.date = date;
        this.ticker = ticker;
        this.priceUSD = priceUSD;
    }
}
