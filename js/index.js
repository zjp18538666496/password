import Password from "../js/password.js";

/**
 * 无操作就关闭标签页 谷歌浏览器无法关闭，需要修改浏览器权限
 * @param timeout = 600000; 关闭标签页时间,默认十分钟
 */
let autoCloseTab = (timeout) => {
    timeout = timeout || 600000;

    let timer = setInterval(checkActivity, timeout);
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(checkActivity, timeout);
    }

    function checkActivity() {
        window.close();
    }
}

/**
 * 启动程序
 */
const startApp = () => {
    const password = new Password();
    $("#password").val(password.getPassword()); //填充当前密码
    password.copyPassword(); //点击“复制密码”按钮时复制密码
    $("#generateNewPassword").bind("click", password.generateNewPassword); //重新生成密码
    $("#copyPassword").click(); //点击复制按钮
    autoCloseTab(); //无操作就关闭标签页
}


startApp(); //启动程序

