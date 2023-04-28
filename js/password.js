export default class Password {
    /**
     * 获取当前时间
     * @return {
     *  {
     *      date: (string|number),
     *      month: (string|number),
     *      hour: (string|number),
     *      year: number,
     *      minute: number
     *  }
     * }
     */
    getCurrentTime = () => {
        const now = new Date();
        const year = now.getFullYear(); //获取完整的年份(4位,1970-????)
        const month = now.getMonth() < 9 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1; //获取当前月份(0-11,0代表1月)
        const date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate(); //获取当前日(1-31)
        const hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours(); //获取当前小时数(0-23)
        const minute = now.getMinutes(); //获取当前分钟数(0-59)
        return {year, month, date, hour, minute};
    }

    /**
     * 获取当前密码
     * @return {string}
     */
    getPassword = () => {
        const currentTime = this.getCurrentTime();
        return "T" + currentTime.month + "H" + currentTime.date + "Z" + currentTime.hour + "y!"
    }

    /**
     * 复制密码
     */
    copyPassword = () => {
        const clipboard = new ClipboardJS('#copyPassword');

        clipboard.on('success', function (e) {
            layer.msg("复制成功");
            setTimeout(function () {
                layer.msg("复制的密码为：" + e.text)
            }, 1500);
        });

        clipboard.on('error', function (e) {
            layer.alert(e.action, {icon: 5});
        });
    }

    /**
     * 重新生成密码
     */
    generateNewPassword = () => {
        $("#password").val(this.getPassword()); //填充当前密码
    }
}