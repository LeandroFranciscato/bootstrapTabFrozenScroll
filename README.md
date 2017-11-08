### The "Problem"

As you must know, [Bootstrap tabs](https://mdbootstrap.com/components/tabs/) are very helpfull in projects that use it.
You can use it for master-detail thing, or just to present content to users. Anyway, it very simple to use... ***BUT***... There are little problems: 
* When the content of tabs are quite large.
* When there are relations between the tabs.

*In the first one:* When the content are big and you scroll the page, the headers disappear. If the user want to click another TAB, he has to move up to the top to see it.

*In the last one*: When we (programmers) are using it (tabs) to make a master-detail thing, we have another issue. The scroll between the tabs are are always the same. Let me exemplify, if you scroll down on the master tab, then, click on the detail tab and scroll up... when you get back to the master, you will be on the same position that you were on the detail. 

###### Okay, not so simple to explain, so, come on to better examples.

# The Solution

* If you think is easiest, see the example [Here](https://leandrofranciscato.github.io/bootstrapTabFrozenScroll/).

* Or, follow me: 

#### Uinsg

* Add the `jquery.tabFrozenScroll.js` and `jquery.tabFrozenScroll.css` to your page that contains the Bootstrap Tabs.
* init the `jquery.tabFrozenScroll.js` like this:
     ```js
        $(".nav.nav-tabs").tabFrozenScroll({
            mainTable: "#mainTable"
        });
     ```
where `#mainTable` is the table inside your first tab, `.nav.nav-tabs` is usually the Bootstrap `ul` that represents the tabs.

* As almost always the HTML of booststrap tabs is defined as below:

```html
<ul class="nav nav-tabs" data-plugin="nav-tabs" role="tablist">
  <li class="active" 
      role="presentation">
      <a id="tab0"
         data-toggle="tab" 
         href="#exampleTabsOne" 
         aria-controls="exampleTabsOne" 
         role="tab">TAB 0 - master
      </a>
  </li>
  <li role="presentation">
      <a id="tab1"         
         data-toggle="tab" 
         href="#exampleTabsTwo" 
         aria-controls="exampleTabsTwo" 
         role="tab">TAB 1 - detail of TAB
      </a>
  </li>
</ul>  
```
### Options

#### See the Example below:

```js
$(".nav.nav-tabs").tabFrozenScroll({
    mainTable: "#myMainTable",
    minScrollHeight: 200,
    tabFixedClass: "my-class-to-fix-tabs",
    timeBeforeScroll: 50,
    callbackAfterMove: function(el) {
        // do something necessary
    }
});
```
As you can see above, there are some more options:

* `minScrollHeight` : It define the number of pixel from the top of page that you want the TABS to be fixed. The default value is `-1`.
* `tabFixedClass` : You can modify the default Css Class that is in charge to fix the tab. The default value is `.tab-fixed`.
* `timeBeforeScroll` : There are some cases that you have a lot of data within a TAB. In this cases, you might use this option in milliseconds to delay it. The default value is a `setTimeout` without the any parameter.
* `callbackAfterMove` : You can define some callback to be triggered when the tab becomes fixed or unfixed. The default value is `undefined`.

### Dependencies

* <a href="https://github.com/twbs/bootstrap">Bootstrap</a>.
* <a href="https://github.com/jquery/jquery">jQuery</a>.