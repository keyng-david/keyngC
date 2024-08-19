import { HttpService } from "./common/httpService";
import { BASE_URL } from "@/configurations/HttpConfiguration";
import type CurrencyModel from "@/models/currencyModel";

export default class CurrencyService extends HttpService {
    constructor() {
        super(BASE_URL + "/currency");
    };

    public async getList(): Promise<Array<CurrencyModel>> {
        const response = await this.get(`/list`);

        if (response.isOk()) {
            return (response.value as any).result as Array<CurrencyModel>;
        }
        throw response.error;
    }

}

    public async swap(amount: number, wallet: string, currencyId: string): Promise<UserModel> {
    const response = await this.post(`/swap`, {
      amount,
      wallet,
      currencyId
    });

    if (response.isOk()) {
      const userModel: UserModel = (response.value as any).result;
      localStorage.setItem('user', JSON.stringify(userModel));
      return userModel;
    }

    throw response.error;
  }
}