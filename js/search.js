$(function () {
    document.onkeydown = function (e) {
        if (!e) e = window.event;
        if ((e.keyCode || e.which) === 13) {
            doSearch($(".bcoSearchBtn"))
        }
    };

    $(".bcoSearchBtn").click(function () {
        doSearch($(this))
    });

    function doSearch(t) {
        var val = $.trim($(".bcoSearch").val()), regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
            regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;

        if (val === "") {
            alert("Temporarily unsupported !");("Please enter the content !");
            return false;
        }

        if (regEn.test(val) || regCn.test(val)) {
            alert("Temporarily unsupported !");("The name cannot contain special characters !");
            return false;
        }

        if (!isNaN(val) && val.length < 16) {//height判断  26638624274764770
            $.ajax({
                type: "get",
                url: protocol + "blockhash/" + val,
                dataType: "JSON",
                success: function (msg) {
                    window.location.href = "/explorer/block/" + msg['data'];
                }, error: function (err) {
                    alert('Not found')
                }
            });
        }

        if (val.match(/[0-9a-z]+/) && val.length > 34) {//交易id判断
            $.ajax({
                type: "get",
                url: protocol + "hash/" + val + "/type",
                dataType: "JSON",
                success: function (msg) {
                    if (msg['data'] === 'block') {
                        window.location.href = "/explorer/block/" + val;
                    } else if (msg['data'] === 'transaction') {
                        window.location.href = "/explorer/tx/" + val;
                    }
                }, error: function (err) {
                    alert('Not found')
                }
            });
        }

        if (val.match(/[0-9a-z]+/) && val.length === 34) {//收付款地址判断
            window.location.href = "/explorer/address/" + val;
        }

        if (val.match(/[0-9a-z]+/) && isNaN(val) && val.length < 34) {//不在查询范围判断
            alert("Temporarily unsupported !");
            return false;
        }

        if (!isNaN(val) && (val.length > 10)) {//19位20位plotterID判断
            window.location.href = "/explorer/plotter/" + val;
        }
    }
});