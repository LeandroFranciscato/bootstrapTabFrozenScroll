var tabs = [];

function tabFrozenScroll(mainTable, tabElement, minScrollHeight) {
    
    var tabFixedClass = "tab-fixed";

    $(mainTable).on("click", function () {
        tabs = [];
    });

    if (minScrollHeight === 0) {
        minScrollHeight = -1;
    }

    if ($(window).scrollTop() > minScrollHeight) {
        moveTab();
    }

    $(window).scroll(function () {
        var firstTab = $($(tabElement).children()[0]).hasClass("active");
        if (firstTab) {
            moveTab();
        }
    });

    function moveTab() {
        if ($(window).scrollTop() > minScrollHeight) {
            $(tabElement).addClass(tabFixedClass);
        } else {
            $(tabElement).removeClass(tabFixedClass);
        }
    }

    $(tabElement).find("li").on("click", function (el) {
        var idParentTab = $(el.target).attr("data-parent");
        var idTab = $(el.target).attr("id");
        if (idParentTab) {
            saveTabPosition(idParentTab);
        }
        if (idTab) {
            scrollToTabPosition(idTab, el);
        }
    });

    function saveTabPosition(idTab) {
        var i = findIndexTab(idTab);
        if (tabs[i]["lastScroll"] === 0) {
            tabs[i]["lastScroll"] = $(window).scrollTop();
        }
    }

    function scrollToTabPosition(idTab, el) {
        var i = findIndexTab(idTab);
        setTimeout(function () {
            $(window).scrollTop(tabs[i]["lastScroll"]);
            if (!$(el.target).attr("data-parent")) {
                tabs[i]["lastScroll"] = 0;
            }
        });
    }

    function findIndexTab(idTab) {
        if (!existsInArrayByIndex(tabs, "tab", idTab)) {
            tabs.push({tab: idTab, lastScroll: 0});
        }
        var i = 0;
        var iTab;
        tabs.forEach(function (theOne) {
            if (theOne.tab === idTab) {
                iTab = i;
            }
            i++;
        });
        return iTab;
    }

    function existsInArrayByIndex(array, index, search) {
        var indexArray = array.map(function (x) {
            return x[index];
        });
        var result = indexArray.indexOf(search);
        return (result === -1) ? false : true;
    }
}
;