export default interface Response<T> {
    message : string,
    content : T,
    time : Date
}