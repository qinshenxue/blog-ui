export default {

    required(v){
        return {
            isValid: v.trim() !== '',
            invalidMsg: '必填'
        }
    },
    email(v){
        return {
            isValid: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v),
            invalidMsg: '邮箱不合法'
        }
    }

}