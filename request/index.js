let ajaxTimes = 0;
export const request = (urls) => { //export的作用是允许另一个js文件引入这个js文件的时候，可以使用其中的export变量函数等
    ajaxTimes++;
    wx - wx.showLoading({
        title: '加载中',
        mask: true
    })
    return new Promise((reslove, reject) => { //promise对象用于分叉执行，其中2个参数分别代表正确和错误的执行，若执行的回调函数正确则执行reslove
        wx.request({
            url: "https://api-hmugo-web.itheima.net/api/public/v1" + urls.url,
            success: (result) => {
                reslove(result);
            },
            fail: (err) => {
                reject(err);
            },
            complete: () => {
                ajaxTimes--;
                if (ajaxTimes == 0) {
                    wx.hideLoading({})
                }
            }
        })
    })
}