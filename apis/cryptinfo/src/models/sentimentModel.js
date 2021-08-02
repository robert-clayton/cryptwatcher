/**
 * @openapi
 *  definitions:
 *      Sentiment:
 *          type: object
 *          required: [id, date, ticker, positive, negative, neutral]
 *          properties:
 *              id:
 *                  type: integer
 *              date:
 *                  type: integer
 *              ticker:
 *                  type: string
 *              positive:
 *                  type: float
 *              negative:
 *                  type: float
 *              neutral:
 *                  type: float
 *      Sentiments:
 *          type: array
 *          items:
 *              $ref: '#definitions/Sentiment'
 */
export default class Sentiment {
    constructor (id, date, ticker, positive, negative, neutral) {
        this.id = id;
        this.date = date;
        this.ticker = ticker;
        this.positive = positive;
        this.negative = negative;
        this.neutral = neutral;
    }
}