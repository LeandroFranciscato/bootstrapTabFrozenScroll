### The "Problem"

As you mus know, [Bootstrap tabs](https://mdbootstrap.com/components/tabs/) are very helpfull in projects that use it.
You can use it for master-detail thing, or just to present content to users. Anyway, it very simple to use... ***BUT***... There are little problems: 
* When the content of tabs are quite large.
* When are relations between the tabs.

*In the first one:* When the content are big and you scroll the page, the headers disappear. If the user want to click another TAB, he has to move up to see it.

*In the last one*: When we (programmers) use it (tabs) to make a master-detail thing, we have another issue. The scroll between the tabs are are always at the same. Let me exemplify, if you scroll down on the master tab, then, click on the detail tab and scroll up... when you get back to the master, you will be on the same position that you were on the detail. 

###### Okay, not so simple to explain, so, come on to better examples.

# The Solution

* If you think is easiest see the example, [Here](https://leandrofranciscato.github.io/bootstrapTabFrozenScroll/) is one with **bootstrapTabFrozenScroll**.

* Or, follow me: 

#### Uinsg

* Add the `tabFrozenScroll.js` and `tabFrozenScroll.css` to your page that contains the Bootstrap Tabs.
* init the `tabFrozenScroll.js` like this:
     ```js
     tabFrozenScroll("#mainTable", ".nav.nav-tabs", 0);
     ```
where `#mainTable` is the table inside your first tab, `.nav.nav-tabs` is usually the Bootstrap `ul` that represents the tabs and `0` is the number of pixels that you want to the panel float to the top of the page.

* If you want to use the dependenci between tabs, you just must define it in the `<a>` tag inside the tabs. Ex.:
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
         data-parent="tab0"
         data-toggle="tab" 
         href="#exampleTabsTwo" 
         aria-controls="exampleTabsTwo" 
         role="tab">TAB 1 - detail of TAB
      </a>
  </li>
</ul>  
```
You can notice that in the tab above, the element with the `id="tab0"` doesn't have the tag `data-parent` while the element with `id="tab1` has it; It means the element `tab1` will save the scroll information of `tab0` when you click it.

### Dependencies

* <a href="https://github.com/twbs/bootstrap">Bootstrap</a>.
* <a href="https://github.com/jquery/jquery">jquery</a>.



