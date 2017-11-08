(function ($) {

    var tabs = [];

    $.fn.tabFrozenScroll = function (options) {
        var self = this;
        var settings = $.extend({
            mainTable: "",
            minScrollHeight: -1,
            tabFixedClass: "tab-fixed",
            timeBeforeScroll: 0,
            callbackAfterMove: undefined
        }, options);

        var moveTab = function () {
            if ($(window).scrollTop() > settings.minScrollHeight) {
                self.addClass(settings.tabFixedClass);
            } else {
                self.removeClass(settings.tabFixedClass);
            }
            if (settings.callbackAfterMove) {
                settings.callbackAfterMove(self);
            }
        };

        var saveTabPosition = function (idTab) {
            var i = findIndexTab(idTab);
            tabs[i]["lastScroll"] = $(window).scrollTop();
        };

        var scrollToTabPosition = function (idTab) {
            var i = findIndexTab(idTab);
            setTimeout(function () {
                $(window).scrollTop(tabs[i]["lastScroll"]);
            }, settings.timeBeforeScroll);
        };

        var findIndexTab = function (idTab) {
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
        };

        var existsInArrayByIndex = function (array, index, search) {
            var indexArray = array.map(function (x) {
                return x[index];
            });
            var result = indexArray.indexOf(search);
            return (result === -1) ? false : true;
        };

        if (settings.mainTable) {
            $(settings.mainTable).on("click", function () {
                tabs = [];
            });
        }

        if ($(window).scrollTop() > settings.minScrollHeight) {
            moveTab();
        }

        $(window).scroll(function () {
            moveTab();
        });

        self.find("li").on("click", function (el) {
            var idTabClicked = $(el.target).attr("id");
            var idTabActive = self.find("li[class='active']").children().attr("id");
            saveTabPosition(idTabActive);
            scrollToTabPosition(idTabClicked);
        });
    };
}(jQuery));