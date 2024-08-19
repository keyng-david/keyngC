import type LevelModel from "@/models/levelModel";
import { HttpService } from "./common/httpService";
import { BASE_URL } from "@/configurations/HttpConfiguration";
import type UserModel from "@/models/userModel";

interface ClickResponse {
    result: UserModel;
}

interface CheckRobotResponse {
    result: {
        user: UserModel;
        count: number;
    };
}

export default class GameService extends HttpService {
    constructor() {
        super(BASE_URL + "/game");
    }

    public async sendClick(count: number): Promise<UserModel> {
        const response = await this.post<ClickResponse>(`/click`, { count });
        if (response.isOk()) {
            const userModel: UserModel = response.value.result;

            localStorage.setItem('user', JSON.stringify(userModel));

            return userModel;
        }
        throw response.error;
    }

    public async checkRoBot(): Promise<number> {
        const response = await this.get<CheckRobotResponse>(`/checkRoBot`);

        if (response.isOk()) {
            const userModel: UserModel = response.value.result.user;

            localStorage.setItem('user', JSON.stringify(userModel));

            return response.value.result.count;
        }
        throw response.error;
    }
}