/**
 * 通用返回结果
 */
export default class MyResponse {
    public constructor(success:boolean, data:any, message: string){
        this.success = success;
        this.data = data;
        this.message = message;
    }

    success: boolean;
    data: any;
    message: string;
 }