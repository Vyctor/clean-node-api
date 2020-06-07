class SignUpController {
  handle(httpRequest: any): any {
    return {
      statusCode: 400,
      httpRequest,
    };
  }
}

export default SignUpController;
