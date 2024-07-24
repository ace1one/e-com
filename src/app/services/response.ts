export interface Response<T = void>{
    code:string;
    success:boolean;
    data:T;
    message:string;
}