copyTranslateResult = () => {

    const copyDOM = document.querySelector('.translateResult');

    if (copyDOM.innerHTML !== '') {

        var range = document.createRange(); //创建一个range

        window.getSelection().removeAllRanges(); //清楚页面中已有的selection

        range.selectNode(copyDOM); // 选中需要复制的节点

        window.getSelection().addRange(range); // 执行选中元素

        var successful = document.execCommand('copy'); // 执行 copy 操作

        if (successful) {

            message.success('复制成功！');

        } else {

            message.warning('复制失败，请手动复制！');

        }

        // 移除选中的元素

        window.getSelection().removeAllRanges();

    } else {

        message.warning('没有内容');

    }

};