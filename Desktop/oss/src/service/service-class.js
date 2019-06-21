export default class GetJson {

    _url = 'http://www.mocky.io/v2/5d03b0cf3200006100d74839';

    async getResource(url) {
        const result = await fetch(url);
        if (!result.ok) {
            throw new Error(`error status: ${result.status}`);
        }
        const body = await result.json();
        return body;
    };

    async getProducts() {
        const result = await this.getResource(`${this._url}`);
        return result.products;

    }


}
