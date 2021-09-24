/**
 * @author Christian P. Byrne
 * @from Sep 21
 *
 * @todo
 *      1. auto refresh when runnig low on posts of page
 *      2. ublock settings
 *      3. youtube version
 *
 *
 */

class Page {
  constructor() {
    this.table = this.getTable();
    this.posts = this.refreshPosts();

    this.postObjs = [];
    this.initPosts();
  }

  getTable = () => {
    return document.querySelector("div#siteTable");
  };

  refreshPosts = () => {
    return Array.from(this.table.querySelectorAll("div")).filter(
      (d) => d.classList[0] == "thing"
    );
  };

  initPosts = () => {
    for (const post of this.posts) {
      let obj = new Post(post);
      this.postObjs.push(obj);
    }
  };
  addHideButtons = () => {
    for (const post of this.posts) {
    }
  };
}

class Post {
  constructor(li, options) {
    const defaults = {
      hideButtonStyle: {
        position: "relative",
        background: "teal",
        float: "right",
        opacity: ".67",
        borderRadius: "4px",
        width: "25%",
        fontSize: "larger",
        textAlign: "center",
      },
      addHideButton: true,
    };
    Object.assign(defaults, options);
    this.options = defaults;
    this.main = li;
    this.thumbnail = li.querySelector("a.thumbnail");
    this.height = window.getComputedStyle(this.thumbnail).height;
    this.heightInt = this.height.substring(0, this.height.length - 2);
    this.interactions = this.getInteractionsList();

    if (defaults.addHideButton) {
      this.hideBtn = this.createButton();
      this.addHideText();
      this.appendButton();
    }
  }

  fracOfHeight = (fraction) => {
    return `${this.heightInt * fraction}px`;
  };

  styleElement = (el, styleProps) => {
    for (const [property, value] of styleProps) {
      el.style[property] = value;
    }
  };

  addHideText = () => {
    let txt = document.createElement("div");
    txt.innerHTML = "HIDE";
    let style = {
      color: "white",
      textAlign: "center",
      padding: `${this.fracOfHeight(0.33)} 0px ${this.fracOfHeight(0.33)} 0px`,
      lineHeight: this.fracOfHeight(0.33),
    };
    this.styleElement(txt, Object.entries(style));
    this.hideBtn.appendChild(txt);
  };

  getInteractionsList = () => {
    return Array.from(this.main.querySelectorAll("li"));
  };

  /**
   *
   * @param {String} keyword Word contained in the visible text of the interaction
   *    (e.g., "hide" or "share").
   */
  findInteraction = (keyword) => {
    for (const li of this.interactions) {
      if (li.querySelector("a").innerHTML.lower().contains(keyword.lower())) {
        return li;
      }
    }
  };

  /**
   * Return the list element that contains the hide button.
   *
   * @param   {HTMLDivElement}    postEl
   * @returns {HTMLLIElement}     The argument's HTMLLis"hide" button
   */
  getHideButton = () => {
    return Array.from(postEl.querySelectorAll("li")).filter(
      (li) => li.firstElementChild.tagName == "FORM"
    )[0];
  };

  appendButton = () => {
    this.main.querySelector("div.entry").prepend(this.hideBtn);
  };

  createButton = () => {
    Object.assign(this.options.hideButtonStyle, {
      height: this.height,
    });
    let styleProps = Object.entries(this.options.hideButtonStyle);

    let btn = document.createElement("div");
    this.styleElement(btn, styleProps);

    return btn;
  };
}

const page = new Page();
const post1 = page.posts[0];
const postC = new Post(post1);
