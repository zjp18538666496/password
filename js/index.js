import Password from "../js/password.js";

/**
 * 启动程序
 */
const startApp = () => {
    const password = new Password();
    $("#password").val(password.getPassword()); //填充当前密码
    password.copyPassword(); //点击“复制密码”按钮时复制密码
    $("#generateNewPassword").bind("click", password.generateNewPassword); //重新生成密码
    $("#copyPassword").click(); //点击复制按钮
}

startApp(); //启动程序