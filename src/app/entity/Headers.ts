export interface ResponseHeader {
  success: boolean;
  detail: string;
}


export class RequestHeader {
  username: string;
  journeyid: string;
}
