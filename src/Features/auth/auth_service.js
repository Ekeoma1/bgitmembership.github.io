import apiRoutes from '../../routes/api_routes';
import { post } from '../../network/https';

export default class AuthService {
  // sign up
  static async signup(data) {
    const response = await post({
      url: apiRoutes.signup,
      data: { ...data },
    });
    return response;
  }

  // sign in
  static async signin(data) {
    const response = await post({
      url: apiRoutes.signin,
      data: { ...data },
    });
    return response;
  }

  //   forgot password
  static async forgotPassword(data) {
    const response = await post({
      url: apiRoutes.signin,
      data: { ...data },
    });
    return response;
  }

  //   reset password
  static async resetPassword(data) {
    const response = await post({
      url: apiRoutes.signin,
      data: { ...data },
    });
    return response;
  }
}
